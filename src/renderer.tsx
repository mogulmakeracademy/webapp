import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }) => {
  const pageTitle = title || 'Mr. Mogul Maker | Antonio Cook - Business Credit Expert & Entrepreneur Coach'
  const pageDescription = description || 'Learn business credit, secure funding, and build wealth with Antonio Cook (Mr. Mogul Maker). 10,000+ entrepreneurs funded. Speaker, coach, financial educator.'
  
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="business credit, business funding, entrepreneur coach, financial literacy, Antonio Cook, Mr Mogul Maker, business credit expert, capital stacking, credit repair, business loans" />
        <meta name="author" content="Antonio Cook - Mr. Mogul Maker" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrmogulmaker.com/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://mrmogulmaker.com/antonio-cook-professional.jpg" />
        <meta property="og:site_name" content="Mr. Mogul Maker" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mrmogulmaker.com/" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://mrmogulmaker.com/antonio-cook-professional.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mrmogulmaker.com/" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/mr-mogul-maker-logo.png" />
        
        <link href="/static/style.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
