# Formspree Setup Guide

This guide will help you set up form submissions for your debt settlement consultation form.

## Step 1: Create Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account (50 submissions/month)
3. Verify your email address

## Step 2: Create a New Form

1. Click "New Form" in your Formspree dashboard
2. Enter form name: **"Debt Settlement Consultation"**
3. Set notification email to your business email
4. Copy the **Form ID** (looks like: `mqazwxyz`)

## Step 3: Configure Environment Variables

1. Create a `.env` file in your project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Formspree form ID:
   ```
   VITE_FORMSPREE_ID=mqazwxyz
   ```
   (Replace `mqazwxyz` with your actual form ID)

## Step 4: Deploy to Vercel

1. **Add environment variable to Vercel:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add:
     - Name: `VITE_FORMSPREE_ID`
     - Value: `your-actual-form-id`

2. **Redeploy your site:**
   ```bash
   git add .
   git commit -m "Add Formspree form integration"
   git push origin master
   ```

## Step 5: Test Your Form

1. Visit your deployed site
2. Fill out the consultation form
3. Check your email for notification
4. Check Formspree dashboard for submission

## What Data Gets Collected

Your form will collect and send:
- Full Name
- Email Address
- Phone Number
- Debt Amount
- Debt Types (comma-separated)
- Preferred Contact Method
- Consultation Time
- Additional Notes
- Form Name: "Debt Settlement Consultation"
- Submission Date/Time

## Where Forms Arrive

✅ **Email notifications** sent to your business email  
✅ **Formspree dashboard** to view all submissions  
✅ **Export options** (CSV, integrations with other tools)

## Troubleshooting

**Form not submitting?**
- Check that `VITE_FORMSPREE_ID` is set in Vercel environment variables
- Verify the form ID is correct (no extra spaces)
- Check browser console for error messages

**Not receiving emails?**
- Check spam folder
- Verify notification email in Formspree settings
- Test with a different email address

**Need more submissions?**
- Formspree paid plans start at $10/month for 1,000 submissions
- You can also upgrade as needed

## Security Features

Formspree automatically includes:
- ✅ Spam protection
- ✅ CAPTCHA when needed
- ✅ Rate limiting
- ✅ Data encryption
- ✅ GDPR compliance

Your form data is secure and professional-grade!