# GoHighLevel (GHL) Integration Guide

## 🔗 How to Add Your GHL Products to the Shop

### Step 1: Get Your GHL Order Form URLs

1. **Log into your GoHighLevel account**
2. **Navigate to:** Sites → Funnels/Websites → Your Order Forms
3. **For each product, copy the order form URL**
   - Example: `https://yourdomain.ghlstaging.com/order-form/your-product-slug`
   - Or: `https://your-custom-domain.com/order-form/your-product-slug`

### Step 2: Update Products in Your Shop

Edit the file: `/home/user/webapp/src/index.tsx`

Find the `products` array (around line 740) and add your GHL URLs:

```javascript
{
  id: 1,
  name: "Business Credit Blueprint",
  price: 297,
  category: "courses",
  description: "...",
  image: "file-pdf",
  features: ["...", "...", "..."],
  includes: ["...", "...", "..."],
  ghlCheckoutUrl: "https://your-ghl-domain.com/order-form/business-credit-blueprint" // <-- Add your URL here
},
```

### Step 3: Customize Product Details to Match GHL

Update each product with your actual:
- **name**: Product name from GHL
- **price**: Exact price from GHL
- **description**: Product description
- **features**: Key selling points
- **includes**: What customers get

### Step 4: Build and Deploy

```bash
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name mrmogulmaker
```

---

## 🎯 How It Works

### Customer Flow:

1. **Browse Products** → Customer sees beautiful product cards on your shop page
2. **Click "Buy Now"** → Redirects directly to your GHL order form
3. **Complete Purchase** → Customer completes payment in GHL
4. **Product Delivery** → GHL automatically delivers the product

### Shopping Cart:

- Customers can add multiple products to cart
- Cart shows total price
- Clicking "Proceed to Checkout" redirects to first product's GHL form
- Each product requires separate GHL checkout (this is how GHL works)

---

## 📋 Example: Adding Your Actual GHL Products

Let's say you have these products in GHL:

### Product 1: Credit Repair Masterclass
- **GHL Order Form:** `https://mrmogulmaker.ghlstaging.com/credit-repair-masterclass`
- **Price:** $497
- **Delivery:** Instant access to course portal

### Product 2: Business Formation Kit
- **GHL Order Form:** `https://mrmogulmaker.ghlstaging.com/business-formation-kit`
- **Price:** $197
- **Delivery:** Download link via email

### How to Add Them:

```javascript
const products = [
  {
    id: 1,
    name: "Credit Repair Masterclass",
    price: 497,
    category: "courses",
    description: "Complete credit repair training with 30 days of support",
    image: "graduation-cap",
    features: ["20+ Video Lessons", "Live Q&A Sessions", "30-Day Support"],
    includes: [
      "Full video course access",
      "Downloadable worksheets",
      "Private Facebook group",
      "Weekly live sessions",
      "30 days of email support"
    ],
    ghlCheckoutUrl: "https://mrmogulmaker.ghlstaging.com/credit-repair-masterclass"
  },
  {
    id: 2,
    name: "Business Formation Kit",
    price: 197,
    category: "templates",
    description: "Everything you need to form your LLC and start your business",
    image: "building",
    features: ["Legal Templates", "Step-by-Step Guide", "State Requirements"],
    includes: [
      "LLC formation guide (PDF)",
      "Operating agreement template",
      "EIN application help",
      "Registered agent recommendations",
      "Business bank account guide"
    ],
    ghlCheckoutUrl: "https://mrmogulmaker.ghlstaging.com/business-formation-kit"
  }
];
```

---

## 🔄 Alternative: API Integration (Advanced)

If you have many products or want automatic sync, you can use GHL API:

### What You'll Need:
- GHL API Key
- Location ID
- Products/Courses endpoint access

### Implementation:
1. Create API route in Hono to fetch products from GHL
2. Store GHL API key in Cloudflare secrets
3. Dynamically render products from API response

**Note:** This requires more development. The manual method above is recommended for most users.

---

## 💡 Tips for Best Results

### 1. **Match Prices Exactly**
   - Make sure shop prices match GHL order form prices
   - If prices differ, customers may get confused

### 2. **Use Clear Product Names**
   - Keep names consistent between shop and GHL
   - Makes customer experience smoother

### 3. **Test Each Checkout Link**
   - Click through from shop to GHL order form
   - Complete a test purchase to verify everything works

### 4. **Update Product Images**
   - Use Font Awesome icons that match your product type
   - Available icons: `graduation-cap`, `file-pdf`, `chart-line`, `building`, `shield-alt`, `coins`, `trophy`, `certificate`

### 5. **Add Product Images in GHL**
   - Make sure your GHL order forms have professional images
   - Add testimonials to increase conversions

---

## 🚀 Quick Start Checklist

- [ ] Log into GoHighLevel
- [ ] Find or create order forms for each product
- [ ] Copy all order form URLs
- [ ] Update products array in `/src/index.tsx`
- [ ] Match product names, prices, and descriptions
- [ ] Build and deploy: `npm run build && deploy`
- [ ] Test each product's "Buy Now" button
- [ ] Verify checkout flow works correctly
- [ ] Monitor GHL dashboard for orders

---

## 🆘 Troubleshooting

### "Buy Now" button shows alert instead of redirecting
**Solution:** Make sure `ghlCheckoutUrl` field has a valid URL (not empty string)

### Customers see wrong price on GHL order form
**Solution:** Update price in either your shop or GHL to match

### Multiple products in cart
**Solution:** GHL handles one product at a time. Customer will be redirected to first product's order form.

### Want to accept multiple products in one checkout?
**Solution:** Either:
- Create bundle products in GHL
- Or integrate Stripe directly (requires more development)

---

## 📞 Need Help?

If you need assistance:
1. Check that all GHL order forms are published and accessible
2. Verify URLs are correct (copy-paste from browser)
3. Test in incognito mode to see customer experience
4. Contact GHL support if order forms aren't working

---

## 🎨 Customization Options

### Change Product Categories:
- `courses` - For video courses and training
- `templates` - For downloadable templates
- `guides` - For PDF guides and ebooks

### Change Product Icons:
Available Font Awesome icons:
- `graduation-cap` - Education/courses
- `file-pdf` - PDF downloads
- `chart-line` - Growth/success
- `building` - Business/structure
- `coins` - Money/wealth
- `trophy` - Achievement
- `shield-alt` - Protection/security
- `certificate` - Certification
- `book` - Guides/reading
- `video` - Video content
- `folder-open` - Bundles
- `briefcase` - Professional

---

**Ready to add your products? Start with Step 1 above! 🚀**
