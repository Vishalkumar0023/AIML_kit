import crypto from "crypto";

function base64UrlEncode(input: string | Buffer) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function getDriveAccessToken() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Google service account credentials are missing.");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: "RS256",
    typ: "JWT"
  };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/drive",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();

  const signature = signer.sign(privateKey);
  const assertion = `${unsignedToken}.${base64UrlEncode(signature)}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google token request failed: ${text}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

export async function grantDriveFolderAccess(input: {
  folderId: string;
  buyerEmail: string;
  productName: string;
}) {
  const accessToken = await getDriveAccessToken();
  const emailMessage = `Your payment for ${input.productName} was verified. Google Drive access has been granted to this email.`;
  const url = new URL(
    `https://www.googleapis.com/drive/v3/files/${input.folderId}/permissions`
  );

  url.searchParams.set("sendNotificationEmail", "true");
  url.searchParams.set("supportsAllDrives", "true");
  url.searchParams.set("emailMessage", emailMessage);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      role: "reader",
      type: "user",
      emailAddress: input.buyerEmail
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    const text = await response.text();

    if (response.status === 409 || text.toLowerCase().includes("already")) {
      return { alreadyGranted: true };
    }

    throw new Error(`Google Drive share failed: ${text}`);
  }

  return { alreadyGranted: false };
}
