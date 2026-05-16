export default async function handler(req, res) {
  // CORS configuration (allow requests from the same origin)
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { 
      eventName, 
      eventId, 
      eventUrl, 
      actionSource = "website" 
    } = req.body || {};

    const clientIp = req.headers["x-forwarded-for"] || req.connection?.remoteAddress;
    const userAgent = req.headers["user-agent"];
    const fbp = req.cookies ? req.cookies["_fbp"] : undefined;
    const fbc = req.cookies ? req.cookies["_fbc"] : undefined;

    const PIXEL_ID = process.env.META_PIXEL_ID;
    const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
    const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

    if (!PIXEL_ID || !ACCESS_TOKEN) {
      console.warn("Meta Conversions API is not configured (missing PIXEL_ID or ACCESS_TOKEN).");
      return res.status(200).json({ status: "skipped", message: "Meta CAPI not configured" });
    }

    const metaUrl = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

    const timeNow = Math.floor(Date.now() / 1000);

    const eventData = {
      event_name: eventName,
      event_time: timeNow,
      event_id: eventId,
      action_source: actionSource,
      user_data: {
        client_ip_address: clientIp,
        client_user_agent: userAgent,
        fbp: fbp,
        fbc: fbc,
      },
      custom_data: {},
      event_source_url: eventUrl,
    };

    const payload = {
      data: [eventData],
      access_token: ACCESS_TOKEN,
    };

    if (TEST_EVENT_CODE) {
      payload.test_event_code = TEST_EVENT_CODE;
    }

    const response = await fetch(metaUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Meta CAPI error:", data);
      return res.status(400).json({ status: "error", error: data });
    }

    console.log(`[Meta CAPI] Event '${eventName}' sent successfully. ID: ${eventId}`);
    return res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("Error sending to Meta CAPI:", error);
    return res.status(500).json({ status: "error", message: "Internal server error" });
  }
}
