# Newsletter Email Collection Setup

The newsletter subscription is currently storing emails locally in the browser's localStorage for testing. To properly collect emails, you'll need to set up one of the following services:

## Option 1: Use Formspree (Easiest - Free tier available)

1. Go to [formspree.io](https://formspree.io)
2. Create a new form called "Newsletter Subscription"
3. Get your form ID
4. Update `NewsletterSignup.jsx` line 30 to:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ email: email })
   });
   ```

## Option 2: Use Mailchimp (Best for email marketing)

1. Sign up at [mailchimp.com](https://mailchimp.com)
2. Create an audience/list
3. Generate an API key
4. Use Mailchimp's API or embedded forms
5. Update the NewsletterSignup component with Mailchimp integration

## Option 3: Use SendGrid (Best for developers)

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Set up a backend endpoint (Node.js, Python, etc.)
4. Update NewsletterSignup to call your backend API

## Option 4: Use Vercel Functions (Serverless)

1. Create `/api/newsletter.js` in your project
2. Use Vercel's serverless functions
3. Store emails in a database (MongoDB, PostgreSQL, etc.)
4. Update NewsletterSignup to call `/api/newsletter`

## Current Implementation

Right now, the newsletter:
- ✅ Validates email format
- ✅ Prevents duplicate subscriptions
- ✅ Shows success popup
- ✅ Stores emails in localStorage
- ✅ Works without backend setup

To view collected emails (for testing):
1. Open browser console (F12)
2. Type: `localStorage.getItem('newsletter_subscriptions')`
3. You'll see all stored email addresses

## Testing the Current Setup

The newsletter will now work without errors:
1. Enter any valid email
2. Click Subscribe
3. See success popup
4. Check console for confirmation

The emails are being collected locally and can be exported when you set up a proper email service.