# GHL Custom Domain Setup Guide

## 🎯 Goal

Set up **`shop.mrmogulmaker.com`** to point to your GHL store, so customers never leave your domain.

---

## 📋 **Option 1: Custom Subdomain (RECOMMENDED)**

### Benefits:
- ✅ Professional: `shop.mrmogulmaker.com` instead of `mrmogulmaker.com/products-list-3123`
- ✅ Stays on your domain throughout checkout
- ✅ Better for SEO and branding
- ✅ Easier to remember and share

### Current Setup:
- **Main Site:** `www.mrmogulmaker.com` (Cloudflare Pages)
- **Shop:** `shop.mrmogulmaker.com` (GoHighLevel - to be set up)

---

## 🚀 **Step-by-Step Setup**

### **Step 1: Configure Custom Domain in GoHighLevel**

1. **Log into GoHighLevel**
2. **Navigate to Sites:**
   - Go to **Sites** (left sidebar)
   - Select your store/products page
3. **Add Custom Domain:**
   - Click **Settings** → **Custom Domain**
   - Enter: `shop.mrmogulmaker.com`
   - Click **Save**
4. **Get DNS Records:**
   - GHL will display DNS records you need to add
   - Usually a **CNAME record** pointing to something like:
     - **Name:** `shop`
     - **Value:** `stores.gohighlevel.com` (or similar - GHL provides this)

**⚠️ IMPORTANT: Copy the exact CNAME value GHL provides!**

---

### **Step 2: Add DNS Records in Cloudflare**

1. **Log into Cloudflare**
2. **Select your domain:** `mrmogulmaker.com`
3. **Go to DNS Settings:**
   - Click **DNS** in the left sidebar
4. **Add CNAME Record:**
   - Click **Add record**
   - **Type:** `CNAME`
   - **Name:** `shop`
   - **Target:** (paste the value GHL gave you, e.g., `stores.gohighlevel.com`)
   - **TTL:** Auto
   - **Proxy status:** 🌐 **DNS only** (gray cloud, NOT orange)
   - Click **Save**

**Why DNS only?** GHL needs to handle SSL certificates and routing. Orange cloud (proxied) can interfere.

---

### **Step 3: Verify Domain in GHL**

1. **Go back to GoHighLevel**
2. **Check domain status:**
   - Sites → Your Store → Settings → Custom Domain
   - Status should change to "Connected" or "Verified"
   - This may take 5-15 minutes for DNS to propagate
3. **Test the domain:**
   - Try visiting: `https://shop.mrmogulmaker.com`
   - Should show your GHL store

**If it doesn't work immediately:** DNS propagation can take up to 24-48 hours (usually much faster)

---

### **Step 4: Update Your Website Navigation**

**Already done!** I've updated your website code to use:
- `https://shop.mrmogulmaker.com` instead of the old URL

**Changes made in `/home/user/webapp/src/index.tsx`:**
- Desktop navigation: Shop link now points to `shop.mrmogulmaker.com`
- Mobile navigation: Shop link now points to `shop.mrmogulmaker.com`
- Removed `target="_blank"` so it opens in same tab (seamless experience)

---

### **Step 5: Deploy Updated Website**

Run these commands to deploy the changes:

```bash
# Build the project
cd /home/user/webapp && npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name mrmogulmaker
```

---

## ✅ **Final Result**

After setup is complete:

| Page | URL | Hosted By |
|------|-----|-----------|
| **Homepage** | www.mrmogulmaker.com | Cloudflare Pages |
| **Speaking** | www.mrmogulmaker.com/speaking | Cloudflare Pages |
| **Blog** | www.mrmogulmaker.com/blog | Cloudflare Pages |
| **Shop** | shop.mrmogulmaker.com | GoHighLevel |

**Customer Experience:**
1. Visit `www.mrmogulmaker.com`
2. Click "Shop" → Goes to `shop.mrmogulmaker.com`
3. Browse products, add to cart
4. Checkout and payment - all on `shop.mrmogulmaker.com`
5. Never see "gohighlevel" or external domains

---

## 📋 **Option 2: Custom Path (Alternative)**

If you prefer: **`www.mrmogulmaker.com/shop`**

This is more complex and requires:
- Cloudflare Workers to proxy requests
- Additional configuration
- More maintenance

**Recommendation:** Use **subdomain** (Option 1) - it's simpler and just as professional!

---

## 🔧 **Troubleshooting**

### Problem: "Domain not verified" in GHL
**Solution:** 
- Double-check CNAME record in Cloudflare
- Make sure **Proxy status is DNS only** (gray cloud)
- Wait 15-30 minutes for propagation
- Try flushing DNS: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

### Problem: SSL certificate error
**Solution:**
- GHL automatically provisions SSL certificates
- Can take 15-30 minutes after domain verification
- If persists after 1 hour, contact GHL support

### Problem: "This site can't be reached"
**Solution:**
- Verify CNAME target matches exactly what GHL provided
- Check Cloudflare DNS settings
- Try accessing without `https://` first: `http://shop.mrmogulmaker.com`

---

## 📞 **Need Help?**

**Cloudflare Support:**
- https://dash.cloudflare.com/ → Support

**GoHighLevel Support:**
- https://www.gohighlevel.com/support
- Or contact your GHL account manager

---

## 🎯 **What's Next After Setup:**

1. ✅ Test the subdomain: `shop.mrmogulmaker.com`
2. ✅ Verify CSS styling still works (it should!)
3. ✅ Test full checkout flow
4. ✅ Update any marketing materials with new shop URL
5. ✅ Share your new shop link: `shop.mrmogulmaker.com`

---

**Version:** 1.0  
**Last Updated:** 2025-01-26  
**Status:** Ready to implement
