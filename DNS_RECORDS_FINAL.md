# DNS Records to Add in GHL - FINAL VERSION

## 🎯 Copy-Paste These Exactly

Based on your GHL interface, add these **6 DNS records**:

---

## Record 1: Root Domain IP #1
```
Type:         A
Name:         @
IPv4 Address: 172.64.0.1
```

## Record 2: Root Domain IP #2
```
Type:         A
Name:         @
IPv4 Address: 172.64.0.2
```

## Record 3: WWW Subdomain
```
Type:   CNAME (select "CNA..." from dropdown)
Name:   www
Target: mrmogulmaker.pages.dev
```

## Record 4: SPF (Email Security)
```
Type:    TXT
Name:    @
Content: v=spf1 -all
```

## Record 5: DMARC (Email Security)
```
Type:    TXT
Name:    _dmarc
Content: v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;
```

## Record 6: DKIM (Email Security)
```
Type:    TXT
Name:    *._domainkey
Content: v=DKIM1; p=
```

---

## ✅ After Adding All Records

1. Go to: https://dash.cloudflare.com
2. Click: Workers & Pages → mrmogulmaker → Custom domains
3. Add: `mrmogulmaker.com`
4. Add: `www.mrmogulmaker.com`
5. Wait 30 minutes

Then test:
- https://mrmogulmaker.com
- https://www.mrmogulmaker.com

---

## 📚 Full Instructions
See: `GHL_DNS_CORRECT_SETUP.md`

---

## Why A Records Instead of CNAME?

GHL (like most registrars) doesn't allow CNAME for root domain (@). So we use:
- **A records** for root domain (points to Cloudflare IPs)
- **CNAME** for www subdomain (points to your Pages site)

Both work perfectly together! ✅
