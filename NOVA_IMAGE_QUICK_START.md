# Nova AI Agent - Image Generation Quick Start

## 🎯 Goal
Enable your Relevance AI Agent (Nova) to create blog posts with **professional images** instead of just Font Awesome icons.

---

## ⚡ Quick Setup (3 Steps)

### Step 1: Check Nova's Image Capabilities

Ask Nova: **"Can you generate images using DALL·E, Midjourney, or Stable Diffusion?"**

- ✅ **If YES**: Follow "Full Workflow" below
- ❌ **If NO**: Follow "Stock Photo Workflow" below

---

### Step 2A: Full Workflow (If Nova Can Generate Images)

Give Nova these instructions:

```
BLOG POST WITH AI-GENERATED IMAGE WORKFLOW:

1. Write the blog post HTML content

2. Generate a professional header image using this prompt template:
   
   For CREDIT posts:
   "Professional business credit card on modern desk with financial documents, 
   clean office setting, natural lighting, corporate photography style, high 
   quality, 16:9 aspect ratio"
   
   For FUNDING posts:
   "Business owner in professional meeting with loan documents, modern office, 
   corporate photography style, natural lighting, high quality, 16:9 aspect ratio"
   
   For BUSINESS posts:
   "Modern corporate office with business planning documents, professional 
   environment, natural lighting, commercial photography, 16:9 aspect ratio"

3. Upload the generated image to Imgur:
   - Use Imgur API or upload via https://imgur.com/upload
   - Get the direct image URL (must end in .jpg or .png)
   - Example: https://i.imgur.com/abc123.jpg

4. Create blog post JSON with image URL:
   {
     "title": "Your Post Title",
     "image": "https://i.imgur.com/abc123.jpg",
     "content": "...",
     ...other fields
   }

5. Publish to GitHub using existing workflow
```

---

### Step 2B: Stock Photo Workflow (If Nova Can't Generate Images)

Give Nova these instructions:

```
BLOG POST WITH STOCK PHOTO WORKFLOW:

1. Write the blog post HTML content

2. Search for professional stock photo:
   - Visit: https://unsplash.com/s/photos/business-credit
   - Or: https://www.pexels.com/search/business-funding
   - Find a relevant, high-quality business image

3. Get the direct image URL:
   - Click the image → Right-click → "Copy image address"
   - Or use the download URL with ?w=1200&q=80
   - Example: https://images.unsplash.com/photo-1234567890?w=1200&q=80

4. Create blog post JSON with image URL:
   {
     "title": "Your Post Title",
     "image": "https://images.unsplash.com/photo-1234567890?w=1200&q=80",
     "content": "...",
     ...other fields
   }

5. Publish to GitHub using existing workflow
```

---

## 📸 Example Image Prompts

### Credit Category
```
Professional business credit card on modern desk with financial documents, 
calculator and pen, clean office setting, natural lighting, corporate 
photography style, sharp focus, high quality, 16:9 aspect ratio
```

### Funding Category
```
Business owner shaking hands with bank loan officer, professional office 
setting, documents on desk, corporate photography, natural lighting, 
16:9 aspect ratio, high quality
```

### Business Category
```
Entrepreneur working on business plan at modern desk, laptop and documents, 
minimalist office aesthetic, professional photography, natural window lighting, 
16:9 aspect ratio, sharp focus
```

**See `AI_AGENT_IMAGE_GENERATION_EXAMPLES.md` for 20+ more prompts!**

---

## 🎨 Image Requirements

| Requirement | Specification |
|-------------|--------------|
| **Format** | JPG, PNG, or WebP |
| **Aspect Ratio** | 16:9 (recommended) |
| **Minimum Size** | 1200x675px |
| **Maximum File Size** | Under 500KB |
| **URL Type** | Direct link ending in .jpg/.png/.webp |

---

## ✅ Complete Example

Here's what Nova should produce:

```json
{
  "id": "build-business-credit-90-days",
  "title": "How to Build Business Credit in 90 Days (Complete Guide)",
  "slug": "build-business-credit-90-days",
  "excerpt": "The step-by-step blueprint that thousands of entrepreneurs have used to establish strong business credit profiles.",
  "content": "<h2>Phase 1: Foundation</h2><p>The first 30 days...</p>",
  "category": "credit",
  "author": "Antonio Cook",
  "publishDate": "2025-01-20",
  "readTime": 18,
  "featured": true,
  "image": "https://i.imgur.com/abc123xyz.jpg"  // ← This is the key addition
}
```

---

## 🚀 Testing Nova

Send this test request to Nova:

```
Create a test blog post titled "How to Get Your First Business Credit Card" 
with a professional business credit card image. Generate or find an appropriate 
image, upload it to Imgur, and provide the complete JSON ready for GitHub 
publishing.
```

Nova should return a complete JSON with an `image` field containing a URL.

---

## 💡 Pro Tips for Nova

**Style Keywords for AI Generation:**
- Always include: "professional", "modern", "clean", "corporate photography"
- Always include: "natural lighting" or "professional lighting"
- Always include: "high quality", "sharp focus", "16:9 aspect ratio"
- Avoid: "cartoon", "illustration", "dramatic", "text overlays"

**Image Quality Checks:**
- Image should be sharp and clear
- No visible AI artifacts or distortions
- Professional business aesthetic
- Relevant to article topic
- Under 500KB file size

---

## 📚 Full Documentation

For comprehensive guidance:
- **Main Instructions**: `RELEVANCE_AI_AGENT_INSTRUCTIONS.md`
- **Image Examples**: `AI_AGENT_IMAGE_GENERATION_EXAMPLES.md`
- **General Setup**: `AI_AGENT_BLOG_INTEGRATION_GUIDE.md`

---

## 🎯 What You Get

**Before (Font Awesome Icons):**
```json
{
  "image": "fa-credit-card"  // Simple icon
}
```

**After (Real Images):**
```json
{
  "image": "https://i.imgur.com/abc123.jpg"  // Professional photo
}
```

**Visual Impact:**
- ✅ More engaging blog cards
- ✅ Professional featured images on post pages
- ✅ Better social media sharing previews
- ✅ Higher click-through rates
- ✅ More authoritative appearance

---

## ✨ Next Steps

1. **Test Nova's capabilities** - Ask if it can generate images
2. **Give Nova instructions** - Use "Full Workflow" or "Stock Photo Workflow" above
3. **Request test post** - Have Nova create one sample post with image
4. **Verify output** - Check that image URL works and looks professional
5. **Deploy** - Start publishing blog posts with images!

---

**Your blog posts will now look professional and engaging, matching the quality of top financial education websites! 🚀**
