import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description, schema }) => {
  const pageTitle = title || 'Mr. Mogul Maker | Antonio Cook - Build Buying Power & Multiply Wealth'
  const pageDescription = description || 'Build buying power and multiply wealth with Antonio Cook (Mr. Mogul Maker). Learn to secure funding, establish business credit, and create generational wealth. 10,000+ entrepreneurs funded.'
  
  // Cache-busting version for static assets
  const version = '2.1.1'
  
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Cache Control */}
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="business credit, business funding, entrepreneur coach, financial literacy, Antonio Cook, Mr Mogul Maker, business credit expert, capital stacking, credit repair, business loans" />
        <meta name="author" content="Antonio Cook - Mr. Mogul Maker" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mrmogulmaker.com/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://page.gensparksite.com/v1/base64_upload/43709174c94bba6436f918bc2ab31311" />
        <meta property="og:image:secure_url" content="https://page.gensparksite.com/v1/base64_upload/43709174c94bba6436f918bc2ab31311" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Antonio Cook (Mr. Mogul Maker) - Build Buying Power & Multiply Wealth" />
        <meta property="og:site_name" content="Mr. Mogul Maker" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.mrmogulmaker.com/" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://page.gensparksite.com/v1/base64_upload/43709174c94bba6436f918bc2ab31311" />
        <meta name="twitter:image:alt" content="Antonio Cook (Mr. Mogul Maker) - Build Buying Power & Multiply Wealth" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.mrmogulmaker.com/" />
        
        {/* Favicon - Multiple Sizes */}
        <link rel="icon" type="image/png" sizes="32x32" href="/mr-mogul-maker-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/mr-mogul-maker-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/mr-mogul-maker-logo.png" />
        <link rel="shortcut icon" href="/mr-mogul-maker-logo.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FBBF24" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mogul Maker" />
        
        {/* Schema.org structured data */}
        {schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }} />
        )}
        
        <link href={`/static/style.css?v=${version}`} rel="stylesheet" />
        {/* Simple, safe animations */}
        <link href={`/static/simple-animations.css?v=${version}`} rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* NoScript Fallback */}
        <noscript>
          <style dangerouslySetInnerHTML={{__html: `
            body { opacity: 1 !important; }
            #page-transition-overlay { display: none !important; }
          `}} />
        </noscript>
        
        {/* Scroll Progress Bar */}
        <div class="scroll-progress" id="scroll-progress"></div>
        
        {children}
        
        {/* Simple, safe animations */}
        <script src={`/static/simple-animations.js?v=${version}`}></script>
        
        {/* Video carousel */}
        <script src={`/static/video-carousel.js?v=${version}`}></script>
        
        {/* Scroll Progress Script */}
        <script dangerouslySetInnerHTML={{__html: `
          window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('scroll-progress').style.width = scrolled + '%';
          }, { passive: true });
        `}} />
      </body>
    </html>
  )
})
