# Backyard Farm — Website v3

This is a static, mobile-responsive Cloudflare Pages website. No build step, server, or paid web hosting is required within Cloudflare free-tier usage allowances.

## Pages

- `index.html`: Homepage featuring whole processed chickens, email-only purchase inquiries, farm practices, newsletter requests, and contact details.
- `journal.html`: Public Farm Journal with an introductory article. Publish new real stories here as they become available. No fictitious news or inventory is presented.
- `styles.css`: Shared responsive styles.
- `site.js`: Contact links, draft composition, and mobile navigation.
- `assets/`: Original placeholder farm artwork and logo.

## Required before going live

1. Edit `site.js`, replacing `REPLACE_WITH_YOUR_PROTON_EMAIL` with the publicly shareable address hosted through Proton Mail (for example `hello@yourdomain.com`). **Never paste passwords or API keys into a website file.**
2. Review claims about pasture practices and hands-on processing in both HTML files. Confirm that local sale and processing arrangements comply with applicable rules. Add actual pricing and pickup area only when confirmed; the template intentionally does not invent these.
3. Replace placeholder vector artwork and logo if you want to use the farm's actual branding and photos.
4. Test the email form on a device with a configured default email program. It uses `mailto:` and **does not send email itself**; the visitor must press Send in the email program. No inquiries are stored on the website.
5. Optionally link a newsletter vendor's hosted double-opt-in signup form when ready. **Current “Request email updates” buttons only prepare an email inquiry and do not add subscribers automatically.** Do not imply emails have been subscribed until they are enrolled.

## Deploy to Cloudflare Pages

1. Log into https://dash.cloudflare.com/ and go to **Workers & Pages**.
2. Create a **Pages** application using Direct Upload. Upload the *contents* of this folder (so `index.html` is at the project root), or connect a Git repository that contains these files.
3. Test the temporary `*.pages.dev` URL, including the `journal.html` page, mobile navigation, and email drafts.
4. From the Pages project, add the existing domain under **Custom domains**, following the Cloudflare prompts.
5. Preserve the domain's existing Proton Mail **MX**, **SPF**, **DKIM**, and **DMARC** records. Connecting the website should only require website-related DNS changes, not replacement of email DNS.

## Maintaining the journal

The existing journal page contains one introductory article. To publish a new article, copy the article markup inside `journal.html`, replace it with factual content, and add the newest entry above prior entries, or create separate HTML article pages linked from the journal listing. Keep article dates accurate, and link new articles from the home preview. For frequently updated content, a static-site generator like Eleventy or Astro can simplify editorial maintenance without changing the hosting platform.

## Newsletter upgrade

To enable actual self-service subscriptions, create a mailing list in a provider such as Brevo or MailerLite and configure a confirmed opt-in form. Replace the current newsletter request CTA with the provider's hosted signup URL or official embed. Add appropriate privacy disclosures and ensure every campaign includes an unsubscribe mechanism. Proton Mail continues handling person-to-person correspondence.

## Notes

- Sales are by email inquiry only, not checkout, payment, or confirmed order.
- The site intentionally does not claim that inventory is available now or publish made-up product prices.
- Fonts load from Google Fonts; system fallbacks are provided.
