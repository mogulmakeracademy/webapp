# GHL Navigation Header Setup Guide

## Overview
Add a navigation header to your GoHighLevel shop page so customers can navigate back to your main website.

---

## 🎯 What You'll Get

A fixed navigation header with:
- **Brand name**: "Mr. Mogul Maker" (clickable, returns to homepage)
- **Navigation links**: Home, Speaking, Blog, Programs
- **Consistent styling**: Matches your main website
- **Mobile responsive**: Adapts to smaller screens

---

## 📋 Setup Steps

### **Step 1: Add HTML Navigation Header**

1. Log into your **GoHighLevel account**
2. Go to **Sites** → Select your shop site → **Settings**
3. Navigate to **Tracking Code** or **Custom Code** section
4. Find the **Header Code** section
5. **Paste the HTML code** from `ghl-navigation-header.html`
6. Click **Save**

**File to copy from**: `/home/user/webapp/ghl-navigation-header.html`

---

### **Step 2: Update Custom CSS**

1. In GoHighLevel, go to **Sites** → Your shop site
2. Navigate to **Settings** → **Custom CSS**
3. **Replace** the existing CSS with the new version
4. Click **Save**

**File to copy from**: `/home/user/webapp/ghl-custom-styles-v10-with-nav.css`

---

## 🔍 What Changed

### **Previous Setup (v9)**
- Only displayed "Mr. Mogul Maker" brand name (not clickable)
- No navigation links
- No way to return to main site

### **New Setup (v10)**
- ✅ Clickable brand name (returns to homepage)
- ✅ Navigation links to all main pages
- ✅ Hover effects on links
- ✅ Mobile responsive

---

## 📱 Mobile Behavior

**Desktop (> 768px)**:
- Full navigation with all links visible
- Brand name on left, navigation links on right

**Mobile (< 768px)**:
- Brand name visible
- Navigation links hidden (shows hamburger icon)
- *Note: For full mobile menu, you'd need to add JavaScript (optional)*

---

## 🎨 Styling Details

**Header**:
- Height: 80px
- Background: Black with slight transparency
- Yellow bottom border
- Fixed position (stays at top when scrolling)

**Brand Name**:
- Two-tone gradient: "Mr." (white) + "Mogul Maker" (yellow)
- Font: Poppins 800 weight
- Clickable, returns to homepage

**Navigation Links**:
- White text by default
- Yellow text on hover
- 32px spacing between links
- Smooth transition effects

---

## 🔗 Navigation URLs

The header includes links to:
- **Home**: `https://www.mrmogulmaker.com`
- **Speaking**: `https://www.mrmogulmaker.com/speaking`
- **Blog**: `https://www.mrmogulmaker.com/blog`
- **Programs**: `https://www.mrmogulmaker.com/#programs`

All links open in the same tab (no `target="_blank"`) for seamless navigation.

---

## 🛠️ Troubleshooting

### **Navigation header not appearing**
- Check that HTML code is pasted in **Header Code** section (not footer)
- Verify you saved the changes
- Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### **Links not working**
- Verify URLs are correct in the HTML code
- Check that your main website is live at `www.mrmogulmaker.com`

### **Header overlapping content**
- Ensure the CSS includes `padding-top: 100px` on body
- Check that both HTML and CSS files are applied

### **Styling looks off**
- Make sure you're using the v10 CSS file (not v9)
- Verify Poppins font is loading
- Check browser console for errors

---

## 🔄 Alternative: CSS-Only Version (Limited)

If you **cannot add HTML code** to GHL, you can use a CSS-only version:

**Limitations**:
- Links won't be clickable (CSS can't create functional links)
- Only displays text, not actual navigation
- User would need to manually type URL or use browser back button

**File**: `ghl-custom-styles-v10-navigation.css` (created but not recommended)

---

## ✅ Testing Checklist

After setup, test the following:

- [ ] Navigation header appears at top of shop page
- [ ] Brand name is clickable and links to homepage
- [ ] All navigation links work correctly
- [ ] Hover effects work on navigation links
- [ ] Header stays fixed when scrolling
- [ ] Mobile view displays correctly
- [ ] No content is hidden behind header

---

## 📝 Files Reference

1. **`ghl-navigation-header.html`** - HTML code for header (paste in GHL Header Code)
2. **`ghl-custom-styles-v10-with-nav.css`** - Updated CSS (paste in GHL Custom CSS)
3. **`ghl-custom-styles-v10-navigation.css`** - CSS-only version (not recommended)

---

## 🚀 Next Steps

1. **Add the HTML header code** to GHL
2. **Update the CSS** in GHL
3. **Test the navigation** on both desktop and mobile
4. **Optional**: Add mobile hamburger menu with JavaScript for better mobile UX

---

## 💡 Pro Tips

- **Keep URLs consistent**: Always use `https://www.mrmogulmaker.com` format
- **Test on mobile**: Most e-commerce happens on mobile devices
- **Monitor analytics**: Track if customers navigate back to main site
- **Consider breadcrumbs**: Add "Home > Shop" breadcrumb for better UX

---

## 📞 Need Help?

If navigation isn't working as expected:
1. Check that HTML code is in **Header Code** (not footer or body)
2. Verify CSS is saved in **Custom CSS** section
3. Clear browser cache and test in incognito mode
4. Check browser console for JavaScript errors

---

**Last Updated**: 2025-10-26  
**Version**: v10 (Navigation Header)  
**Status**: ✅ Ready for implementation
