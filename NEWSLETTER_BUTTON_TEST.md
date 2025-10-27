# Newsletter Button Operational Test Plan

## Current Status

**Last Deployment:** https://7d61c9c4.mrmogulmaker.pages.dev
**Sandbox URL:** https://3000-itqkd7r87dbcew1poox4l-dfc00ec5.sandbox.novita.ai
**Git Commit:** 718f62a

## Button Implementation Details

### Homepage Button
- **Button ID:** `newsletter-button-home`
- **Location:** Newsletter section on homepage
- **Handler:** Captures GHL popup and shows it on click
- **Stored Reference:** `window.ghlPopupOverlayHome`

### Blog Page Button
- **Button ID:** `newsletter-button-blog`
- **Location:** Newsletter section on blog page
- **Handler:** Captures GHL popup and shows it on click
- **Stored Reference:** `window.ghlPopupOverlayBlog`

## GHL Popup Configuration

Both pages use the same configuration:
```html
<iframe
  id="popup-6spGss3vvmBSHE7B7aiG"
  data-layout="{'id':'POPUP'}"
  data-trigger-type="alwaysShow"
  data-deactivation-type="neverDeactivate"
  data-height="414"
  ...
></iframe>
```

## Test Procedure

### Test 1: Auto-Popup on Page Load

**Homepage:**
1. Visit: https://7d61c9c4.mrmogulmaker.pages.dev
2. Expected: Popup appears immediately
3. Result: ✅ / ❌

**Blog Page:**
1. Visit: https://7d61c9c4.mrmogulmaker.pages.dev/blog
2. Expected: Popup appears immediately
3. Result: ✅ / ❌

### Test 2: Button Click After Closing Auto-Popup

**Homepage:**
1. Visit homepage
2. Close the auto-popup (X button or click outside)
3. Scroll to newsletter section
4. Click "Subscribe Now" button
5. Open browser console (F12)
6. Check console messages:
   - Should see: `✅ GHL popup overlay captured for Homepage`
   - Should see: `✅ Homepage newsletter button handler ready`
   - On click: `✅ Homepage popup opened via button click`
7. Expected: Popup re-appears
8. Result: ✅ / ❌
9. Page freeze? YES / NO
10. Console errors? (Copy here)

**Blog Page:**
1. Visit /blog
2. Close the auto-popup
3. Scroll to newsletter section
4. Click "Subscribe Now" button
5. Check console messages
6. Expected: Popup re-appears
7. Result: ✅ / ❌
8. Page freeze? YES / NO
9. Console errors? (Copy here)

### Test 3: Debug Information

If button click fails, console should show:
```javascript
❌ GHL popup reference not found.
Fixed position divs found: [number]
Fixed div 0: {zIndex: "...", bg: "...", display: "...", hasIframe: "..."}
Fixed div 1: ...
```

**Please copy all console output here:**
```
[Paste console output]
```

## Known Issues & Solutions

### Issue 1: Page Freezes
**Symptom:** Page becomes unresponsive, can't scroll
**Cause:** Wrong element being shown (invisible div with overflow:hidden)
**Solution:** Auto-unfreeze after 1 second (currently implemented)
**Status:** Partially resolved

### Issue 2: Homepage Button Not Working
**Symptom:** Blog button works, Homepage button doesn't
**Cause:** Possible conflict with same iframe ID on both pages
**Solution:** Need to analyze console debug output
**Status:** Under investigation

### Issue 3: Popup Not Captured
**Symptom:** Console shows "GHL popup reference not found"
**Cause:** GHL's popup overlay not matching our search criteria
**Solution:** Debug output will show all fixed divs
**Status:** Debug logging active

## Current Detection Logic

The button handler searches for GHL popup using these criteria:
1. **Fixed position** (`position: fixed`)
2. **High z-index** (`z-index > 5000`)
3. **Non-transparent background** (`backgroundColor !== 'transparent'`)
4. **Contains our iframe** (`iframe[id*="popup-6spGss3vvmBSHE7B7aiG"]`)

## Debugging Steps

1. **Open Browser Console** (F12 → Console tab)
2. **Visit Homepage**
3. **Wait for messages:**
   - `✅ GHL popup overlay captured for Homepage` (Good!)
   - `✅ Homepage newsletter button handler ready` (Good!)
4. **Close popup**
5. **Click "Subscribe Now"**
6. **Check console:**
   - Success: `✅ Homepage popup opened via button click`
   - Failure: `❌ GHL popup reference not found.` + debug info
7. **Copy ALL console output** and share

## Manual Popup Inspection

To manually inspect the popup in console:
```javascript
// Find all fixed position divs
document.querySelectorAll('div').forEach(d => {
  const s = window.getComputedStyle(d);
  if (s.position === 'fixed') {
    console.log('Fixed div:', {
      zIndex: s.zIndex,
      bg: s.backgroundColor,
      display: s.display,
      hasIframe: d.querySelector('iframe') ? 'YES' : 'NO',
      element: d
    });
  }
});

// Check if popup reference was captured
console.log('Homepage popup ref:', window.ghlPopupOverlayHome);
console.log('Blog popup ref:', window.ghlPopupOverlayBlog);
```

## Next Steps Based on Results

### If Auto-Popup Works but Button Doesn't:
- Analyze console debug output
- Check if popup is captured (look for ✅ message)
- Verify button click event fires
- Check if correct element is being shown

### If Page Freezes:
- Should auto-unfreeze after 1 second
- Check if warning appears: `⚠️ Unfreezing page`
- If still frozen, wrong element is being targeted

### If No Popup at All:
- GHL script might not be loading
- Check network tab for `form_embed.js`
- Verify iframe is in DOM

## Test Results

**Tester Name:**
**Test Date:**
**Browser:** Chrome / Safari / Firefox / Other
**Device:** Desktop / Mobile (iPhone/Android)

### Homepage Results:
- Auto-popup: ✅ / ❌
- Button click: ✅ / ❌
- Page freeze: YES / NO
- Console messages: [Paste here]

### Blog Page Results:
- Auto-popup: ✅ / ❌
- Button click: ✅ / ❌
- Page freeze: YES / NO
- Console messages: [Paste here]

### Additional Notes:
[Any other observations]
