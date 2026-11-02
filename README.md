# Tweaker website (GitHub Pages)

Upload `index.html`, `style.css`, and `script.js` to the **public** `tweaker` repository root, then enable Settings → Pages → Deploy from a branch → main → /(root).

**Important:** This is a checkout UI preview, not a live payment system. No card fields are active; they are visual placeholders. PayPal has no live URL. No automatic download is provided. GitHub Pages cannot safely verify payment or keep a paid executable private.

To launch paid sales, use a payment processor that supports card and PayPal payments (or separate integrations) and a server-side payment webhook to validate completed orders. The backend should issue a time-limited download URL from private storage only after verification. Never put the paid ZIP, payment secret, webhook secret, or a real discount bypass code in a public GitHub Pages repository. The temporary code UI in this preview never grants downloads. Remove the developer test section and its JS before going live.

A parent/guardian should handle merchant account setup and payment-service eligibility.
