# Connecting Your Form to Google Sheets

Since your site runs on a serverless platform (like Vercel), local files like `leads.json` get wiped out periodically. To permanently store the leads collected from the Free Roadmap bundle form, we'll connect it to a Google Sheet using a Webhook.

Follow these 5 simple steps:

### Step 1: Create a Google Sheet
1. Open Google Sheets and create a new blank spreadsheet.
2. Name it something like **"Vishal AI Academy - Leads"**.
3. In the first row (headers), add the exact following columns:
   - `Date` (in A1)
   - `Name` (in B1)
   - `Email` (in C1)
   - `WhatsApp` (in D1)
   - `Type` (in E1)
   - `Current Level` (in F1)
   - `Interest` (in G1)
   - `Message` (in H1)

### Step 2: Open Google Apps Script
1. In your Google Sheet, click on **Extensions > Apps Script** from the top menu.
2. A new tab will open with the code editor. Delete any code already there.

### Step 3: Paste This Code
Paste the following code into the editor and save it:

```javascript
const SHEET_NAME = "Sheet1"; // Change this if your sheet tab has a different name

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    // Extract the fields from the payload
    const rowData = [
      new Date().toLocaleString(), // Date
      data.name || "",
      data.email || "",
      data.whatsapp || "",
      data.type || "",
      data.currentLevel || "",
      data.interest || "",
      data.message || ""
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 4: Deploy as a Web App
1. Click the blue **Deploy** button in the top right, then select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: Form Webhook
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**.
5. *Note:* Google will ask you to authorize the script. Click "Review permissions", select your account, click "Advanced", and click "Go to Untitled project (unsafe)". Click "Allow".
6. **Copy the Web app URL** provided. It will look like `https://script.google.com/macros/s/.../exec`.

### Step 5: Add Webhook to Your Project
1. Open your project codebase.
2. If you don't have a `.env.local` file, duplicate the `.env.example` file and rename it to `.env.local`.
3. Add the following line to your `.env.local` file:
   ```
   GOOGLE_SHEET_WEBHOOK_URL="PASTE_YOUR_WEB_APP_URL_HERE"
   ```
4. If you deploy your site on Vercel, remember to also add `GOOGLE_SHEET_WEBHOOK_URL` into your Vercel Environment Variables.

**That's it!** Your lead form is now securely linked to Google Sheets.
