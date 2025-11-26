# AI Agent Blog Integration Guide

## 🎯 Goal
Allow your Relevance AI Agent to create and publish blog posts to your Mr. Mogul Maker website automatically.

---

## 🏗️ Architecture Options

### **Option 1: Headless CMS (Contentful/Sanity) - Easiest**

**Pros:**
- ✅ No code changes needed (initially)
- ✅ Built-in content management
- ✅ Version history
- ✅ Media management
- ✅ Preview functionality

**Cons:**
- ❌ Requires CMS subscription (free tier limited)
- ❌ Adds external dependency
- ❌ Learning curve for CMS

**Setup Steps:**

1. **Create Contentful Account** (Example with Contentful)
   - Go to: https://www.contentful.com/sign-up/
   - Create free account
   - Create new space: "Mr Mogul Maker Blog"

2. **Define Content Model**
   ```
   Content Type: Blog Post
   Fields:
   - title (Short text, required)
   - slug (Short text, required, unique)
   - excerpt (Long text)
   - content (Rich text)
   - category (Short text: credit, funding, business)
   - author (Short text, default: "Antonio Cook")
   - publishDate (Date & time)
   - featuredImage (Media)
   - readTime (Number, e.g., 5)
   ```

3. **Get API Credentials**
   - Settings → API Keys → Add API Key
   - Copy:
     - Space ID: `xxxxxxxxxxxxx`
     - Content Delivery API Token: `xxxxxxxxxxxxx`
     - Content Management API Token: `xxxxxxxxxxxxx` (for writing)

4. **Give Credentials to AI Agent**
   ```
   Contentful Space ID: YOUR_SPACE_ID
   Contentful API Token: YOUR_CMA_TOKEN
   API Endpoint: https://api.contentful.com/spaces/YOUR_SPACE_ID/environments/master/entries
   ```

5. **AI Agent API Call Example**
   ```bash
   curl -X POST \
     -H "Authorization: Bearer YOUR_CMA_TOKEN" \
     -H "Content-Type: application/vnd.contentful.management.v1+json" \
     -H "X-Contentful-Content-Type: blogPost" \
     https://api.contentful.com/spaces/YOUR_SPACE_ID/environments/master/entries \
     -d '{
       "fields": {
         "title": {"en-US": "How to Build Credit Fast"},
         "slug": {"en-US": "how-to-build-credit-fast"},
         "content": {"en-US": "Full blog content here..."},
         "category": {"en-US": "credit"},
         "author": {"en-US": "Antonio Cook"},
         "readTime": {"en-US": 8}
       }
     }'
   ```

6. **Update Your Website to Fetch from Contentful**
   - Install Contentful SDK: `npm install contentful`
   - Fetch posts in blog route
   - Display dynamically

---

### **Option 2: GitHub API + JSON Files - Most Automated**

**Pros:**
- ✅ Free (uses GitHub)
- ✅ Version controlled
- ✅ Auto-deploys to Cloudflare Pages
- ✅ Full control
- ✅ No external dependencies

**Cons:**
- ❌ Requires GitHub token management
- ❌ Requires code changes to read JSON files

**Setup Steps:**

1. **Create GitHub Personal Access Token**
   ```
   1. Go to: https://github.com/settings/tokens
   2. Click "Generate new token (classic)"
   3. Token name: "Relevance AI Blog Agent"
   4. Expiration: 1 year (or no expiration)
   5. Select scopes:
      ✅ repo (full repository access)
   6. Click "Generate token"
   7. Copy token: ghp_xxxxxxxxxxxxxxxxxxxx
   8. SAVE THIS TOKEN SECURELY - You won't see it again!
   ```

2. **Create Blog Posts Directory**
   ```bash
   mkdir -p /home/user/webapp/blog-posts
   ```

3. **Create Sample Blog Post JSON**
   ```json
   {
     "id": "build-credit-90-days",
     "title": "How to Build Business Credit in 90 Days",
     "slug": "build-business-credit-90-days",
     "excerpt": "The step-by-step blueprint that thousands of entrepreneurs have used to establish strong business credit profiles.",
     "content": "Full blog post content in Markdown or HTML...",
     "category": "credit",
     "author": "Antonio Cook",
     "publishDate": "2025-01-26",
     "readTime": 8,
     "featured": true,
     "image": "fa-credit-card"
   }
   ```

4. **Give GitHub Info to Your AI Agent**
   ```
   GitHub Repository: YOUR_USERNAME/webapp
   GitHub Token: ghp_xxxxxxxxxxxxxxxxxxxx
   Branch: main
   Blog Posts Directory: blog-posts/
   File Format: JSON
   ```

5. **AI Agent GitHub API Call (Create New Post)**
   ```javascript
   // AI Agent makes this API call to create new blog post
   const githubToken = "ghp_xxxxxxxxxxxxxxxxxxxx";
   const repo = "YOUR_USERNAME/webapp";
   const filePath = "blog-posts/new-post-slug.json";
   
   const blogPost = {
     title: "New Blog Post Title",
     slug: "new-post-slug",
     content: "Blog content here...",
     category: "credit",
     author: "Antonio Cook",
     publishDate: "2025-01-26",
     readTime: 8
   };
   
   // Encode content to base64
   const contentBase64 = btoa(JSON.stringify(blogPost, null, 2));
   
   // GitHub API call
   fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
     method: "PUT",
     headers: {
       "Authorization": `token ${githubToken}`,
       "Accept": "application/vnd.github.v3+json",
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       message: `Add blog post: ${blogPost.title}`,
       content: contentBase64,
       branch: "main"
     })
   });
   ```

