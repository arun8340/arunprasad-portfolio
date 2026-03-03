import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    // Google Apps Script redirects POST → 302 → GET.
    // The data is saved on the first POST hit, before the redirect.
    // We use redirect: 'follow' and treat any completed fetch as success.
    await fetch(webhookUrl, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'text/plain' }, // avoid CORS preflight
      body: JSON.stringify({ name, email, subject, message }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] fetch error:', err);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
