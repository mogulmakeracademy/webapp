# Relevance AI Agent - Blog Publishing Instructions

## 🎯 Your Mission

You have been granted access to publish blog posts to **www.mrmogulmaker.com** via the GitHub API. Follow these instructions to create and publish blog posts automatically.

---

## 🔐 Authentication Credentials

**GitHub Repository Information:**
- **Repository**: `mogulmakeracademy/webapp`
- **Branch**: `main`
- **Directory**: `blog-posts/`
- **GitHub Token**: `[TOKEN PROVIDED SEPARATELY - DO NOT COMMIT TO REPO]`

**IMPORTANT SECURITY NOTES:**
- Keep this token secure and never expose it publicly
- This token has full repository access
- If compromised, contact the repository owner immediately

---

## 📝 Blog Post Format

Create blog posts as JSON files with this exact structure:

```json
{
  "id": "unique-post-id-here",
  "title": "Your Blog Post Title Here",
  "slug": "your-blog-post-slug-here",
  "excerpt": "A brief 150-200 character summary that appears in blog post cards and previews.",
  "content": "<p>Full HTML content of your blog post goes here...</p><h2>Section Heading</h2><p>More content...</p>",
  "category": "credit",
  "author": "Antonio Cook",
  "publishDate": "2025-01-26",
  "readTime": 8,
  "featured": false,
  "image": "fa-credit-card"
}
```

### Field Requirements

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | string | ✅ Yes | Unique identifier (same as filename) | `"build-credit-fast"` |
| `title` | string | ✅ Yes | Full blog post title | `"How to Build Credit Fast"` |
| `slug` | string | ✅ Yes | URL-friendly version | `"build-credit-fast"` |
| `excerpt` | string | ✅ Yes | Brief summary (150-200 chars) | `"Learn proven strategies..."` |
| `content` | string | ✅ Yes | Full HTML content | `"<p>Your content...</p>"` |
| `category` | string | ✅ Yes | Must be: `credit`, `funding`, or `business` | `"credit"` |
| `author` | string | ✅ Yes | Always use: `"Antonio Cook"` | `"Antonio Cook"` |
| `publishDate` | string | ✅ Yes | ISO date format (YYYY-MM-DD) | `"2025-01-26"` |
| `readTime` | number | ✅ Yes | Estimated minutes to read | `8` |
| `featured` | boolean | ❌ No | Show in featured section? | `true` or `false` |
| `image` | string | ❌ No | Font Awesome icon class | `"fa-credit-card"` |

### Category Options

Use one of these three categories:
- **`credit`** - Business credit, credit building, credit repair
- **`funding`** - SBA loans, funding strategies, capital access
- **`business`** - Business structure, operations, entrepreneurship

### Icon Options (Font Awesome)

Choose appropriate icons for your post category:
- `fa-credit-card` - Credit posts
- `fa-money-bill-wave` - Funding posts
- `fa-building` - Business structure
- `fa-chart-line` - Growth/scaling
- `fa-shield-alt` - Protection/legal
- `fa-university` - Banking/lending
- `fa-chart-pie` - Finance/accounting
- `fa-lightbulb` - Tips/ideas
- `fa-rocket` - Launch/startup

---

## 🚀 GitHub API Integration

### Step 1: Prepare Your Blog Post

1. Write your blog post content in HTML format
2. Create a JSON object following the format above
3. Choose a unique slug (e.g., `how-to-get-sba-loan`)
4. Set all required fields

### Step 2: Encode to Base64

GitHub API requires file content to be Base64 encoded:

```javascript
// JavaScript example
const blogPost = {
  id: "how-to-get-sba-loan",
  title: "How to Get an SBA Loan in 2025",
  slug: "how-to-get-sba-loan",
  excerpt: "Complete guide to securing SBA loans...",
  content: "<p>Your full content here...</p>",
  category: "funding",
  author: "Antonio Cook",
  publishDate: "2025-01-26",
  readTime: 10,
  featured: false,
  image: "fa-university"
};

// Convert to JSON string
const jsonString = JSON.stringify(blogPost, null, 2);

// Encode to Base64
const base64Content = btoa(jsonString);
```

