const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { firstName, lastName, email, phone, eventType, eventDate, hours, venue, message } = JSON.parse(event.body)

    await transporter.sendMail({
      from: `"The Frame House" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Inquiry — ${firstName} ${lastName} | ${eventType}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1A1A1A;">
          <div style="background:#1A1A1A;padding:30px;text-align:center;">
            <h1 style="color:#C9A96E;font-size:22px;letter-spacing:4px;margin:0;">THE FRAME HOUSE</h1>
          </div>
          <div style="padding:40px 30px;background:#FAF8F5;">
            <h2 style="font-size:20px;margin-bottom:30px;">New Inquiry Received</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;color:#8B8B8B;width:40%;">Name</td><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;color:#8B8B8B;">Email</td><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;color:#8B8B8B;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;">${phone || '—'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;color:#8B8B8B;">Event Type</td><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;">${eventType}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;color:#8B8B8B;">Event Date</td><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;">${eventDate || '—'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;color:#8B8B8B;">Hours</td><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;">${hours || 'Not sure yet'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;color:#8B8B8B;">Venue</td><td style="padding:10px 0;border-bottom:1px solid #E8E4DE;">${venue || '—'}</td></tr>
              <tr><td style="padding:10px 0;color:#8B8B8B;vertical-align:top;">Message</td><td style="padding:10px 0;">${message || '—'}</td></tr>
            </table>
            <div style="margin-top:30px;text-align:center;">
              <a href="mailto:${email}" style="background:#1A1A1A;color:#FAF8F5;padding:14px 30px;text-decoration:none;font-size:12px;letter-spacing:2px;">REPLY TO ${firstName.toUpperCase()}</a>
            </div>
          </div>
        </div>
      `,
    })

    await transporter.sendMail({
      from: `"The Frame House" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We received your inquiry — The Frame House`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1A1A1A;">
          <div style="background:#1A1A1A;padding:30px;text-align:center;">
            <h1 style="color:#C9A96E;font-size:22px;letter-spacing:4px;margin:0;">THE FRAME HOUSE</h1>
          </div>
          <div style="padding:40px 30px;background:#FAF8F5;">
            <h2 style="font-size:20px;margin-bottom:16px;">Thank you, ${firstName}.</h2>
            <p style="color:#8B8B8B;line-height:1.8;margin-bottom:20px;">We received your inquiry and will be in touch within 24 hours to confirm availability.</p>
            <p style="color:#8B8B8B;line-height:1.8;margin-bottom:30px;">In the meantime, browse our packages at <a href="https://theframehouse.online/packages">theframehouse.online/packages</a>.</p>
            <div style="border-top:1px solid #E8E4DE;padding-top:30px;text-align:center;">
              <p style="font-size:11px;letter-spacing:3px;color:#8B8B8B;">EVERY MOMENT, BEAUTIFULLY FRAMED.</p>
              <p style="font-size:11px;color:#8B8B8B;">Great Lakes Bay Region, Michigan</p>
            </div>
          </div>
        </div>
      `,
    })

    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send' }) }
  }
}
