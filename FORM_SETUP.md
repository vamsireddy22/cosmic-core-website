# Contact Form Setup

## Current Implementation

The contact form is now configured to work with Formspree, a free form handling service for static websites.

## Setup Instructions

### 1. Create a Formspree Account
1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

### 2. Get Your Form ID
1. After creating a form, you'll get a form ID like `xpzgqjqj`
2. The form endpoint will be: `https://formspree.io/f/xpzgqjqj`

### 3. Update the Form Action
In `src/pages/Contact.tsx`, replace the form action URL with your actual Formspree form ID:

```tsx
<form 
  action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" 
  method="POST"
  onSubmit={handleSubmit} 
  className="space-y-6"
>
```

### 4. Test the Form
1. Fill out the contact form
2. Submit it
3. Check your email for the form submission
4. Check the Formspree dashboard for submissions

## Alternative Services

If you prefer not to use Formspree, here are other options:

### Netlify Forms
If deploying to Netlify, you can use their built-in form handling:

```tsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* form fields */}
</form>
```

### EmailJS
For more control, you can use EmailJS:

1. Install: `npm install @emailjs/browser`
2. Set up EmailJS account
3. Configure email templates
4. Use EmailJS.send() in handleSubmit

### Custom Backend
For a custom solution, you can:
1. Set up an Express.js server
2. Use nodemailer for email sending
3. Deploy to Vercel, Netlify Functions, or similar

## Current Form Fields

The form includes these fields:
- **name**: Full name (required)
- **email**: Email address (required)
- **phone**: Phone number (optional)
- **_subject**: Subject line (required)
- **message**: Message content (required)

## Troubleshooting

### Form Not Submitting
1. Check browser console for errors
2. Verify Formspree form ID is correct
3. Ensure all required fields are filled
4. Check network tab for failed requests

### Emails Not Received
1. Check spam folder
2. Verify email address in Formspree settings
3. Check Formspree dashboard for submissions

### CORS Errors
If you see CORS errors, the form action URL might be incorrect or the service might be down. 