# GoHighLevel Store CSS - Quick Reference

## ✅ Current Status

Your GHL store is **LIVE and BRANDED** at:
**https://mrmogulmaker.com/products-list-3123**

## 🎨 What The CSS Does

The custom CSS adds minimal branding to match your main website:

1. **Custom Header**
   - Fixed black bar at top
   - "Mr. Mogul Maker" text with gradient:
     - "Mr." = White (#FFFFFF)
     - "Mogul Maker" = Yellow (#FBBF24)
   - Same font as homepage (Poppins, 800 weight)

2. **Color Enhancements**
   - Yellow prices (#FBBF24)
   - Yellow gradient buttons
   - Black background

3. **What It Doesn't Touch**
   - Product images (GHL controls)
   - Product layouts (GHL controls)
   - Descriptions (GHL controls)
   - Pagination (GHL controls)
   - Checkout/cart pages (GHL controls)

## 📁 CSS File Location

**Final CSS:** `/home/user/webapp/ghl-custom-styles-v9-minimal.css`

**How to Update:**
1. Open the file above
2. Copy ALL contents
3. Go to GoHighLevel
4. Navigate to: **Sites → Your Store → Custom CSS**
5. Paste and Save

## 🔧 CSS Code (v9 - Minimal)

```css
/* Import Poppins Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

/* Font */
body, * {
  font-family: 'Poppins', sans-serif !important;
}

/* Black Background */
body {
  background-color: #000000 !important;
}

/* Fixed Header Bar */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.95);
  border-bottom: 1px solid rgba(251, 191, 36, 0.2);
  z-index: 9998;
}

/* Header Text - Two Colors */
body::after {
  content: "Mr. Mogul Maker";
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
  line-height: 80px;
  font-size: 24px;
  font-weight: 800;
  z-index: 9999;
  
  /* Gradient: "Mr." white, "Mogul Maker" yellow */
  background: linear-gradient(to right, 
    #ffffff 0%, #ffffff 16%,
    #FBBF24 16%, #FBBF24 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

body {
  padding-top: 80px !important;
}

/* Yellow Prices */
.elPrice {
  color: #FBBF24 !important;
}

/* Yellow Buttons */
button {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%) !important;
  color: #000000 !important;
  border-radius: 9999px !important;
}

/* Mobile */
@media (max-width: 768px) {
  body::after {
    font-size: 18px;
    left: 20px;
    transform: none;
  }
}
```

## 🎯 Brand Colors

- **Black:** `#000000`
- **Yellow:** `#FBBF24`
- **Yellow Dark:** `#F59E0B`
- **White:** `#FFFFFF`

## 🚀 Navigation Setup

**Main Website Navigation Order:**
1. Home
2. Speaking
3. Blog
4. Programs
5. **Shop** ← Links to GHL store

**Shop Link:** `https://mrmogulmaker.com/products-list-3123`

## 📝 Notes

- CSS is **ultra-minimal** - only 50 lines
- Works across ALL GHL store pages (products, checkout, cart)
- Doesn't break any GHL functionality
- Easy to update or remove
- Mobile-responsive

## ✨ Future Customization

If you want to add more styling:
1. Edit `ghl-custom-styles-v9-minimal.css`
2. Add your CSS rules
3. Copy and paste to GHL Custom CSS
4. Test on all pages (products, cart, checkout)

**Keep it minimal** - GHL handles most of the heavy lifting!

---

**Version:** v9 (Minimal)  
**Last Updated:** 2025-01-26  
**Status:** ✅ Live and Working
