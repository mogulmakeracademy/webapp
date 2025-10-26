# GHL Navigation - Quick Setup

## 📋 2-Step Setup

### **STEP 1: Add HTML Header Code**
1. GoHighLevel → **Sites** → Your shop → **Settings**
2. Find **Tracking Code** or **Custom Code** section
3. Paste in **Header Code** section:

```html
<!-- Navigation Header HTML -->
<style>
#mmm-nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.95);
  border-bottom: 1px solid rgba(251, 191, 36, 0.2);
  backdrop-filter: blur(10px);
  z-index: 99999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  font-family: 'Poppins', sans-serif;
}

#mmm-nav-brand {
  font-size: 24px;
  font-weight: 800;
  text-decoration: none;
  background: linear-gradient(to right, 
    #ffffff 0%, #ffffff 16%,
    #FBBF24 16%, #FBBF24 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#mmm-nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

#mmm-nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.3s ease;
  letter-spacing: 0.05em;
}

#mmm-nav-links a:hover {
  color: #FBBF24;
}

body {
  padding-top: 100px !important;
}

@media (max-width: 768px) {
  #mmm-nav-header {
    padding: 0 20px;
  }
  
  #mmm-nav-brand {
    font-size: 18px;
  }
  
  #mmm-nav-links {
    display: none;
  }
  
  body {
    padding-top: 90px !important;
  }
}

#mmm-mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  #mmm-mobile-menu {
    display: block;
    color: #FBBF24;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>

<div id="mmm-nav-header">
  <a href="https://www.mrmogulmaker.com" id="mmm-nav-brand">Mr. Mogul Maker</a>
  
  <div id="mmm-nav-links">
    <a href="https://www.mrmogulmaker.com">Home</a>
    <a href="https://www.mrmogulmaker.com/speaking">Speaking</a>
    <a href="https://www.mrmogulmaker.com/blog">Blog</a>
    <a href="https://www.mrmogulmaker.com/#programs">Programs</a>
  </div>
  
  <div id="mmm-mobile-menu">
    <i class="fas fa-bars"></i>
  </div>
</div>
```

---

### **STEP 2: Update Custom CSS**
1. GoHighLevel → **Sites** → Your shop → **Custom CSS**
2. **Replace** existing CSS with:

```css
/* Import Poppins Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

body,
* {
  font-family: 'Poppins', sans-serif !important;
}

body {
  background-color: #000000 !important;
}

body {
  padding-top: 100px !important;
}

.elPrice {
  color: #FBBF24 !important;
}

button {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%) !important;
  color: #000000 !important;
  border-radius: 9999px !important;
}

@media (max-width: 768px) {
  body {
    padding-top: 90px !important;
  }
}
```

---

## ✅ Done!

Visit your shop at: **https://shop.mrmogulmaker.com/shop**

You should see:
- ✅ Navigation header at top
- ✅ "Mr. Mogul Maker" brand (clickable)
- ✅ Navigation links: Home, Speaking, Blog, Programs
- ✅ Yellow hover effects
- ✅ Mobile responsive

---

## 🔧 Troubleshooting

**Header not showing?**
- Check HTML is in **Header Code** (not footer)
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Links not clickable?**
- Verify HTML code includes the `<div id="mmm-nav-header">` section
- Check browser console for errors

**Content hidden behind header?**
- Ensure CSS includes `padding-top: 100px` on body
- Both HTML and CSS must be applied

---

**Version**: v10  
**Last Updated**: 2025-10-26
