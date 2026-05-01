import { isValidEmail, isValidWhatsapp } from "@/lib/utils";
import type { LeadFormPayload, LeadRecord } from "@/types";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

async function readLeads() {
  try {
    const file = await fs.readFile(LEADS_FILE, "utf8");
    return JSON.parse(file) as LeadRecord[];
  } catch {
    return [];
  }
}

function validateLead(payload: LeadFormPayload) {
  if (payload.website?.trim()) return "Spam submission detected.";
  if (!payload.name?.trim()) return "Name is required.";
  if (!isValidEmail(payload.email ?? "")) return "Valid email is required.";
  if (!isValidWhatsapp(payload.whatsapp ?? "")) return "Valid WhatsApp number is required.";

  if (payload.type === "roadmap") {
    if (!payload.currentLevel) return "Current level is required.";
    if (!payload.interest) return "Interest is required.";
  }

  if (payload.type === "support" && !payload.message?.trim()) {
    return "Message is required.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadFormPayload;
    const error = validateLead(payload);

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    const leadRecord: LeadRecord = {
      ...payload,
      name: payload.name.trim(),
      email: payload.email.trim(),
      whatsapp: payload.whatsapp.trim(),
      message: payload.message?.trim(),
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };

    const leads = await readLeads();

    // Send to Google Sheets if the Webhook URL is set
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (googleSheetWebhookUrl) {
      try {
        await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadRecord)
        });
      } catch (webhookError) {
        console.error("Failed to push lead to Google Sheets:", webhookError);
        // Continue execution to save locally as fallback
      }
    }

    try {
      await fs.writeFile(LEADS_FILE, JSON.stringify([leadRecord, ...leads], null, 2), "utf8");
    } catch (fsError) {
      console.error("Local file save failed (expected on Vercel):", fsError);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("API Route Error:", err);
    return Response.json({ error: "Unable to save lead right now." }, { status: 500 });
  }
}