```python
# Python example
import json
import base64

blog_post = {
    "id": "how-to-get-sba-loan",
    "title": "How to Get an SBA Loan in 2025",
    "slug": "how-to-get-sba-loan",
    "excerpt": "Complete guide to securing SBA loans...",
    "content": "<p>Your full content here...</p>",
    "category": "funding",
    "author": "Antonio Cook",
    "publishDate": "2025-01-26",
    "readTime": 10,
    "featured": False,
    "image": "fa-university"
}

# Convert to JSON string
json_string = json.dumps(blog_post, indent=2)

# Encode to Base64
base64_content = base64.b64encode(json_string.encode()).decode()
```

### Step 3: Make GitHub API Call

**API Endpoint:**
```
PUT https://api.github.com/repos/mogulmakeracademy/webapp/contents/blog-posts/{slug}.json
```

**Headers:**
```
Authorization: token YOUR_GITHUB_TOKEN_HERE
Accept: application/vnd.github.v3+json
Content-Type: application/json
```

**Request Body:**
```json
{
  "message": "Add blog post: How to Get an SBA Loan in 2025",
  "content": "YOUR_BASE64_ENCODED_CONTENT_HERE",
  "branch": "main"
}
```

### Complete cURL Example

```bash
curl -X PUT \
  -H "Authorization: token YOUR_GITHUB_TOKEN_HERE" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Content-Type: application/json" \
  https://api.github.com/repos/mogulmakeracademy/webapp/contents/blog-posts/how-to-get-sba-loan.json \
  -d '{
    "message": "Add blog post: How to Get an SBA Loan in 2025",
    "content": "ewogICJpZCI6ICJob3ctdG8tZ2V0LXNiYS1sb2FuIiwKICAidGl0bGUiOiAiSG93IHRvIEdldCBhbiBTQkEgTG9hbiBpbiAyMDI1IiwKICAic2x1ZyI6ICJob3ctdG8tZ2V0LXNiYS1sb2FuIiwKICAiZXhjZXJwdCI6ICJDb21wbGV0ZSBndWlkZSB0byBzZWN1cmluZyBTQkEgbG9hbnMuLi4iLAogICJjb250ZW50IjogIjxwPllvdXIgZnVsbCBjb250ZW50IGhlcmUuLi48L3A+IiwKICAiY2F0ZWdvcnkiOiAiZnVuZGluZyIsCiAgImF1dGhvciI6ICJBbnRvbmlvIENvb2siLAogICJwdWJsaXNoRGF0ZSI6ICIyMDI1LTAxLTI2IiwKICAicmVhZFRpbWUiOiAxMCwKICAiZmVhdHVyZWQiOiBmYWxzZSwKICAiaW1hZ2UiOiAiZmEtdW5pdmVyc2l0eSIKfQ==",
    "branch": "main"
  }'
```

### Complete Python Example

```python
import requests
import json
import base64

# Your blog post data
blog_post = {
    "id": "how-to-get-sba-loan",
    "title": "How to Get an SBA Loan in 2025",
    "slug": "how-to-get-sba-loan",
    "excerpt": "Complete guide to securing SBA loans for your business in 2025.",
    "content": "<p>Your full blog content here...</p>",
    "category": "funding",
    "author": "Antonio Cook",
    "publishDate": "2025-01-26",
    "readTime": 10,
    "featured": False,
    "image": "fa-university"
}

# Convert to JSON and encode
json_string = json.dumps(blog_post, indent=2)
base64_content = base64.b64encode(json_string.encode()).decode()

# GitHub API request
url = f"https://api.github.com/repos/mogulmakeracademy/webapp/contents/blog-posts/{blog_post['slug']}.json"
headers = {
    "Authorization": "token YOUR_GITHUB_TOKEN_HERE",
    "Accept": "application/vnd.github.v3+json",
    "Content-Type": "application/json"
}
data = {
    "message": f"Add blog post: {blog_post['title']}",
    "content": base64_content,
    "branch": "main"
}

# Make the request
response = requests.put(url, headers=headers, json=data)

if response.status_code == 201:
    print(f"✅ Blog post created successfully!")
    print(f"View at: https://www.mrmogulmaker.com/blog")
else:
    print(f"❌ Error: {response.status_code}")
    print(response.json())
```

