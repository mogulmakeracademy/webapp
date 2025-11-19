# DNS Records Quick Reference - GHL Setup

## 🎯 What You Need to Do

Add these 5 DNS records **inside your GHL (GoHighLevel) control panel** to activate mrmogulmaker.com

---

## 📍 Where to Add Records

1. Login: https://app.gohighlevel.com
2. Go to: **Settings** → **Domains** → **mrmogulmaker.com** → **DNS Settings**

---

## 📝 The 5 DNS Records to Add

### Record 1: Root Domain
```
Type:  CNAME
Name:  @
Value: mrmogulmaker.pages.dev
TTL:   3600
```

### Record 2: WWW Subdomain
```
Type:  CNAME
Name:  www
Value: mrmogulmaker.pages.dev
TTL:   3600
```

### Record 3: SPF (Email Security)
```
Type:    TXT
Name:    @
Content: v=spf1 -all
TTL:     3600
```

### Record 4: DMARC (Email Security)
```
Type:    TXT
Name:    _dmarc
Content: v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;
TTL:     3600
```

### Record 5: DKIM (Email Security)
```
Type:    TXT
Name:    *._domainkey
Content: v=DKIM1; p=
TTL:     3600
```

---

## ⚠️ If CNAME for @ Doesn't Work

Some registrars (including GHL) may not allow CNAME for root domain. If you get an error adding Record 1:

### Option 1: Use A Records Instead
```
Type:  A
Name:  @
Value: 172.64.0.1
TTL:   3600

Type:  A
Name:  @
Value: 172.64.0.2
TTL:   3600
```

### Option 2: Switch to Cloudflare Nameservers (Recommended)
See `GHL_DNS_SETUP.md` section: "Alternative Setup: Change Nameservers to Cloudflare"

---

## ✅ After Adding DNS Records

**Then Add Custom Domain in Cloudflare Pages:**

1. Go to: https://dash.cloudflare.com
2. Click: **Workers & Pages** → **mrmogulmaker**
3. Click: **Custom domains** tab
4. Click: **"Set up a custom domain"**
5. Enter: `mrmogulmaker.com` → Continue
6. Enter: `www.mrmogulmaker.com` → Continue
7. Wait 15-30 minutes for DNS propagation

---

## 🔍 Verify It's Working

**Check DNS Propagation:**
- Visit: https://www.whatsmydns.net/#CNAME/mrmogulmaker.com
- Should show: `mrmogulmaker.pages.dev`

**Test Your Website:**
- Visit: https://mrmogulmaker.com
- Visit: https://www.mrmogulmaker.com
- Both should load your Mr. Mogul Maker website

---

## 📚 Full Documentation

For detailed instructions, troubleshooting, and alternative setups:
- See: `GHL_DNS_SETUP.md` (complete guide)
- See: `OPTION_A_PROGRESS.md` (all 3 steps)

---

## ⏱️ Timeline

- **Add DNS records:** 5-10 minutes (manual)
- **DNS propagation:** 15 minutes to 24 hours
- **Cloudflare verification:** 1-15 minutes
- **SSL certificate:** 5-15 minutes

**Most users see their site active within 1-2 hours!**

---

## 🆘 Need Help?

If you encounter any issues:
1. Share screenshot of DNS records in GHL
2. Share any error messages
3. Let me know which step is causing trouble

I'll help troubleshoot! 🚀
