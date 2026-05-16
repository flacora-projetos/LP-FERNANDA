import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import crypto from "crypto";
import cookieParser from "cookie-parser";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Needed to parse JSON request body
  app.use(express.json());
  
  // Needed to parse cookies
  app.use(cookieParser());

  // Trust proxy to get correct client IP
  app.set("trust proxy", true);

  // API POST route for Meta Conversions API
  app.post("/api/meta-event", async (req, res) => {
    try {
      const { 
        eventName, 
        eventId, 
        eventUrl, 
        actionSource = "website" 
      } = req.body;

      // Extract details from request for user_data
      const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
      const userAgent = req.headers["user-agent"];
      const fbp = req.cookies && req.cookies["_fbp"];
      const fbc = req.cookies && req.cookies["_fbc"];

      const PIXEL_ID = process.env.META_PIXEL_ID;
      const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
      const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

      if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.warn("Meta Conversions API is not configured (missing PIXEL_ID or ACCESS_TOKEN).");
        return res.status(200).json({ status: "skipped", message: "Meta CAPI not configured" });
      }

      const metaUrl = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

      const timeNow = Math.floor(Date.now() / 1000);

      const eventData: any = {
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
        custom_data: {
        },
        event_source_url: eventUrl,
      };

      const payload: any = {
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
      res.json({ status: "success" });
    } catch (error) {
      console.error("Error sending to Meta CAPI:", error);
      res.status(500).json({ status: "error", message: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
