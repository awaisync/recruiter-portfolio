# Future work: free EU.org domain

Target domain: `awais-ibrahim.eu.org`

Status: Deferred. Continue using the free Vercel address until EU.org approves the requested domain.

## Important limitations

- EU.org registration is free, but approval is manual and not guaranteed.
- EU.org recommends using an existing country namespace instead of registering directly under `eu.org`. If the preferred request is rejected, try `awais-ibrahim.be.eu.org`.
- The service is free under its current policy, but no external service can be guaranteed to remain available forever.
- Use accurate owner information. Select the private-WHOIS option where available.
- Do not use Gmail for the EU.org account because the EU.org form warns that Gmail rejects its validation messages. Use another email account that can receive the confirmation message.

## Step 1: prepare Cloudflare DNS

1. Create or sign in to a free Cloudflare account.
2. Choose **Add a domain** and enter `awais-ibrahim.eu.org`.
3. Select the Free plan.
4. Record the two authoritative Cloudflare nameservers assigned to the zone.
5. The zone may remain pending until EU.org delegates the domain.
6. If Cloudflare refuses to add the domain before delegation, save the error and use another authoritative DNS provider or Vercel DNS.

## Step 2: request the EU.org domain

1. Open <https://nic.eu.org/arf/en/>.
2. Create a contact handle using a non-Gmail email address.
3. Enter accurate owner information: full name, address, country, phone and email.
4. Enable the private-WHOIS option.
5. Accept the EU.org policies.
6. Request `awais-ibrahim.eu.org`.
7. Enter the two Cloudflare nameservers.
8. Submit the request and wait for manual review.

Suggested purpose:

> Personal, non-commercial portfolio and CV website for Awais Ibrahim, presenting my education, professional engineering experience, technical skills and selected projects to prospective employers. The domain will not be used for commercial hosting, resale, advertising, spam, phishing or domain parking.

Official references:

- <https://nic.eu.org/register.html>
- <https://nic.eu.org/policy.html>
- <https://nic.eu.org/top-policy.html>

## Step 3: activate Cloudflare after approval

1. Confirm that EU.org delegated the domain to the two assigned Cloudflare nameservers.
2. Wait for the Cloudflare zone status to change from **Pending** to **Active**.
3. Do not enable DNSSEC unless both EU.org and Cloudflare show the required delegation information.

## Step 4: connect the domain to Vercel

1. Open the Vercel portfolio project.
2. Go to **Settings > Domains**.
3. Add `awais-ibrahim.eu.org`.
4. Copy the exact DNS values Vercel displays; project-specific values take priority over generic examples.
5. In Cloudflare DNS, add the apex record requested by Vercel. It will normally resemble:

   ```text
   Type: A
   Name: @
   Target: 76.76.21.21
   Proxy status: DNS only
   TTL: Auto
   ```

6. If Vercel requests ownership verification, add its TXT record in Cloudflare.
7. Optional: add `www.awais-ibrahim.eu.org` in Vercel and create the exact CNAME record Vercel supplies.
8. Wait for DNS verification and Vercel's automatic HTTPS certificate.
9. Test the HTTPS address and confirm that it serves the latest production deployment.

Optional verification commands after installing or invoking the Vercel CLI:

```powershell
npx.cmd vercel link
npx.cmd vercel domains inspect awais-ibrahim.eu.org
npx.cmd vercel certs ls
```

Because Cloudflare will manage DNS, create DNS records in Cloudflare rather than using `vercel dns add`.

## Final checks

- `https://awais-ibrahim.eu.org` loads without certificate warnings.
- The domain is attached to the Vercel production branch.
- GitHub pushes still trigger Vercel deployments.
- The public Contact section contains only email, phone and LinkedIn.
- No street address, referee details, client data or confidential material is published.