---

## 📋 Response Codes

| Code | Meaning | Action |
|------|---------|--------|
| 201 | Created successfully | Blog post published! |
| 200 | Updated existing file | File was updated |
| 401 | Unauthorized | Check your token |
| 404 | Not found | Check repository path |
| 422 | Validation failed | Check your JSON format |

---

## ⏱️ Deployment Timeline

After you create a blog post via GitHub API:

1. **Immediate**: File committed to GitHub repository
2. **~30 seconds**: Cloudflare Pages detects new commit
3. **~2-5 minutes**: Build and deployment process
4. **~5 minutes total**: Blog post live on www.mrmogulmaker.com

You can monitor deployment status at:
https://dash.cloudflare.com/pages

---

## ✅ Verification Checklist

Before publishing, verify:
- [ ] All required fields are present
- [ ] Category is one of: `credit`, `funding`, `business`
- [ ] Author is set to `"Antonio Cook"`
- [ ] PublishDate is in YYYY-MM-DD format
- [ ] Slug matches filename (without .json)
- [ ] Content is valid HTML
- [ ] Excerpt is 150-200 characters
- [ ] ReadTime is reasonable (5-15 minutes typical)

---

## 🎯 Best Practices

### Content Guidelines

1. **Length**: Aim for 800-2000 words
2. **Formatting**: Use HTML headings (h2, h3), paragraphs, lists
3. **SEO**: Include keywords naturally in title and content
4. **Value**: Provide actionable advice and practical tips
5. **Tone**: Professional but conversational
6. **Call-to-Action**: End with invitation to Mogul Maker Academy

### HTML Content Tips

```html
<!-- Use proper heading hierarchy -->
<h2>Main Section</h2>
<h3>Subsection</h3>

<!-- Use lists for readability -->
<ul>
  <li>Point one</li>
  <li>Point two</li>
</ul>

<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>

<!-- Emphasize important text -->
<strong>Important point</strong>
<em>Emphasis</em>

<!-- Add links -->
<a href="https://mogulmakeracademy.com">Mogul Maker Academy</a>
```

### Common Topics

**Credit Category:**
- How to build business credit
- Net-30 vendors
- Credit repair strategies
- Credit score optimization
- Trade lines and reporting

**Funding Category:**
- SBA loan guides
- Alternative funding options
- Grant opportunities
- Investor pitches
- Crowdfunding strategies

**Business Category:**
- LLC vs S-Corp
- Business structure guides
- Tax strategies
- Asset protection
- Scaling strategies

---

## 🚨 Error Handling

### If File Already Exists

If a blog post with the same slug already exists, you'll get a 422 error. To update:

1. Get the current file's SHA:
```bash
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/repos/mogulmakeracademy/webapp/contents/blog-posts/{slug}.json
```

2. Include the SHA in your update request:
```json
{
  "message": "Update blog post: Title",
  "content": "BASE64_CONTENT",
  "branch": "main",
  "sha": "FILE_SHA_FROM_STEP_1"
}
```

### Common Errors

**401 Unauthorized**: Token is invalid or expired
- Solution: Contact repository owner for new token

**422 Validation Failed**: JSON format is invalid
- Solution: Validate your JSON before encoding

**404 Not Found**: Repository or path is incorrect
- Solution: Verify repository name and path

---

## 📞 Support

If you encounter issues:
1. Check the error response from GitHub API
2. Verify your JSON format is valid
3. Ensure all required fields are present
4. Confirm the token has not expired

---

## 🎉 Success!

Once published, your blog post will appear at:
**https://www.mrmogulmaker.com/blog**

The blog page automatically:
- Fetches all JSON files from `blog-posts/` directory
- Sorts by publish date (newest first)
- Displays featured posts at the top
- Allows filtering by category
- Generates clean URLs: `/blog/{slug}`

---

**Happy Publishing! 🚀**

*This integration was built to empower the Relevance AI Agent to autonomously create and publish high-quality financial education content for the Mr. Mogul Maker community.*
