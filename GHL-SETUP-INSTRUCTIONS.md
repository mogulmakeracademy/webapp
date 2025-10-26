# GHL Store Branding Instructions

## 🎨 How to Apply Custom CSS to Your GHL Store

Your custom CSS file has been created: `ghl-custom-styles.css`

This CSS will make your GHL store match your website's brand perfectly!

---

## 📋 Step-by-Step Instructions

### **Step 1: Copy the CSS File**

1. Open the file: `/home/user/webapp/ghl-custom-styles.css`
2. **Copy ALL the contents** (the entire file)

---

### **Step 2: Add Custom Headline to GHL Store**

Before applying CSS, add the headline to your store:

**Option A: Using GHL Page Builder**

1. Go to your store page in GHL
2. Click **Edit** or **Customize**
3. Add a **Text Element** or **Heading Element** at the top
4. Enter the text: `BUILD Buying power with Mogul tools.`
5. Format "BUILD" as **bold** (wrap in `<strong>` tag)
6. Save

**Option B: Using Custom HTML**

1. In GHL store settings, find **Custom HTML** or **Header Code**
2. Add this code at the top:
   ```html
   <div class="main-heading">
     <strong>BUILD</strong> Buying power with Mogul tools.
   </div>
   ```
3. Save

**Option C: Edit Page Title**

1. Go to store settings
2. Find **Page Title** or **Hero Title**
3. Change to: `BUILD Buying power with Mogul tools.`
4. Make sure "BUILD" is formatted as bold/strong

---

### **Step 3: Add CSS to GHL Store**

**Option A: Via Store Settings (Recommended)**

1. Go to **GoHighLevel Dashboard**
2. Navigate to: **Sites → Stores** (or wherever your store is located)
3. Click on your store: **products-list-3123**
4. Look for **Settings** or **Customize** option
5. Find the **Custom CSS** section
6. **Paste the entire CSS code** you copied
7. Click **Save**

**Option B: Via Custom Code Section**

1. In GHL, go to your **Store Settings**
2. Look for **Custom Code** or **Advanced Settings**
3. Find the **CSS** input area
4. **Paste the CSS code**
5. Click **Save**

**Option C: Via Page Builder (If using Funnel)**

1. Go to **Funnels/Websites**
2. Edit the store page
3. Open **Settings** → **Tracking Code** or **Custom CSS**
4. Paste in the `<style>` section:
   ```html
   <style>
   /* Paste the entire CSS code here */
   </style>
   ```
5. Save and publish

---

## ✅ What the CSS Does

### **Colors Applied:**
- **Primary:** Black (#000000)
- **Accent:** Yellow (#FBBF24)
- **Text:** White (#FFFFFF)
- **Secondary:** Gray (#9CA3AF)

### **Design Elements:**
- ✅ Poppins font (matches your website)
- ✅ Rounded buttons with yellow gradient
- ✅ Black background with gradient cards
- ✅ Yellow hover effects
- ✅ Professional shadows and spacing
- ✅ Mobile-responsive design
- ✅ Custom scrollbar styling

### **Components Styled:**
- Navigation/Header
- Product cards
- Buttons (primary & secondary)
- Shopping cart
- Checkout forms
- Input fields
- Category filters
- Modals/Popups
- Footer
- Alerts/Messages
- Quantity selectors

---

## 🧪 Testing After Application

After pasting the CSS:

1. **Visit your store:** https://mrmogulmaker.com/products-list-3123
2. **Check these elements:**
   - ✅ Background is black
   - ✅ Buttons are yellow/gold
   - ✅ Product cards have gradient backgrounds
   - ✅ Text is white/yellow
   - ✅ Hover effects work (yellow glow)
   - ✅ Font is Poppins

---

## 🎯 Brand Consistency

Your website navigation now links directly to GHL:

**Desktop Navigation:**
- Home
- **Shop** → Opens GHL store in new tab
- Speaking
- Blog
- Programs

**Mobile Menu:**
- Same structure with shopping bag icon

**Customer Experience:**
```
Click "Shop" on your website
  ↓
Opens GHL store (branded with your colors)
  ↓
Browse products in GHL
  ↓
Add to cart
  ↓
Checkout via GHL
  ↓
GHL tracks everything
```

---

## 🔧 Customization Tips

### **To Adjust Colors:**

Find and replace these color codes in the CSS:

```css
/* Primary Yellow */
#FBBF24 → Your new yellow

/* Dark Yellow */
#F59E0B → Your new dark yellow

/* Black */
#000000 → Your new background color

/* Gray */
#9CA3AF → Your new text color
```

### **To Change Button Shape:**

Find this line:
```css
border-radius: 9999px !important; /* Full rounded */
```

Change to:
```css
border-radius: 12px !important; /* Slightly rounded */
/* or */
border-radius: 0px !important; /* Square */
```

### **To Adjust Spacing:**

Find padding/margin values and increase/decrease:
```css
padding: 12px 32px !important;
```

---

## 📱 Mobile Responsive

The CSS automatically adjusts for mobile:
- Smaller buttons on mobile
- Adjusted padding for small screens
- Touch-friendly sizes

---

## 🆘 Troubleshooting

### **CSS Not Applying?**

1. **Clear browser cache:** Ctrl+Shift+Delete (or Cmd+Shift+Delete)
2. **Hard refresh:** Ctrl+F5 (or Cmd+Shift+R)
3. **Check GHL settings:** Make sure CSS is saved
4. **Verify placement:** CSS must be in Custom CSS section, not HTML

### **Some Styles Not Working?**

GHL might have inline styles that override. Add `!important` to force:
```css
background-color: #000000 !important;
```

All CSS rules already include `!important` by default.

### **Font Not Loading?**

Make sure the Google Fonts import at the top is included:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
```

---

## 🎨 Preview Before & After

**Before (Default GHL):**
- White background
- Generic buttons
- Standard fonts
- Basic styling

**After (Branded):**
- Black background with gradients
- Yellow/gold buttons with glow effects
- Poppins font (matches website)
- Professional, consistent branding

---

## 📞 Need Help?

If you need to adjust any styles or something doesn't look right, let me know and I can:
- Modify colors
- Adjust spacing
- Change button styles
- Fix any conflicts
- Add new styles

---

## ✅ Checklist

- [ ] Copy entire CSS from `ghl-custom-styles.css`
- [ ] Paste into GHL Custom CSS section
- [ ] Save changes in GHL
- [ ] Visit store and clear browser cache
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Verify brand colors match
- [ ] Check all buttons and forms work
- [ ] Test checkout process

---

**Your GHL store will now perfectly match your website's professional branding!** 🎉