6. **Update Website to Read JSON Files**
   - Use Cloudflare Workers to read blog-posts directory
   - Parse JSON files
   - Display on /blog page

---

### **Option 3: Custom API Endpoint (Most Control)**

**Pros:**
- ✅ Complete control
- ✅ Custom validation
- ✅ Secure authentication
- ✅ Immediate updates

**Cons:**
- ❌ Requires Cloudflare D1 database setup
- ❌ More complex implementation

**Implementation:**

1. **Add D1 Database to Store Blog Posts**
   ```bash
   npx wrangler d1 create mrmogulmaker-blog
   ```

2. **Create Migration**
   ```sql
   -- migrations/0001_create_blog_posts.sql
   CREATE TABLE IF NOT EXISTS blog_posts (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     slug TEXT UNIQUE NOT NULL,
     title TEXT NOT NULL,
     excerpt TEXT,
     content TEXT NOT NULL,
     category TEXT NOT NULL,
     author TEXT DEFAULT 'Antonio Cook',
     publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
     read_time INTEGER DEFAULT 5,
     featured BOOLEAN DEFAULT 0,
     image_icon TEXT DEFAULT 'fa-book',
     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
   );
   
   CREATE INDEX idx_blog_category ON blog_posts(category);
   CREATE INDEX idx_blog_publish_date ON blog_posts(publish_date DESC);
   ```

3. **Add API Endpoint to Your Hono App**
   ```typescript
   // In src/index.tsx
   
   // Add authentication middleware
   const BLOG_API_KEY = "your-secret-api-key-here"; // Store in Cloudflare secrets
   
   // API endpoint to create blog post
   app.post('/api/blog/create', async (c) => {
     // Authentication
     const apiKey = c.req.header('X-API-Key');
     if (apiKey !== BLOG_API_KEY) {
       return c.json({ error: 'Unauthorized' }, 401);
     }
     
     // Get blog post data
     const { title, slug, excerpt, content, category, readTime, image } = await c.req.json();
     
     // Validate required fields
     if (!title || !slug || !content || !category) {
       return c.json({ error: 'Missing required fields' }, 400);
     }
     
     // Insert into D1 database
     const { env } = c;
     const result = await env.DB.prepare(`
       INSERT INTO blog_posts (title, slug, excerpt, content, category, read_time, image_icon)
       VALUES (?, ?, ?, ?, ?, ?, ?)
     `).bind(title, slug, excerpt, content, category, readTime || 5, image || 'fa-book').run();
     
     // Commit to GitHub (optional)
     // ... GitHub API call here ...
     
     return c.json({ 
       success: true, 
       id: result.meta.last_row_id,
       message: 'Blog post created successfully',
       url: `https://www.mrmogulmaker.com/blog/${slug}`
     });
   });
   
   // API endpoint to list all posts
   app.get('/api/blog/list', async (c) => {
     const { env } = c;
     const { results } = await env.DB.prepare(`
       SELECT * FROM blog_posts 
       ORDER BY publish_date DESC
     `).all();
     
     return c.json({ posts: results });
   });
   ```

4. **Give API Credentials to Your AI Agent**
   ```
   API Endpoint: https://www.mrmogulmaker.com/api/blog/create
   Method: POST
   Headers:
     - X-API-Key: your-secret-api-key-here
     - Content-Type: application/json
   
   Body (JSON):
   {
     "title": "Blog Post Title",
     "slug": "blog-post-slug",
     "excerpt": "Brief summary...",
     "content": "Full blog content in HTML or Markdown...",
     "category": "credit", // credit, funding, or business
     "readTime": 8,
     "image": "fa-credit-card" // Font Awesome icon
   }
   ```

5. **AI Agent API Call Example**
   ```bash
   curl -X POST \
     -H "X-API-Key: your-secret-api-key-here" \
     -H "Content-Type: application/json" \
     https://www.mrmogulmaker.com/api/blog/create \
     -d '{
       "title": "How to Build Credit Fast",
       "slug": "how-to-build-credit-fast",
       "excerpt": "Learn the fastest ways to build business credit...",
       "content": "<p>Full blog post content here...</p>",
       "category": "credit",
       "readTime": 8,
       "image": "fa-credit-card"
     }'
   ```

---

## 🎯 My Recommendation

**Start with Option 2 (GitHub API)** because:
1. ✅ Free and simple
2. ✅ Version controlled
3. ✅ Auto-deploys
4. ✅ No database setup needed initially

**Later upgrade to Option 3** when you need:
- More dynamic content
- Instant updates
- User comments/interactions

---

## 📝 Next Steps

**Choose your option and let me know. I can:**

1. **Option 1 (CMS):** Help you set up Contentful/Sanity integration
2. **Option 2 (GitHub):** Create the blog JSON structure and update your site to read from it
3. **Option 3 (Custom API):** Set up D1 database and create the API endpoints

**What would you like to implement?**
