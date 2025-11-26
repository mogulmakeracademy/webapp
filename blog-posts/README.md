# Blog Posts Directory

This directory contains blog posts in JSON format that are dynamically loaded and displayed on the Mr. Mogul Maker blog page.

## File Format

Each blog post is a JSON file with the following structure:

```json
{
  "id": "unique-post-id",
  "title": "Blog Post Title",
  "slug": "blog-post-slug",
  "excerpt": "Brief summary (150-200 characters)",
  "content": "Full HTML content of the blog post",
  "category": "credit|funding|business",
  "author": "Antonio Cook",
  "publishDate": "2025-01-26",
  "readTime": 8,
  "featured": false,
  "image": "fa-credit-card"
}
```

## Field Descriptions

- **id**: Unique identifier (same as filename without .json)
- **title**: Full title of the blog post
- **slug**: URL-friendly version of the title
- **excerpt**: Short description (150-200 chars) for cards
- **content**: Full HTML content (supports headings, lists, paragraphs, etc.)
- **category**: One of: `credit`, `funding`, or `business`
- **author**: Default: "Antonio Cook"
- **publishDate**: ISO date format (YYYY-MM-DD)
- **readTime**: Estimated reading time in minutes
- **featured**: Boolean - shows in featured section if true
- **image**: Font Awesome icon class (e.g., "fa-credit-card", "fa-money-bill-wave")

## Adding New Blog Posts

### Via GitHub API (Recommended for AI Agent)

Your AI agent can create new blog posts by making a PUT request to the GitHub API:

```bash
curl -X PUT \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/mogulmakeracademy/webapp/contents/blog-posts/{slug}.json \
  -d '{
    "message": "Add blog post: Title",
    "content": "BASE64_ENCODED_JSON_CONTENT",
    "branch": "main"
  }'
```

### Manual Addition

1. Create a new `.json` file in this directory
2. Follow the format above
3. Commit and push to GitHub
4. Cloudflare Pages will automatically deploy

## File Naming Convention

Filename should match the `slug` field:
- Example: `build-business-credit-90-days.json`
- Use lowercase letters and hyphens only
- No spaces or special characters

## Categories

- **credit**: Business credit, credit repair, credit building
- **funding**: SBA loans, funding strategies, capital access
- **business**: Business structure, operations, general entrepreneurship

## Icon Options

Use any Font Awesome icon class:
- `fa-credit-card` - Credit-related posts
- `fa-money-bill-wave` - Funding-related posts
- `fa-building` - Business structure posts
- `fa-chart-line` - Growth/scaling posts
- `fa-shield-alt` - Protection/asset posts
- `fa-university` - Banking/lending posts
- `fa-chart-pie` - Finance/accounting posts

## Example Posts

See the existing JSON files in this directory for examples:
- `build-business-credit-90-days.json` - Comprehensive guide
- `top-10-net-30-vendors.json` - List/resource post
