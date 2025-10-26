# Shop Subdomain Setup - Quick Checklist

## ✅ **What's Already Done:**

1. ✅ **Website Code Updated**
   - Navigation now points to: `shop.mrmogulmaker.com`
   - Removed `target="_blank"` for seamless experience
   - Changes committed to git

2. ✅ **Website Deployed**
   - Live at: https://www.mrmogulmaker.com
   - Latest deployment: https://8b0f6fe1.mrmogulmaker.pages.dev

---

## 📋 **What YOU Need to Do:**

### **Step 1: Configure GoHighLevel**

**Go to GoHighLevel:**
1. Log in to your GHL account
2. Navigate to: **Sites** → Your Store
3. Click: **Settings** → **Custom Domain**
4. Enter: `shop.mrmogulmaker.com`
5. Click **Save**

**GHL will show you DNS records** - something like:

```
Type: CNAME
Name: shop
Target: stores.gohighlevel.com (or similar)
```

**⚠️ COPY THE TARGET VALUE - You'll need it for next step!**

---

### **Step 2: Add DNS Record in Cloudflare**

**Go to Cloudflare:**
1. Log in to https://dash.cloudflare.com
2. Select domain: `mrmogulmaker.com`
3. Click **DNS** (left sidebar)
4. Click **Add record**

**Add CNAME Record:**
- **Type:** `CNAME`
- **Name:** `shop`
- **Target:** (paste what GHL gave you)
- **TTL:** Auto
- **Proxy status:** 🌐 **DNS only** (IMPORTANT: Gray cloud, NOT orange!)
- Click **Save**

---

### **Step 3: Wait for Verification**

⏱️ **Wait 5-15 minutes** for DNS propagation

**Then verify:**
1. Go back to GHL → Sites → Settings → Custom Domain
2. Status should show: ✅ "Connected" or "Verified"
3. Try visiting: `https://shop.mrmogulmaker.com`
4. Should show your GHL store with custom CSS!

---

## 🎯 **Expected Result:**

### Before:
- Click "Shop" → Goes to: `https://mrmogulmaker.com/products-list-3123`
- URL shows GHL path

### After:
- Click "Shop" → Goes to: `https://shop.mrmogulmaker.com`
- Clean subdomain, stays on your domain
- Professional branding throughout checkout

---

## ✅ **Testing Checklist:**

Once DNS is set up, test these:

- [ ] Visit `shop.mrmogulmaker.com` - loads GHL store
- [ ] Check SSL certificate - shows as secure (🔒)
- [ ] Custom CSS applied - header shows "Mr. Mogul Maker"
- [ ] Product images visible
- [ ] Add product to cart - works
- [ ] Checkout page - accessible and styled
- [ ] Complete test purchase - works end-to-end
- [ ] Click "Shop" from main site - goes to subdomain

---

## ⚠️ **Common Issues:**

### Issue: "Domain not found"
**Wait longer** - DNS can take up to 24 hours (usually 15 min)

### Issue: SSL certificate error
**Wait 15-30 minutes** - GHL auto-provisions SSL after domain verification

### Issue: Styling not showing
**Check CSS is applied** in GHL:
- Sites → Your Store → Custom CSS
- Should have the v9 minimal CSS

### Issue: Cloudflare proxy blocking
**Verify gray cloud** (DNS only):
- Orange cloud = Proxied ❌
- Gray cloud = DNS only ✅

---

## 📞 **Need Help?**

**GHL Support:**
- https://www.gohighlevel.com/support
- Help docs: https://help.gohighlevel.com

**Cloudflare Support:**
- https://dash.cloudflare.com/ → Support

**Or contact me if you need assistance!**

---

## 🎉 **Once Complete:**

Your customers will experience:
1. `www.mrmogulmaker.com` (your main site)
2. Click "Shop" → `shop.mrmogulmaker.com` (GHL store)
3. Browse, add to cart, checkout - all on `shop.mrmogulmaker.com`
4. Never see external domains or GHL branding

**Professional, seamless, and all on YOUR domain!** 🚀

---

**Status:** ⏳ Waiting for DNS setup  
**Updated:** 2025-01-26
