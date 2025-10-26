import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div style="font-family: 'Poppins', sans-serif;">
      {/* Navigation */}
      <nav class="fixed w-full bg-black/95 backdrop-blur-sm z-[60] shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <a href="/" class="flex items-center gap-3 group">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-12 w-12 transition-transform group-hover:scale-110" />
                <span class="text-2xl font-bold">
                  <span class="text-white">Mr.</span> <span class="text-yellow-400">Mogul Maker</span>
                </span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="text-white hover:text-yellow-400 transition">Home</a>
              <a href="/speaking" class="text-white hover:text-yellow-400 transition">Speaking</a>
              <a href="/blog" class="text-white hover:text-yellow-400 transition">Blog</a>
              <a href="/programs" class="text-white hover:text-yellow-400 transition">Programs</a>
              <a href="/shop" class="text-white hover:text-yellow-400 transition">
                <i class="fas fa-shopping-bag mr-2"></i>Shop
              </a>
            </div>
            <button id="mobile-menu-btn" class="md:hidden text-white z-[70] relative">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" class="hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 pt-20">
        <div class="flex flex-col items-center justify-center space-y-8 mt-12 h-full pb-32">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/speaking" class="text-white text-2xl hover:text-yellow-400 transition">Speaking</a>
          <a href="/blog" class="text-white text-2xl hover:text-yellow-400 transition">Blog</a>
          <a href="/programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
          <a href="/shop" class="text-white text-2xl hover:text-yellow-400 transition">
            <i class="fas fa-shopping-bag mr-2"></i>Shop
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 md:pb-0 overflow-hidden">
        {/* Background Image with Overlay */}
        <div class="absolute inset-0">
          <img 
            src="/antonio-cook-professional.jpg" 
            alt="Antonio Cook - Mr. Mogul Maker" 
            class="w-full h-full object-cover"
            style="object-position: center top;"
            loading="eager"
          />
          {/* Dark gradient overlay - stronger on mobile for better readability */}
          <div class="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/70 to-black/50 md:to-transparent"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div class="max-w-3xl hero-content">
            <div class="text-white">
              <div class="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-2 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base">
                <i class="fas fa-crown mr-2"></i>
                Entrepreneur Coach & Financial Educator
              </div>
              <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                Build <span class="text-yellow-400">Buying Power</span> & Multiply Wealth
              </h1>
              <p class="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                I'm Antonio Cook, aka Mr. Mogul Maker — CEO & Co-Founder (with <span class="text-yellow-400 font-semibold">Tashia Anderson</span>) of <a href="https://mogulmakeracademy.com" target="_blank" class="text-yellow-400 hover:underline font-semibold">Mogul Maker Academy</a>. 
                Learn how to secure funding, build business credit, and create generational wealth.
              </p>
              <div class="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-0">
                <a href="/programs" class="bg-yellow-400 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-300 transition transform hover:scale-105 text-center">
                  <i class="fas fa-robot mr-2"></i>
                  Explore AI Coaches
                </a>
                <a href="#contact" class="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-black transition transform hover:scale-105 text-center">
                  <i class="fas fa-phone mr-2"></i>
                  Get In Touch
                </a>
              </div>
              
              {/* Social Links */}
              <div class="flex gap-4 md:gap-6 mt-8 md:mt-12 justify-center sm:justify-start">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-2xl">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/mrmogulmaker/" target="_blank" class="text-white hover:text-yellow-400 transition text-2xl">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/mrmogulmakerceo" target="_blank" class="text-white hover:text-yellow-400 transition text-2xl">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-2xl">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section class="bg-yellow-400 py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center stats-grid">
            <div class="bg-black/5 rounded-2xl p-4 md:p-6">
              <div class="text-3xl md:text-4xl font-bold text-black mb-2">737+</div>
              <div class="text-black/70 font-semibold text-sm md:text-base">YouTube Subscribers</div>
            </div>
            <div class="bg-black/5 rounded-2xl p-4 md:p-6">
              <div class="text-3xl md:text-4xl font-bold text-black mb-2">325+</div>
              <div class="text-black/70 font-semibold text-sm md:text-base">TikTok Followers</div>
            </div>
            <div class="bg-black/5 rounded-2xl p-4 md:p-6">
              <div class="text-3xl md:text-4xl font-bold text-black mb-2">80+</div>
              <div class="text-black/70 font-semibold text-sm md:text-base">Educational Videos</div>
            </div>
            <div class="bg-black/5 rounded-2xl p-4 md:p-6">
              <div class="text-3xl md:text-4xl font-bold text-black mb-2">8</div>
              <div class="text-black/70 font-semibold text-sm md:text-base">Academy Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" class="bg-white py-12 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span class="text-yellow-400">Mr. Mogul Maker</span>
            </h2>
            <p class="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Transforming entrepreneurs from consumers to creditors through financial literacy and strategic business education.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div class="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-6 md:p-12 text-white shadow-2xl">
                <i class="fas fa-quote-left text-yellow-400 text-3xl md:text-4xl mb-4 md:mb-6"></i>
                <p class="text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                  "This channel is where entrepreneurs, investors, and everyday moguls-in-the-making learn how to build real financial power. 
                  We break money down into three stages: how to <strong>make it</strong> through business and income strategies, 
                  how to <strong>manage it</strong> with credit, compliance, and protection systems, and how to <strong>multiply it</strong> 
                  through funding, acquisitions, and wealth-building frameworks."
                </p>
                <div class="flex items-center gap-3 md:gap-4">
                  <div class="w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-crown text-black text-xl md:text-2xl"></i>
                  </div>
                  <div>
                    <div class="font-bold text-base md:text-lg">Antonio Cook</div>
                    <div class="text-yellow-400 text-sm md:text-base">Mr. Mogul Maker</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="space-y-4 md:space-y-6">
              <div class="bg-gray-50 rounded-2xl p-4 md:p-6 hover:shadow-lg transition">
                <div class="flex items-start gap-3 md:gap-4">
                  <div class="bg-yellow-400 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-graduation-cap text-black text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Financial Literacy Educator</h3>
                    <p class="text-sm md:text-base text-gray-600">Empowering individuals with the knowledge to build business credit, secure funding, and create lasting wealth.</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 rounded-2xl p-4 md:p-6 hover:shadow-lg transition">
                <div class="flex items-start gap-3 md:gap-4">
                  <div class="bg-yellow-400 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-building text-black text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">CEO & Co-Founder of Mogul Maker Academy</h3>
                    <p class="text-sm md:text-base text-gray-600">Leading a comprehensive educational platform with partner Tashia Anderson, featuring 8 specialized programs and AI-powered coaching to transform entrepreneurs into successful business owners.</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 rounded-2xl p-4 md:p-6 hover:shadow-lg transition">
                <div class="flex items-start gap-3 md:gap-4">
                  <div class="bg-yellow-400 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-podcast text-black text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Podcast Host</h3>
                    <p class="text-sm md:text-base text-gray-600">Host of "Mind Your Money Podcast" and "3M Podcast: Make, Manage, Multiply" - sharing practical financial wisdom and success strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Podcasts Section */}
      <section id="podcasts" class="bg-white py-12 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span class="text-yellow-400">Podcasts</span>
            </h2>
            <p class="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tune in to learn practical strategies for building wealth and mastering money management.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            <div class="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-6 md:p-8 text-white shadow-2xl">
              <div class="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div class="bg-yellow-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-brain text-black text-xl md:text-2xl"></i>
                </div>
                <h3 class="text-xl md:text-2xl lg:text-3xl font-bold">Mind Your Money Podcast</h3>
              </div>
              <p class="text-gray-300 mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
                Deep dive into financial literacy, credit strategies, and wealth-building principles. Learn how to think like a bank and build wealth like a mogul.
              </p>
              <div class="flex gap-4">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="bg-yellow-400 text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-300 transition">
                  <i class="fab fa-youtube mr-2"></i>
                  Watch Now
                </a>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-6 md:p-8 text-black shadow-2xl">
              <div class="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div class="bg-black w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-coins text-yellow-400 text-xl md:text-2xl"></i>
                </div>
                <h3 class="text-xl md:text-2xl lg:text-3xl font-bold">3M Podcast</h3>
              </div>
              <p class="text-gray-900 mb-4 md:mb-6 text-sm md:text-base lg:text-lg font-semibold">
                <strong>Make, Manage, Multiply</strong> - The complete framework for entrepreneurs. Learn the three essential stages of building lasting wealth and financial freedom.
              </p>
              <div class="flex gap-4">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="bg-black text-yellow-400 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-gray-900 transition">
                  <i class="fab fa-youtube mr-2"></i>
                  Listen Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Popular Videos - Interactive Carousel */}
          <div class="mt-12 md:mt-16">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Popular Videos</h3>
            
            {/* Video Carousel Container - Compact Version */}
            <div class="relative max-w-3xl mx-auto px-8 md:px-0">
              {/* Carousel Wrapper */}
              <div id="video-carousel" class="overflow-hidden rounded-2xl">
                <div id="video-slides" class="flex transition-transform duration-500 ease-in-out">
                  
                  {/* Video 1: How to Become a Data Furnisher */}
                  <div class="min-w-full px-2">
                    <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-2xl">
                      {/* YouTube Embed */}
                      <div class="relative aspect-video bg-black">
                        <iframe 
                          class="w-full h-full"
                          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1?rel=0&modestbranding=1" 
                          title="How to Become a Data Furnisher"
                          frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen>
                        </iframe>
                      </div>
                      {/* Video Info - Compact */}
                      <div class="p-4 bg-white">
                        <h4 class="font-bold text-lg mb-1 text-gray-900">How to Become a Data Furnisher</h4>
                        <p class="text-gray-600 text-sm mb-3">Step-by-step guide to reporting to credit bureaus.</p>
                        <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                          <span><i class="fas fa-eye mr-1"></i> 5.1K views</span>
                          <span><i class="fas fa-clock mr-1"></i> 6 months ago</span>
                        </div>
                        <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="inline-flex items-center text-yellow-400 hover:text-yellow-500 font-semibold text-sm">
                          <i class="fab fa-youtube mr-1"></i>
                          Watch on YouTube
                          <i class="fas fa-external-link-alt ml-1 text-xs"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video 2: Structure Your Business Right */}
                  <div class="min-w-full px-2">
                    <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-2xl">
                      {/* YouTube Embed */}
                      <div class="relative aspect-video bg-black">
                        <iframe 
                          class="w-full h-full"
                          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2?rel=0&modestbranding=1" 
                          title="Structure Your Business Right"
                          frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen>
                        </iframe>
                      </div>
                      {/* Video Info - Compact */}
                      <div class="p-4 bg-white">
                        <h4 class="font-bold text-lg mb-1 text-gray-900">Structure Your Business Right</h4>
                        <p class="text-gray-600 text-sm mb-3">LLC, Corp, or Sole Proprietor? Make the right choice.</p>
                        <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                          <span><i class="fas fa-eye mr-1"></i> 409 views</span>
                          <span><i class="fas fa-clock mr-1"></i> 6 months ago</span>
                        </div>
                        <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="inline-flex items-center text-yellow-400 hover:text-yellow-500 font-semibold text-sm">
                          <i class="fab fa-youtube mr-1"></i>
                          Watch on YouTube
                          <i class="fas fa-external-link-alt ml-1 text-xs"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video 3: Think Like a Bank */}
                  <div class="min-w-full px-2">
                    <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-2xl">
                      {/* YouTube Embed */}
                      <div class="relative aspect-video bg-black">
                        <iframe 
                          class="w-full h-full"
                          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3?rel=0&modestbranding=1" 
                          title="Think Like a Bank"
                          frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen>
                        </iframe>
                      </div>
                      {/* Video Info - Compact */}
                      <div class="p-4 bg-white">
                        <h4 class="font-bold text-lg mb-1 text-gray-900">Think Like a Bank</h4>
                        <p class="text-gray-600 text-sm mb-3">Build wealth like a mogul with the right mindset.</p>
                        <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                          <span><i class="fas fa-eye mr-1"></i> 323 views</span>
                          <span><i class="fas fa-clock mr-1"></i> 5 months ago</span>
                        </div>
                        <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="inline-flex items-center text-yellow-400 hover:text-yellow-500 font-semibold text-sm">
                          <i class="fab fa-youtube mr-1"></i>
                          Watch on YouTube
                          <i class="fas fa-external-link-alt ml-1 text-xs"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              {/* Carousel Navigation - Mobile Optimized */}
              <button 
                id="video-prev" 
                class="absolute left-0 md:left-[-2rem] top-1/3 -translate-y-1/2 bg-yellow-400 active:bg-yellow-500 hover:bg-yellow-500 text-black w-12 h-12 md:w-10 md:h-10 rounded-full shadow-lg transition-all transform active:scale-95 hover:scale-110 flex items-center justify-center z-10 touch-manipulation">
                <i class="fas fa-chevron-left text-base md:text-sm"></i>
              </button>
              <button 
                id="video-next" 
                class="absolute right-0 md:right-[-2rem] top-1/3 -translate-y-1/2 bg-yellow-400 active:bg-yellow-500 hover:bg-yellow-500 text-black w-12 h-12 md:w-10 md:h-10 rounded-full shadow-lg transition-all transform active:scale-95 hover:scale-110 flex items-center justify-center z-10 touch-manipulation">
                <i class="fas fa-chevron-right text-base md:text-sm"></i>
              </button>
              
              {/* Carousel Indicators - Mobile Optimized */}
              <div class="flex justify-center gap-3 mt-6">
                <button class="video-indicator w-3 h-3 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400 transition-all touch-manipulation" data-slide="0"></button>
                <button class="video-indicator w-3 h-3 md:w-2.5 md:h-2.5 rounded-full bg-gray-300 active:bg-yellow-300 hover:bg-yellow-200 transition-all touch-manipulation" data-slide="1"></button>
                <button class="video-indicator w-3 h-3 md:w-2.5 md:h-2.5 rounded-full bg-gray-300 active:bg-yellow-300 hover:bg-yellow-200 transition-all touch-manipulation" data-slide="2"></button>
              </div>
            </div>
            
            {/* View All Videos Button - Mobile Optimized */}
            <div class="text-center mt-8 md:mt-6">
              <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="inline-flex items-center bg-black text-yellow-400 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-gray-900 active:bg-gray-800 transition transform hover:scale-105 active:scale-95">
                <i class="fab fa-youtube mr-2"></i>
                View All Videos
                <i class="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews / Testimonials Section */}
      <section class="bg-gray-100 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="inline-block bg-yellow-400/20 text-yellow-600 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
              <i class="fas fa-star mr-2"></i>
              TRUSTED BY ENTREPRENEURS
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span class="text-yellow-400">Clients Say</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              See why entrepreneurs trust Mr. Mogul Maker to transform their business credit and funding journey
            </p>
          </div>

          {/* Google Reviews Stats */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">4.9</div>
              <div class="flex justify-center gap-1 mb-2">
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
              </div>
              <div class="text-gray-600 text-sm">Google Rating</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">500+</div>
              <div class="text-gray-600 text-sm">Success Stories</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">$10M+</div>
              <div class="text-gray-600 text-sm">Funding Secured</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">1K+</div>
              <div class="text-gray-600 text-sm">Entrepreneurs Helped</div>
            </div>
          </div>

          {/* Sample Reviews Grid */}
          <div class="bg-white rounded-3xl p-8 shadow-xl max-w-5xl mx-auto">
            <div class="text-center mb-8">
              <a 
                href="https://www.google.com/search?q=mr+mogul+maker+antonio+cook+reviews" 
                target="_blank" 
                class="inline-flex items-center gap-3 text-2xl font-bold text-gray-900 hover:text-yellow-600 transition"
              >
                <i class="fab fa-google text-4xl text-blue-600"></i>
                <span>See All Google Reviews</span>
                <i class="fas fa-external-link-alt text-lg"></i>
              </a>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div class="flex gap-1 mb-3">
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                </div>
                <p class="text-gray-700 mb-4 italic leading-relaxed">
                  "Antonio's strategies helped me build my business credit from scratch. 
                  Within 6 months, I secured $150K in funding!"
                </p>
                <div class="flex items-center gap-3">
                  <div class="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold">
                    M
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Marcus J.</p>
                    <p class="text-sm text-gray-600">E-commerce Owner</p>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div class="flex gap-1 mb-3">
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                </div>
                <p class="text-gray-700 mb-4 italic leading-relaxed">
                  "The Mogul Maker Academy changed my life. I went from no credit to 
                  accessing capital I never thought possible."
                </p>
                <div class="flex items-center gap-3">
                  <div class="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold">
                    S
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Sarah K.</p>
                    <p class="text-sm text-gray-600">Restaurant Owner</p>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div class="flex gap-1 mb-3">
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                  <i class="fas fa-star text-yellow-400"></i>
                </div>
                <p class="text-gray-700 mb-4 italic leading-relaxed">
                  "Best investment I've made in my business education. Antonio's 
                  frameworks are practical and actually work!"
                </p>
                <div class="flex items-center gap-3">
                  <div class="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold">
                    D
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">David R.</p>
                    <p class="text-sm text-gray-600">Tech Startup Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div class="text-center mt-12">
            <p class="text-gray-700 mb-6 text-lg">
              <strong>Join hundreds of successful entrepreneurs</strong> who have transformed their business and personal lives
            </p>
            <a 
              href="https://mogulmakeracademy.com" 
              target="_blank" 
              class="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105"
            >
              <i class="fas fa-graduation-cap mr-2"></i>
              Start Your Journey Today
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" class="bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-6 md:p-12 shadow-2xl">
            <i class="fas fa-users text-black text-4xl md:text-6xl mb-4 md:mb-6"></i>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
              Join Our Elite Community
            </h2>
            <p class="text-base md:text-lg lg:text-xl text-black/80 mb-4 md:mb-6 max-w-2xl mx-auto">
              Connect with 100+ successful entrepreneurs, investors, banking professionals, and industry leaders inside the Mogul Maker Academy community. 
              Get live coaching, weekly Q&A calls, and exclusive access to our Skool network where real connections turn into real opportunities.
            </p>
            <div class="inline-block bg-black/10 rounded-2xl px-6 py-3 mb-6">
              <div class="text-black font-bold text-2xl">Only $39/month</div>
              <div class="text-black/70 text-sm">Full community access + live coaching</div>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://mogulmakeracademy.com" target="_blank" class="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition transform hover:scale-105 inline-flex items-center justify-center">
                <i class="fas fa-graduation-cap mr-2"></i>
                Join the Community
              </a>
            </div>
            <p class="text-black/60 text-sm mt-6">
              <i class="fas fa-check-circle mr-2"></i>
              Live coaching • Weekly calls • Elite networking • Banking connections • Investor access
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-black text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-16 w-16" />
                <h3 class="text-2xl font-bold text-yellow-400">Mr. Mogul Maker</h3>
              </div>
              <p class="text-gray-400 mb-4">
                Empowering entrepreneurs with financial literacy, business credit strategies, and wealth-building education.
              </p>
              <div class="flex gap-4">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/mrmogulmaker/" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/mrmogulmakerceo" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 class="font-bold text-lg mb-4">Quick Links</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#about" class="hover:text-yellow-400 transition">About</a></li>
                <li><a href="#programs" class="hover:text-yellow-400 transition">Programs</a></li>
                <li><a href="#podcasts" class="hover:text-yellow-400 transition">Podcasts</a></li>
                <li><a href="https://mogulmakeracademy.com" target="_blank" class="hover:text-yellow-400 transition">Academy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold text-lg mb-4">Resources</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="hover:text-yellow-400 transition">YouTube Channel</a></li>
                <li><a href="#podcasts" class="hover:text-yellow-400 transition">Mind Your Money</a></li>
                <li><a href="#podcasts" class="hover:text-yellow-400 transition">3M Podcast</a></li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mr. Mogul Maker | Antonio Cook. All rights reserved.</p>
            <p class="mt-2 text-yellow-400 font-semibold">Money Follows Management™</p>
          </div>
        </div>
      </footer>

      {/* JavaScript for mobile menu */}
      <script dangerouslySetInnerHTML={{__html: `
        // Update cart badge on home page
        function updateHomeCartBadge() {
          const cart = JSON.parse(localStorage.getItem('mogulmaker_cart') || '[]');
          const badge = document.getElementById('cart-badge-home');
          if (cart.length > 0) {
            badge.textContent = cart.length;
            badge.classList.remove('hidden');
          } else {
            badge.classList.add('hidden');
          }
        }
        updateHomeCartBadge();
        
        // Enhanced mobile menu with smooth animations and swipe gestures
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        // Check if elements exist
        if (!mobileMenuBtn || !mobileMenu) {
          console.error('Mobile menu elements not found');
          return;
        }
        
        const mobileMenuIcon = mobileMenuBtn.querySelector('i');
        
        // Swipe variables for mobile menu
        let menuTouchStartX = 0;
        let menuTouchStartY = 0;
        let menuTouchEndX = 0;
        let menuTouchEndY = 0;
        const menuSwipeThreshold = 100;
        
        function openMobileMenu() {
          mobileMenu.classList.remove('hidden');
          if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-times');
          }
          document.body.style.overflow = 'hidden';
        }
        
        function closeMobileMenu() {
          mobileMenu.classList.add('hidden');
          if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
          }
          document.body.style.overflow = '';
        }
        
        // Button click handler
        mobileMenuBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const isHidden = mobileMenu.classList.contains('hidden');
          if (isHidden) {
            openMobileMenu();
          } else {
            closeMobileMenu();
          }
        });
        
        // Close mobile menu when clicking links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.addEventListener('click', closeMobileMenu);
        });
        
        // Close mobile menu when clicking outside
        mobileMenu.addEventListener('click', function(e) {
          if (e.target.id === 'mobile-menu') {
            closeMobileMenu();
          }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
          }
        });
        
        // Swipe gestures for mobile menu
        // Swipe right from left edge to open menu
        document.addEventListener('touchstart', (e) => {
          menuTouchStartX = e.changedTouches[0].screenX;
          menuTouchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
          menuTouchEndX = e.changedTouches[0].screenX;
          menuTouchEndY = e.changedTouches[0].screenY;
          
          const deltaX = menuTouchEndX - menuTouchStartX;
          const deltaY = menuTouchEndY - menuTouchStartY;
          const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
          
          if (isHorizontalSwipe && Math.abs(deltaX) > menuSwipeThreshold) {
            // Swipe right from left edge (first 50px) to open menu
            if (menuTouchStartX < 50 && deltaX > 0 && mobileMenu.classList.contains('hidden')) {
              openMobileMenu();
            }
            // Swipe left to close menu
            else if (deltaX < 0 && !mobileMenu.classList.contains('hidden')) {
              closeMobileMenu();
            }
          }
        }, { passive: true });
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });
        
        // Video Carousel with Swipe Gestures
        const videoCarousel = document.getElementById('video-carousel');
        const videoSlides = document.getElementById('video-slides');
        const videoPrevBtn = document.getElementById('video-prev');
        const videoNextBtn = document.getElementById('video-next');
        const videoIndicators = document.querySelectorAll('.video-indicator');
        
        if (videoCarousel && videoSlides) {
          let currentVideoSlide = 0;
          const totalVideoSlides = videoIndicators.length;
          
          // Swipe gesture variables
          let touchStartX = 0;
          let touchEndX = 0;
          let touchStartY = 0;
          let touchEndY = 0;
          const minSwipeDistance = 50; // minimum distance for swipe
          
          function updateVideoCarousel() {
            const slideWidth = videoSlides.querySelector('.min-w-full').offsetWidth;
            videoSlides.style.transform = \`translateX(-\${currentVideoSlide * slideWidth}px)\`;
            
            // Update indicators
            videoIndicators.forEach((indicator, index) => {
              if (index === currentVideoSlide) {
                indicator.classList.remove('bg-gray-300');
                indicator.classList.add('bg-yellow-400');
              } else {
                indicator.classList.remove('bg-yellow-400');
                indicator.classList.add('bg-gray-300');
              }
            });
          }
          
          function goToVideoSlide(index) {
            if (index >= 0 && index < totalVideoSlides) {
              currentVideoSlide = index;
              updateVideoCarousel();
            }
          }
          
          function nextVideoSlide() {
            currentVideoSlide = (currentVideoSlide + 1) % totalVideoSlides;
            updateVideoCarousel();
          }
          
          function prevVideoSlide() {
            currentVideoSlide = (currentVideoSlide - 1 + totalVideoSlides) % totalVideoSlides;
            updateVideoCarousel();
          }
          
          // Button click handlers
          if (videoPrevBtn) {
            videoPrevBtn.addEventListener('click', prevVideoSlide);
          }
          
          if (videoNextBtn) {
            videoNextBtn.addEventListener('click', nextVideoSlide);
          }
          
          // Indicator click handlers
          videoIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToVideoSlide(index));
          });
          
          // Touch/Swipe event handlers
          videoCarousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
          }, { passive: true });
          
          videoCarousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
          }, { passive: true });
          
          function handleSwipe() {
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            
            // Check if horizontal swipe is dominant (not vertical scroll)
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
              if (Math.abs(deltaX) > minSwipeDistance) {
                if (deltaX < 0) {
                  // Swiped left - next slide
                  nextVideoSlide();
                } else {
                  // Swiped right - previous slide
                  prevVideoSlide();
                }
              }
            }
          }
          
          // Keyboard navigation
          document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
              prevVideoSlide();
            } else if (e.key === 'ArrowRight') {
              nextVideoSlide();
            }
          });
          
          // Initialize carousel
          updateVideoCarousel();
          
          // Update on window resize
          window.addEventListener('resize', updateVideoCarousel);
        }
      `}} />
    </div>,
    {
      title: 'Mr. Mogul Maker | Antonio Cook - Business Credit Expert & Entrepreneur Coach',
      description: 'Learn business credit, secure funding, and build wealth with Antonio Cook (Mr. Mogul Maker). 10,000+ entrepreneurs funded. Expert speaker on business credit and financial literacy.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': 'https://mrmogulmaker.com/#person',
            name: 'Antonio Cook',
            alternateName: 'Mr. Mogul Maker',
            description: 'Business Credit Expert, Entrepreneur Coach, Speaker, and Financial Literacy Educator',
            url: 'https://mrmogulmaker.com',
            image: 'https://mrmogulmaker.com/antonio-cook-professional.jpg',
            sameAs: [
              'https://www.instagram.com/mr.mogul.maker',
              'https://www.youtube.com/@MrMogulMaker'
            ],
            jobTitle: 'Business Credit Expert & Entrepreneur Coach',
            worksFor: {
              '@id': 'https://mrmogulmaker.com/#organization'
            },
            knowsAbout: [
              'Business Credit',
              'Business Funding',
              'Financial Literacy',
              'Entrepreneurship',
              'Capital Stacking',
              'Credit Repair',
              'Wealth Building'
            ]
          },
          {
            '@type': 'Organization',
            '@id': 'https://mrmogulmaker.com/#organization',
            name: 'Mr. Mogul Maker',
            founder: {
              '@id': 'https://mrmogulmaker.com/#person'
            },
            url: 'https://mrmogulmaker.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://mrmogulmaker.com/mr-mogul-maker-logo.png'
            },
            description: 'Business credit expertise and entrepreneur coaching to help you secure funding and build wealth',
            slogan: 'Money Follows Management™',
            sameAs: [
              'https://www.instagram.com/mr.mogul.maker',
              'https://www.youtube.com/@MrMogulMaker'
            ]
          },
          {
            '@type': 'WebSite',
            '@id': 'https://mrmogulmaker.com/#website',
            url: 'https://mrmogulmaker.com',
            name: 'Mr. Mogul Maker',
            description: 'Business Credit Expert & Entrepreneur Coach helping entrepreneurs secure funding and build wealth',
            publisher: {
              '@id': 'https://mrmogulmaker.com/#organization'
            }
          },
          {
            '@type': 'ProfessionalService',
            '@id': 'https://mrmogulmaker.com/#service',
            name: 'Mr. Mogul Maker Business Credit Coaching',
            description: 'Professional business credit coaching and entrepreneur mentorship services',
            provider: {
              '@id': 'https://mrmogulmaker.com/#organization'
            },
            areaServed: 'Worldwide',
            serviceType: [
              'Business Credit Coaching',
              'Funding Strategy Consulting',
              'Financial Literacy Education',
              'Keynote Speaking'
            ]
          }
        ]
      }
    }
  )
})

// Shop Page Route
app.get('/shop', (c) => {
  return c.render(
    <div style="font-family: 'Poppins', sans-serif;">
      {/* Navigation */}
      <nav class="fixed w-full bg-black/95 backdrop-blur-sm z-[60] shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <a href="/" class="flex items-center gap-3 group">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-12 w-12 transition-transform group-hover:scale-110" />
                <span class="text-2xl font-bold">
                  <span class="text-white">Mr.</span> <span class="text-yellow-400">Mogul Maker</span>
                </span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="text-white hover:text-yellow-400 transition">Home</a>
              <a href="/speaking" class="text-white hover:text-yellow-400 transition">Speaking</a>
              <a href="/blog" class="text-white hover:text-yellow-400 transition">Blog</a>
              <a href="/#programs" class="text-white hover:text-yellow-400 transition">Programs</a>
              <a href="/shop" class="text-yellow-400 font-semibold">
                <i class="fas fa-shopping-bag mr-2"></i>Shop
              </a>
            </div>
            <button id="mobile-menu-btn-shop" class="md:hidden text-white z-[70] relative">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu-shop" class="hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 pt-20">
        <div class="flex flex-col items-center justify-center space-y-8 mt-12 h-full pb-32">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/speaking" class="text-white text-2xl hover:text-yellow-400 transition">Speaking</a>
          <a href="/blog" class="text-white text-2xl hover:text-yellow-400 transition">Blog</a>
          <a href="/#programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
          <a href="/shop" class="text-yellow-400 text-2xl font-semibold">
            <i class="fas fa-shopping-bag mr-2"></i>Shop
          </a>
        </div>
      </div>

      {/* GHL Store Embed - Full Page */}
      <div class="pt-20" style="background-color: #000000;">
        <iframe
          src="https://shop.mrmogulmaker.com/shop"
          style="width:100%;height:calc(100vh - 80px);min-height:800px;border:none;"
          id="ghl-store-iframe"
          title="Mr. Mogul Maker Store"
          scrolling="yes"
        ></iframe>
      </div>

      {/* Mobile Menu JavaScript */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const mobileMenuBtn = document.getElementById('mobile-menu-btn-shop');
          const mobileMenu = document.getElementById('mobile-menu-shop');
          
          if (!mobileMenuBtn || !mobileMenu) {
            return;
          }
          
          const mobileMenuIcon = mobileMenuBtn.querySelector('i');
          
          function openMobileMenu() {
            mobileMenu.classList.remove('hidden');
            if (mobileMenuIcon) {
              mobileMenuIcon.classList.remove('fa-bars');
              mobileMenuIcon.classList.add('fa-times');
            }
            document.body.style.overflow = 'hidden';
          }
          
          function closeMobileMenu() {
            mobileMenu.classList.add('hidden');
            if (mobileMenuIcon) {
              mobileMenuIcon.classList.remove('fa-times');
              mobileMenuIcon.classList.add('fa-bars');
            }
            document.body.style.overflow = '';
          }
          
          // Button click handler
          mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
              openMobileMenu();
            } else {
              closeMobileMenu();
            }
          });
          
          // Close mobile menu when clicking links
          mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
          });
          
          // Close mobile menu when clicking outside
          mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
              closeMobileMenu();
            }
          });
          
          // Close mobile menu on escape key
          document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
              closeMobileMenu();
            }
          });
        });
      `}} />
    </div>,
    {
      title: 'Shop - Digital Products & Courses | Mr. Mogul Maker',
      description: 'Browse business credit courses, funding templates, and wealth-building products from Mr. Mogul Maker. Proven systems to build business credit and secure funding.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Shop',
        description: 'Digital products and courses for business credit and wealth building',
        url: 'https://mrmogulmaker.com/shop'
      }
    }
  )
})

// OLD SHOP ROUTE WITH ALL PRODUCTS - REMOVED FOR CLEAN GHL EMBED
// The complex shop page with cart, modals, and product grids has been replaced
// with a simple full-page GHL store embed for better control and branding

// REMOVED CONTENT (lines 884-1879):
// - Shopping Cart Modal
// - Product Detail Modal  
// - Hero Section
// - Breadcrumb Navigation
// - Filter Section
// - Products Grid
// - GHL Full Store Section (with extra wrapper)
// - Trust Section
// - Footer
// - Complex JavaScript for shop functionality
// - Product data array
// - Cart management
// - All modal handlers

// NEW APPROACH:
// - Clean header with navigation
// - Full-page GHL iframe embed
// - Minimal JavaScript for mobile menu
// - GHL handles all shop functionality (cart, checkout, products)



// Speaking/Booking Page Route
app.get('/speaking', (c) => {
  return c.render(
    <div style="font-family: 'Poppins', sans-serif;">
      {/* Navigation */}
      <nav class="fixed w-full bg-black/95 backdrop-blur-sm z-50 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <a href="/" class="flex items-center gap-3 group">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-12 w-12 transition-transform group-hover:scale-110" />
                <span class="text-2xl font-bold">
                  <span class="text-white">Mr.</span> <span class="text-yellow-400">Mogul Maker</span>
                </span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="text-white hover:text-yellow-400 transition">Home</a>
              <a href="/speaking" class="text-yellow-400 font-semibold">Speaking</a>
              <a href="/blog" class="text-white hover:text-yellow-400 transition">Blog</a>
              <a href="/#programs" class="text-white hover:text-yellow-400 transition">Programs</a>
              <a href="/shop" class="text-white hover:text-yellow-400 transition">
                <i class="fas fa-shopping-bag mr-2"></i>Shop
              </a>
              <a href="/#contact" class="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">Book Me</a>
            </div>
            <button id="mobile-menu-btn-speaking" class="md:hidden text-white z-[70] relative">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu-speaking" class="hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 pt-20">
        <div class="flex flex-col items-center justify-center space-y-8 mt-12 h-full pb-32">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/speaking" class="text-yellow-400 text-2xl font-semibold">Speaking</a>
          <a href="/blog" class="text-white text-2xl hover:text-yellow-400 transition">Blog</a>
          <a href="/#programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
          <a href="/shop" class="text-white text-2xl hover:text-yellow-400 transition">
            <i class="fas fa-shopping-bag mr-2"></i>Shop
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-16">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmRiNGQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJoNGMxLjEgMCAyIC45IDIgMnY0YzAgMS4xLS45IDItMiAyaC00Yy0xLjEgMC0yLS45LTItMnYtNHptMCAxOGMwLTEuMS45LTIgMi0yaDRjMS4xIDAgMiAuOSAyIDJ2NGMwIDEuMS0uOSAyLTIgMmgtNGMtMS4xIDAtMi0uOS0yLTJ2LTR6bTE4IDBjMC0xLjEuOS0yIDItMmg0YzEuMSAwIDIgLjkgMiAydjRjMCAxLjEtLjkgMi0yIDJoLTRjLTEuMSAwLTItLjktMi0ydi00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div class="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-full mb-6">
            <i class="fas fa-microphone-alt mr-2"></i>
            Professional Speaker & Entrepreneur Coach
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
            <span class="text-yellow-400">Empowering Entrepreneurs</span> Through Capital Raising Education
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Inspire your audience with proven strategies on capital raising, investor education, and wealth building. 
            Dynamic keynotes that transform entrepreneurs into informed investors and capital market experts.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="#booking" class="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
              <i class="fas fa-calendar-check mr-2"></i>
              Book a Call
            </a>
            <a href="#topics" class="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition">
              <i class="fas fa-list mr-2"></i>
              Speaking Topics
            </a>
          </div>
        </div>
      </section>

      {/* Freedom Writers Background Section */}
      <section class="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 border-t border-yellow-400/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div class="text-white">
              <div class="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
                <i class="fas fa-book-open mr-2"></i>
                ORIGINAL FREEDOM WRITER - CLASSROOM 203
              </div>
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                From <span class="text-yellow-400">Freedom Writer</span> to Entrepreneur Educator
              </h2>
              <p class="text-xl text-gray-300 mb-6 leading-relaxed">
                As one of the original students from <strong>Classroom 203</strong> with Erin Gruwell, 
                I learned firsthand the transformative power of education, hope, and second chances.
              </p>
              <p class="text-lg text-gray-400 mb-6 leading-relaxed">
                The Freedom Writers story—documented in the New York Times bestseller 
                <em>"The Freedom Writers Diary"</em> and the 2007 film starring Hilary Swank—
                taught me that your past doesn't define your future. Now, I bring that same message 
                of transformation to entrepreneurs around the world.
              </p>
              
              {/* Key Achievements */}
              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <div class="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i class="fas fa-check text-black text-sm"></i>
                  </div>
                  <div>
                    <p class="text-white font-semibold">Original Freedom Writer Student</p>
                    <p class="text-gray-400 text-sm">Classroom 203 with Erin Gruwell, Long Beach, CA</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i class="fas fa-check text-black text-sm"></i>
                  </div>
                  <div>
                    <p class="text-white font-semibold">Met Miep Gies</p>
                    <p class="text-gray-400 text-sm">Hero who sheltered Anne Frank during WWII</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i class="fas fa-check text-black text-sm"></i>
                  </div>
                  <div>
                    <p class="text-white font-semibold">Featured in NYT Bestseller</p>
                    <p class="text-gray-400 text-sm">"The Freedom Writers Diary" (1999)</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i class="fas fa-check text-black text-sm"></i>
                  </div>
                  <div>
                    <p class="text-white font-semibold">Continuing the Legacy</p>
                    <p class="text-gray-400 text-sm">Teaching tolerance, hope, and transformation through entrepreneurship</p>
                  </div>
                </div>
              </div>

              <a href="https://freedomwritersfoundation.org/" target="_blank" class="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition transform hover:scale-105">
                <i class="fas fa-external-link-alt"></i>
                Learn About Freedom Writers
              </a>
            </div>

            {/* Image Carousel */}
            <div class="relative">
              <div class="freedom-writers-carousel relative overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400/20">
                <div class="carousel-images relative" style="height: 500px;">
                  <div class="carousel-slide active absolute inset-0 transition-opacity duration-500">
                    <img 
                      src="https://page.gensparksite.com/v1/base64_upload/16037bab0b0477b1c1d28c3e133bf481" 
                      alt="With Miep Gies - Hero who sheltered Anne Frank"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <p class="text-white font-semibold text-lg">With Miep Gies</p>
                      <p class="text-gray-300 text-sm">Hero who sheltered Anne Frank during WWII</p>
                    </div>
                  </div>
                  <div class="carousel-slide absolute inset-0 transition-opacity duration-500 opacity-0">
                    <img 
                      src="https://page.gensparksite.com/v1/base64_upload/10806dcfc4998778b8709348a99c797b" 
                      alt="Freedom Writers - Classroom 203 memories"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <p class="text-white font-semibold text-lg">Freedom Writers Legacy</p>
                      <p class="text-gray-300 text-sm">Memories from Classroom 203 and media coverage</p>
                    </div>
                  </div>
                  <div class="carousel-slide absolute inset-0 transition-opacity duration-500 opacity-0">
                    <img 
                      src="https://page.gensparksite.com/v1/base64_upload/07bb5f777df77eddc234b0fbc2f0e80f" 
                      alt="With Erin Gruwell - Freedom Writers Teacher"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <p class="text-white font-semibold text-lg">With Erin Gruwell</p>
                      <p class="text-gray-300 text-sm">Teacher who changed our lives through the power of writing</p>
                    </div>
                  </div>
                </div>
                
                {/* Carousel Controls */}
                <button class="carousel-prev absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400/90 hover:bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center transition z-10">
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button class="carousel-next absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400/90 hover:bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center transition z-10">
                  <i class="fas fa-chevron-right"></i>
                </button>
                
                {/* Carousel Indicators */}
                <div class="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  <button class="carousel-indicator active w-3 h-3 rounded-full bg-yellow-400" data-slide="0"></button>
                  <button class="carousel-indicator w-3 h-3 rounded-full bg-white/50" data-slide="1"></button>
                  <button class="carousel-indicator w-3 h-3 rounded-full bg-white/50" data-slide="2"></button>
                </div>
              </div>

              {/* Book Reference */}
              <div class="mt-6 bg-white/5 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4">
                <div class="flex items-center gap-3">
                  <div class="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-book text-black text-xl"></i>
                  </div>
                  <div>
                    <p class="text-white font-bold text-sm">The Freedom Writers Diary</p>
                    <p class="text-gray-400 text-xs">New York Times Bestseller (1999)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav class="bg-white py-4 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" class="text-gray-600 hover:text-yellow-400 transition">
                <i class="fas fa-home mr-1"></i>
                Home
              </a>
            </li>
            <li class="text-gray-400">
              <i class="fas fa-chevron-right text-xs"></i>
            </li>
            <li class="text-gray-900 font-semibold">
              Speaking
            </li>
          </ol>
        </div>
      </nav>

      {/* Speaking Topics */}
      <section id="topics" class="bg-white py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Speaking <span class="text-yellow-400">Topics</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Engaging, actionable presentations that drive real results for your audience.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-white hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-chart-line text-black text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Building Business Credit from Scratch</h3>
              <p class="text-gray-300 mb-4">Learn the exact steps to establish strong business credit, separate personal and business finances, and access funding without personal guarantees.</p>
              <ul class="space-y-2 text-sm">
                <li><i class="fas fa-check text-yellow-400 mr-2"></i>Establishing business credit profiles</li>
                <li><i class="fas fa-check text-yellow-400 mr-2"></i>Net-30 vendor accounts strategy</li>
                <li><i class="fas fa-check text-yellow-400 mr-2"></i>Credit monitoring and optimization</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-black hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-dollar-sign text-yellow-400 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">The 3M Framework: Make, Manage, Multiply</h3>
              <p class="text-gray-800 mb-4 font-semibold">Master the three stages of wealth building: how to make money through business strategies, manage it with systems, and multiply it through investments.</p>
              <ul class="space-y-2 text-sm">
                <li><i class="fas fa-check text-black mr-2"></i>Income generation strategies</li>
                <li><i class="fas fa-check text-black mr-2"></i>Financial management systems</li>
                <li><i class="fas fa-check text-black mr-2"></i>Wealth multiplication tactics</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-white hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-money-bill-wave text-black text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Securing Business Funding Without Perfect Credit</h3>
              <p class="text-gray-300 mb-4">Discover proven funding sources and application strategies that work even with challenged credit. Learn what banks and lenders really look for.</p>
              <ul class="space-y-2 text-sm">
                <li><i class="fas fa-check text-yellow-400 mr-2"></i>50+ funding source strategies</li>
                <li><i class="fas fa-check text-yellow-400 mr-2"></i>Application optimization tips</li>
                <li><i class="fas fa-check text-yellow-400 mr-2"></i>Alternative financing options</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-black hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-user-tie text-yellow-400 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">From Consumer to Creditor: The Mindset Shift</h3>
              <p class="text-gray-800 mb-4 font-semibold">Transform how you think about money and credit. Learn to think like banks and creditors, not like consumers who chase quick fixes.</p>
              <ul class="space-y-2 text-sm">
                <li><i class="fas fa-check text-black mr-2"></i>Financial literacy fundamentals</li>
                <li><i class="fas fa-check text-black mr-2"></i>Credit score optimization</li>
                <li><i class="fas fa-check text-black mr-2"></i>Wealth-building psychology</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-white hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-building text-black text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Business Structure & Legal Protection</h3>
              <p class="text-gray-300 mb-4">Set up your business correctly from day one. LLC vs. Corporation, tax strategies, asset protection, and compliance that prevents costly mistakes.</p>
              <ul class="space-y-2 text-sm">
                <li><i class="fas fa-check text-yellow-400 mr-2"></i>Entity selection and formation</li>
                <li><i class="fas fa-check text-yellow-400 mr-2"></i>Asset protection strategies</li>
                <li><i class="fas fa-check text-yellow-400 mr-2"></i>Tax optimization basics</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-black hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-rocket text-yellow-400 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Money Follows Management™</h3>
              <p class="text-gray-800 mb-4 font-semibold">The signature framework that shows entrepreneurs how proper financial management attracts wealth, funding, and opportunities automatically.</p>
              <ul class="space-y-2 text-sm">
                <li><i class="fas fa-check text-black mr-2"></i>Financial systems setup</li>
                <li><i class="fas fa-check text-black mr-2"></i>Cash flow management</li>
                <li><i class="fas fa-check text-black mr-2"></i>Scaling strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section class="bg-gray-100 py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perfect For Your <span class="text-yellow-400">Event</span>
            </h2>
          </div>

          <div class="grid md:grid-cols-4 gap-6">
            <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <i class="fas fa-users text-yellow-400 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Corporate Events</h3>
              <p class="text-gray-600">Keynotes, training sessions, and workshops for businesses</p>
            </div>
            <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <i class="fas fa-handshake text-yellow-400 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Conferences</h3>
              <p class="text-gray-600">Engaging presentations for industry conferences and summits</p>
            </div>
            <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <i class="fas fa-graduation-cap text-yellow-400 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Educational</h3>
              <p class="text-gray-600">College campuses, business schools, and training programs</p>
            </div>
            <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <i class="fas fa-bullhorn text-yellow-400 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Associations</h3>
              <p class="text-gray-600">Trade groups, chambers of commerce, and professional organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Media - Yahoo Finance */}
      <section class="bg-white py-20 border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
              <i class="fas fa-newspaper mr-2"></i>
              AS FEATURED IN
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognized by <span class="text-yellow-400">Major Media</span>
            </h2>
          </div>

          <div class="max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <div class="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div class="relative h-64 md:h-auto">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/cd60053dc8442f7743d17e9435f874a2" 
                    alt="Antonio Cook - Yahoo Finance Top Business Professionals 2021"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    YAHOO FINANCE
                  </div>
                </div>

                {/* Content */}
                <div class="p-8 flex flex-col justify-center">
                  <div class="mb-4">
                    <svg class="h-8 w-auto mb-4" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                      <text x="0" y="35" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#5F01D1">yahoo!</text>
                      <text x="105" y="35" font-family="Arial, sans-serif" font-size="16" fill="#000">finance</text>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">
                    Top Business Professionals to Follow in 2021
                  </h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">
                    Featured alongside industry leaders as a top business professional making waves in entrepreneurship, 
                    financial education, and business credit mastery.
                  </p>
                  <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <i class="far fa-calendar-alt"></i>
                    <span>December 30, 2020</span>
                    <span class="mx-2">•</span>
                    <span>37-min read</span>
                  </div>
                  <a 
                    href="https://finance.yahoo.com/news/top-business-professionals-follow-2021-160500406.html" 
                    target="_blank" 
                    class="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition transform hover:scale-105 w-fit"
                  >
                    <i class="fas fa-external-link-alt"></i>
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Media Badges */}
          <div class="mt-12 text-center">
            <p class="text-gray-500 text-sm mb-4">TRUSTED BY ENTREPRENEURS WORLDWIDE</p>
            <div class="flex flex-wrap justify-center items-center gap-8">
              <div class="text-gray-400">
                <i class="fas fa-users text-3xl mb-2"></i>
                <p class="text-sm font-semibold text-gray-900">10,000+</p>
                <p class="text-xs">Entrepreneurs Helped</p>
              </div>
              <div class="text-gray-400">
                <i class="fas fa-dollar-sign text-3xl mb-2"></i>
                <p class="text-sm font-semibold text-gray-900">$10M+</p>
                <p class="text-xs">Funding Secured</p>
              </div>
              <div class="text-gray-400">
                <i class="fas fa-chart-line text-3xl mb-2"></i>
                <p class="text-sm font-semibold text-gray-900">500+</p>
                <p class="text-xs">Success Stories</p>
              </div>
              <div class="text-gray-400">
                <i class="fas fa-star text-3xl mb-2"></i>
                <p class="text-sm font-semibold text-gray-900">4.9/5</p>
                <p class="text-xs">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Booking Options Section */}
      <section id="booking" class="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Work <span class="text-yellow-400">Together</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the option that best fits your needs
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Speaking Event Booking */}
            <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition border-2 border-yellow-400/20 hover:border-yellow-400">
              <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 text-black">
                <div class="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-microphone-alt text-yellow-400 text-2xl"></i>
                </div>
                <h3 class="text-3xl font-bold mb-2">Book Me to Speak</h3>
                <p class="text-black/80 font-semibold">Corporate Events, Conferences & Workshops</p>
              </div>
              
              <div class="p-8">
                <ul class="space-y-4 mb-8">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <div>
                      <p class="font-semibold text-gray-900">Keynote Speaking</p>
                      <p class="text-sm text-gray-600">Dynamic presentations for your event</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <div>
                      <p class="font-semibold text-gray-900">Workshop Facilitation</p>
                      <p class="text-sm text-gray-600">Interactive training sessions</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <div>
                      <p class="font-semibold text-gray-900">Panel Discussions</p>
                      <p class="text-sm text-gray-600">Expert commentary and insights</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <div>
                      <p class="font-semibold text-gray-900">Custom Programs</p>
                      <p class="text-sm text-gray-600">Tailored to your audience needs</p>
                    </div>
                  </li>
                </ul>

                <div class="bg-yellow-50 rounded-2xl p-6 mb-6">
                  <p class="text-sm text-gray-700 mb-4">
                    <i class="fas fa-info-circle text-yellow-600 mr-2"></i>
                    <strong>Perfect for:</strong> Conferences, corporate events, association meetings, workshops, and entrepreneurial gatherings.
                  </p>
                </div>

                <a 
                  href="https://api.leadconnectorhq.com/widget/booking/Z7QykcQNZ9feGnb8HaVq" 
                  target="_blank"
                  class="block w-full bg-yellow-400 text-black text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105"
                >
                  <i class="fas fa-calendar-check mr-2"></i>
                  Book Speaking Engagement
                </a>
              </div>
            </div>

            {/* Strategy Session Booking */}
            <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition border-2 border-gray-200 hover:border-yellow-400">
              <div class="bg-gradient-to-br from-black to-gray-900 p-8 text-white">
                <div class="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-user-tie text-black text-2xl"></i>
                </div>
                <h3 class="text-3xl font-bold mb-2">Strategy Session</h3>
                <p class="text-gray-300">One-on-One Consultation & Coaching</p>
              </div>
              
              <div class="p-8">
                <ul class="space-y-4 mb-8">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <div>
                      <p class="font-semibold text-gray-900">Business Credit Strategy</p>
                      <p class="text-sm text-gray-600">Personalized credit building plan</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <div>
                      <p class="font-semibold text-gray-900">Funding Roadmap</p>
                      <p class="text-sm text-gray-600">Capital raising strategy session</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <div>
                      <p class="font-semibold text-gray-900">Business Structuring</p>
                      <p class="text-sm text-gray-600">Entity setup and optimization</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <div>
                      <p class="font-semibold text-gray-900">Growth Coaching</p>
                      <p class="text-sm text-gray-600">Scale your business effectively</p>
                    </div>
                  </li>
                </ul>

                <div class="bg-gray-50 rounded-2xl p-6 mb-6">
                  <p class="text-sm text-gray-700 mb-4">
                    <i class="fas fa-info-circle text-gray-600 mr-2"></i>
                    <strong>Perfect for:</strong> Entrepreneurs seeking personalized guidance, business credit coaching, or funding strategy consultation.
                  </p>
                </div>

                <a 
                  href="https://calendly.com/mrmogulmaker-44" 
                  target="_blank"
                  class="block w-full bg-black text-yellow-400 text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition transform hover:scale-105"
                >
                  <i class="fas fa-calendar-alt mr-2"></i>
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div class="mt-12 text-center max-w-3xl mx-auto">
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <p class="text-gray-700">
                <i class="fas fa-question-circle text-yellow-400 mr-2"></i>
                <strong>Not sure which option is right for you?</strong> Book a strategy session first, and we can discuss speaking opportunities during our call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book Antonio */}
      <section class="bg-gradient-to-br from-black to-gray-900 py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Book <span class="text-yellow-400">Antonio Cook?</span>
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center text-white">
              <div class="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-trophy text-black text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Proven Results</h3>
              <p class="text-gray-300">Helped 500+ entrepreneurs build business credit and secure over $10M in funding</p>
            </div>
            <div class="text-center text-white">
              <div class="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-fire text-black text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Engaging Style</h3>
              <p class="text-gray-300">Dynamic presentations that combine real-world experience with actionable strategies</p>
            </div>
            <div class="text-center text-white">
              <div class="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-lightbulb text-black text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Actionable Content</h3>
              <p class="text-gray-300">Audiences leave with specific steps they can implement immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-black text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-16 w-16" />
                <h3 class="text-2xl font-bold text-yellow-400">Mr. Mogul Maker</h3>
              </div>
              <p class="text-gray-400 mb-4">
                Empowering entrepreneurs with financial literacy, business credit strategies, and wealth-building education.
              </p>
              <div class="flex gap-4">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/mrmogulmaker/" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/mrmogulmakerceo" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 class="font-bold text-lg mb-4">Quick Links</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/" class="hover:text-yellow-400 transition">Home</a></li>
                <li><a href="/shop" class="hover:text-yellow-400 transition">Shop</a></li>
                <li><a href="/speaking" class="hover:text-yellow-400 transition">Speaking</a></li>
                <li><a href="/blog" class="hover:text-yellow-400 transition">Blog</a></li>
                <li><a href="/#programs" class="hover:text-yellow-400 transition">Programs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold text-lg mb-4">Contact</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/speaking" class="hover:text-yellow-400 transition">Book Me to Speak</a></li>
                <li><a href="mailto:mrmogulmaker@gmail.com" class="hover:text-yellow-400 transition">Email Us</a></li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mr. Mogul Maker | Antonio Cook. All rights reserved.</p>
            <p class="mt-2 text-yellow-400 font-semibold">Money Follows Management™</p>
          </div>
        </div>
      </footer>

      {/* JavaScript for mobile menu */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const mobileMenuBtn = document.getElementById('mobile-menu-btn-speaking');
          const mobileMenu = document.getElementById('mobile-menu-speaking');
          
          if (!mobileMenuBtn || !mobileMenu) {
            return;
          }
          
          const mobileMenuIcon = mobileMenuBtn.querySelector('i');
          
          function openMobileMenu() {
            mobileMenu.classList.remove('hidden');
            if (mobileMenuIcon) {
              mobileMenuIcon.classList.remove('fa-bars');
              mobileMenuIcon.classList.add('fa-times');
            }
            document.body.style.overflow = 'hidden';
          }
          
          function closeMobileMenu() {
            mobileMenu.classList.add('hidden');
            if (mobileMenuIcon) {
              mobileMenuIcon.classList.remove('fa-times');
              mobileMenuIcon.classList.add('fa-bars');
            }
            document.body.style.overflow = '';
          }
          
          // Button click handler
          mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
              openMobileMenu();
            } else {
              closeMobileMenu();
            }
          });
          
          // Close mobile menu when clicking links
          mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
          });
          
          // Close mobile menu when clicking outside
          mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
              closeMobileMenu();
            }
          });
          
          // Close mobile menu on escape key
          document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
              closeMobileMenu();
            }
          });

          // Freedom Writers Carousel
          const carousel = document.querySelector('.freedom-writers-carousel');
          if (carousel) {
            const slides = carousel.querySelectorAll('.carousel-slide');
            const prevBtn = carousel.querySelector('.carousel-prev');
            const nextBtn = carousel.querySelector('.carousel-next');
            const indicators = carousel.querySelectorAll('.carousel-indicator');
            let currentSlide = 0;
            let autoplayInterval;

            function showSlide(index) {
              // Remove active class from all slides and indicators
              slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.opacity = '0';
              });
              indicators.forEach(indicator => {
                indicator.classList.remove('active');
                indicator.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              });

              // Add active class to current slide and indicator
              slides[index].classList.add('active');
              slides[index].style.opacity = '1';
              indicators[index].classList.add('active');
              indicators[index].style.backgroundColor = '#FBBF24';
              
              currentSlide = index;
            }

            function nextSlide() {
              const next = (currentSlide + 1) % slides.length;
              showSlide(next);
            }

            function prevSlide() {
              const prev = (currentSlide - 1 + slides.length) % slides.length;
              showSlide(prev);
            }

            // Event listeners
            if (nextBtn) nextBtn.addEventListener('click', nextSlide);
            if (prevBtn) prevBtn.addEventListener('click', prevSlide);

            // Indicator clicks
            indicators.forEach((indicator, index) => {
              indicator.addEventListener('click', () => showSlide(index));
            });

            // Auto-play carousel
            function startAutoplay() {
              autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
            }

            function stopAutoplay() {
              if (autoplayInterval) {
                clearInterval(autoplayInterval);
              }
            }

            // Start autoplay
            startAutoplay();

            // Pause on hover
            carousel.addEventListener('mouseenter', stopAutoplay);
            carousel.addEventListener('mouseleave', startAutoplay);

            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
              if (e.key === 'ArrowLeft') prevSlide();
              if (e.key === 'ArrowRight') nextSlide();
            });

            // Initialize first slide
            showSlide(0);
          }
        });
      `}} />
    </div>,
    {
      title: 'Book Antonio Cook for Speaking Engagements | Capital Raising & Investor Education Speaker',
      description: 'Hire Antonio Cook (Mr. Mogul Maker) for corporate events, conferences, and workshops. Expert keynote speaker on capital raising, investor education, funding strategies, and wealth building.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://mrmogulmaker.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Speaking',
                item: 'https://mrmogulmaker.com/speaking'
              }
            ]
          },
          {
            '@type': 'Service',
            serviceType: 'Professional Speaking & Keynote Services',
        name: 'Antonio Cook Speaking Engagements',
        description: 'Professional keynote speaking services for corporate events, conferences, and workshops on capital raising, investor education, and funding strategies',
        provider: {
          '@type': 'Person',
          name: 'Antonio Cook',
          alternateName: 'Mr. Mogul Maker',
          image: 'https://mrmogulmaker.com/antonio-cook-professional.jpg',
          url: 'https://mrmogulmaker.com',
          jobTitle: 'Business Credit Expert & Keynote Speaker'
        },
        areaServed: 'Worldwide',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://calendly.com/coachcook',
          name: 'Calendly Booking'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Speaking Topics',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Business Credit Mastery',
                description: 'Learn the secrets of building powerful business credit and accessing capital'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'The 3M Framework',
                description: 'Make, Manage, Multiply - The complete wealth-building system'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Entrepreneurial Mindset',
                description: 'Developing the mental framework for success in business and life'
              }
            }
          ]
        }
          }
        ]
      }
    }
  )
})

// Blog Page Route
app.get('/blog', (c) => {
  return c.render(
    <div style="font-family: 'Poppins', sans-serif;">
      {/* Navigation */}
      <nav class="fixed w-full bg-black/95 backdrop-blur-sm z-50 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <a href="/" class="flex items-center gap-3 group">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-12 w-12 transition-transform group-hover:scale-110" />
                <span class="text-2xl font-bold">
                  <span class="text-white">Mr.</span> <span class="text-yellow-400">Mogul Maker</span>
                </span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="text-white hover:text-yellow-400 transition">Home</a>
              <a href="/speaking" class="text-white hover:text-yellow-400 transition">Speaking</a>
              <a href="/blog" class="text-yellow-400 font-semibold">Blog</a>
              <a href="/#programs" class="text-white hover:text-yellow-400 transition">Programs</a>
              <a href="/shop" class="text-white hover:text-yellow-400 transition">
                <i class="fas fa-shopping-bag mr-2"></i>Shop
              </a>
            </div>
            <button id="mobile-menu-btn-blog" class="md:hidden text-white z-[70] relative">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu-blog" class="hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 pt-20">
        <div class="flex flex-col items-center justify-center space-y-8 mt-12 h-full pb-32">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/speaking" class="text-white text-2xl hover:text-yellow-400 transition">Speaking</a>
          <a href="/blog" class="text-yellow-400 text-2xl font-semibold">Blog</a>
          <a href="/#programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
          <a href="/shop" class="text-white text-2xl hover:text-yellow-400 transition">
            <i class="fas fa-shopping-bag mr-2"></i>Shop
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-16">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmRiNGQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJoNGMxLjEgMCAyIC45IDIgMnY0YzAgMS4xLS45IDItMiAyaC00Yy0xLjEgMC0yLS45LTItMnYtNHptMCAxOGMwLTEuMS45LTIgMi0yaDRjMS4xIDAgMiAuOSAyIDJ2NGMwIDEuMS0uOSAyLTIgMmgtNGMtMS4xIDAtMi0uOS0yLTJ2LTR6bTE4IDBjMC0xLjEuOS0yIDItMmg0YzEuMSAwIDIgLjkgMiAydjRjMCAxLjEtLjkgMi0yIDJoLTRjLTEuMSAwLTItLjktMi0ydi00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div class="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-full mb-6">
            <i class="fas fa-book-open mr-2"></i>
            Financial Literacy & Business Education
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
            <span class="text-yellow-400">Business Credit</span> & Funding Insights
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, strategies, and proven tactics for building business credit, securing funding, and multiplying your wealth.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl overflow-hidden shadow-2xl">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="p-12">
                <div class="inline-block bg-black/20 text-black px-4 py-2 rounded-full mb-4 font-semibold">
                  <i class="fas fa-star mr-2"></i>
                  Featured Article
                </div>
                <h2 class="text-4xl font-bold text-black mb-4">
                  How to Build Business Credit in 90 Days (Complete Guide)
                </h2>
                <p class="text-gray-900 mb-6 text-lg font-semibold">
                  The step-by-step blueprint that thousands of entrepreneurs have used to establish strong business credit profiles - even starting from scratch.
                </p>
                <div class="flex items-center gap-4 mb-6">
                  <div class="flex items-center gap-2 text-black">
                    <i class="fas fa-user-circle"></i>
                    <span class="font-semibold">Antonio Cook</span>
                  </div>
                  <div class="flex items-center gap-2 text-black">
                    <i class="fas fa-clock"></i>
                    <span>8 min read</span>
                  </div>
                </div>
                <a href="#" class="inline-block bg-black text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition">
                  Read Full Article <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
              <div class="h-full bg-gradient-to-br from-black to-gray-900 p-12 flex items-center justify-center">
                <i class="fas fa-chart-line text-yellow-400 text-9xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav class="bg-white py-4 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" class="text-gray-600 hover:text-yellow-400 transition">
                <i class="fas fa-home mr-1"></i>
                Home
              </a>
            </li>
            <li class="text-gray-400">
              <i class="fas fa-chevron-right text-xs"></i>
            </li>
            <li class="text-gray-900 font-semibold">
              Blog
            </li>
          </ol>
        </div>
      </nav>

      {/* Blog Articles Grid */}
      <section class="bg-gray-50 py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div class="flex gap-3">
              <button class="category-filter active bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition" data-category="all">All</button>
              <button class="category-filter bg-white text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition border-2 border-gray-200" data-category="credit">Credit</button>
              <button class="category-filter bg-white text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition border-2 border-gray-200" data-category="funding">Funding</button>
              <button class="category-filter bg-white text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition border-2 border-gray-200" data-category="business">Business</button>
            </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Blog Articles */}
            <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-gradient-to-br from-black to-gray-900 h-48 flex items-center justify-center">
                <i class="fas fa-credit-card text-yellow-400 text-6xl"></i>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                  <span class="bg-yellow-400/20 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">Credit</span>
                  <span class="text-gray-500 text-sm">5 min read</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-400 transition cursor-pointer">
                  Top 10 Net-30 Vendors to Build Business Credit Fast
                </h3>
                <p class="text-gray-600 mb-4">
                  Discover the best vendor accounts that report to business credit bureaus and can help you establish trade lines quickly.
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <i class="fas fa-calendar"></i>
                    <span>Jan 20, 2025</span>
                  </div>
                  <a href="#" class="text-yellow-400 font-semibold hover:underline">Read More →</a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 h-48 flex items-center justify-center">
                <i class="fas fa-money-bill-wave text-white text-6xl"></i>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Funding</span>
                  <span class="text-gray-500 text-sm">7 min read</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-400 transition cursor-pointer">
                  SBA Loans Explained: How to Qualify in 2025
                </h3>
                <p class="text-gray-600 mb-4">
                  Everything you need to know about Small Business Administration loans, requirements, and the application process.
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <i class="fas fa-calendar"></i>
                    <span>Jan 18, 2025</span>
                  </div>
                  <a href="#" class="text-yellow-400 font-semibold hover:underline">Read More →</a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-gradient-to-br from-black to-gray-900 h-48 flex items-center justify-center">
                <i class="fas fa-building text-yellow-400 text-6xl"></i>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                  <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">Business</span>
                  <span class="text-gray-500 text-sm">6 min read</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-400 transition cursor-pointer">
                  LLC vs S-Corp: Which Structure is Right for You?
                </h3>
                <p class="text-gray-600 mb-4">
                  Compare the pros and cons of different business structures and learn which one fits your goals and situation.
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <i class="fas fa-calendar"></i>
                    <span>Jan 15, 2025</span>
                  </div>
                  <a href="#" class="text-yellow-400 font-semibold hover:underline">Read More →</a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 h-48 flex items-center justify-center">
                <i class="fas fa-shield-alt text-white text-6xl"></i>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                  <span class="bg-yellow-400/20 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">Credit</span>
                  <span class="text-gray-500 text-sm">10 min read</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-400 transition cursor-pointer">
                  Credit Repair Mistakes That Cost You Thousands
                </h3>
                <p class="text-gray-600 mb-4">
                  Avoid these common credit repair mistakes that waste time and money. Learn what actually works from a pro.
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <i class="fas fa-calendar"></i>
                    <span>Jan 12, 2025</span>
                  </div>
                  <a href="#" class="text-yellow-400 font-semibold hover:underline">Read More →</a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-gradient-to-br from-black to-gray-900 h-48 flex items-center justify-center">
                <i class="fas fa-university text-yellow-400 text-6xl"></i>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Funding</span>
                  <span class="text-gray-500 text-sm">8 min read</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-400 transition cursor-pointer">
                  Alternative Funding: Beyond Traditional Bank Loans
                </h3>
                <p class="text-gray-600 mb-4">
                  Explore creative funding options including revenue-based financing, merchant cash advances, and crowdfunding.
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <i class="fas fa-calendar"></i>
                    <span>Jan 10, 2025</span>
                  </div>
                  <a href="#" class="text-yellow-400 font-semibold hover:underline">Read More →</a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 h-48 flex items-center justify-center">
                <i class="fas fa-chart-pie text-white text-6xl"></i>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                  <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">Business</span>
                  <span class="text-gray-500 text-sm">12 min read</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-400 transition cursor-pointer">
                  The 3M Framework: Make, Manage, Multiply Explained
                </h3>
                <p class="text-gray-600 mb-4">
                  Deep dive into the signature wealth-building framework. Learn how to systematically grow your financial empire.
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <i class="fas fa-calendar"></i>
                    <span>Jan 8, 2025</span>
                  </div>
                  <a href="#" class="text-yellow-400 font-semibold hover:underline">Read More →</a>
                </div>
              </div>
            </article>
          </div>

          {/* Load More Button */}
          <div class="text-center mt-12">
            <button class="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section class="bg-gradient-to-br from-black to-gray-900 py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-12">
            <i class="fas fa-envelope text-black text-6xl mb-6"></i>
            <h2 class="text-4xl font-bold text-black mb-4">
              Never Miss an Update
            </h2>
            <p class="text-lg text-gray-900 font-semibold mb-8">
              Get weekly insights on business credit, funding strategies, and wealth building delivered to your inbox.
            </p>
            <form class="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-6 py-4 rounded-full text-gray-900 font-semibold placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-black"
                required
              />
              <button
                type="submit"
                class="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            <p class="text-sm text-gray-800 mt-4">
              <i class="fas fa-lock mr-1"></i>
              Your email is safe with us. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-black text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-16 w-16" />
                <h3 class="text-2xl font-bold text-yellow-400">Mr. Mogul Maker</h3>
              </div>
              <p class="text-gray-400 mb-4">
                Empowering entrepreneurs with financial literacy, business credit strategies, and wealth-building education.
              </p>
              <div class="flex gap-4">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/mrmogulmaker/" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/mrmogulmakerceo" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 class="font-bold text-lg mb-4">Quick Links</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/" class="hover:text-yellow-400 transition">Home</a></li>
                <li><a href="/shop" class="hover:text-yellow-400 transition">Shop</a></li>
                <li><a href="/speaking" class="hover:text-yellow-400 transition">Speaking</a></li>
                <li><a href="/blog" class="hover:text-yellow-400 transition">Blog</a></li>
                <li><a href="/#programs" class="hover:text-yellow-400 transition">Programs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold text-lg mb-4">Categories</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/blog?category=credit" class="hover:text-yellow-400 transition">Business Credit</a></li>
                <li><a href="/blog?category=funding" class="hover:text-yellow-400 transition">Funding Strategies</a></li>
                <li><a href="/blog?category=business" class="hover:text-yellow-400 transition">Business Tips</a></li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mr. Mogul Maker | Antonio Cook. All rights reserved.</p>
            <p class="mt-2 text-yellow-400 font-semibold">Money Follows Management™</p>
          </div>
        </div>
      </footer>

      {/* JavaScript for mobile menu and filtering */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const mobileMenuBtn = document.getElementById('mobile-menu-btn-blog');
          const mobileMenu = document.getElementById('mobile-menu-blog');
          
          if (!mobileMenuBtn || !mobileMenu) {
            return;
          }
          
          const mobileMenuIcon = mobileMenuBtn.querySelector('i');
          
          function openMobileMenu() {
            mobileMenu.classList.remove('hidden');
            if (mobileMenuIcon) {
              mobileMenuIcon.classList.remove('fa-bars');
              mobileMenuIcon.classList.add('fa-times');
            }
            document.body.style.overflow = 'hidden';
          }
          
          function closeMobileMenu() {
            mobileMenu.classList.add('hidden');
            if (mobileMenuIcon) {
              mobileMenuIcon.classList.remove('fa-times');
              mobileMenuIcon.classList.add('fa-bars');
            }
            document.body.style.overflow = '';
          }
          
          // Button click handler
          mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
              openMobileMenu();
            } else {
              closeMobileMenu();
            }
          });
          
          // Close mobile menu when clicking links
          mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
          });
          
          // Close mobile menu when clicking outside
          mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
              closeMobileMenu();
            }
          });
          
          // Close mobile menu on escape key
          document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
              closeMobileMenu();
            }
          });
        });

        // Category filtering (placeholder - would filter actual articles)
        document.querySelectorAll('.category-filter').forEach(btn => {
          btn.addEventListener('click', function() {
            document.querySelectorAll('.category-filter').forEach(b => {
              b.classList.remove('active', 'bg-yellow-400', 'text-black');
              b.classList.add('bg-white', 'text-gray-700');
            });
            this.classList.add('active', 'bg-yellow-400', 'text-black');
            this.classList.remove('bg-white', 'text-gray-700');
          });
        });
      `}} />
    </div>,
    {
      title: 'Business Credit & Funding Blog | Expert Insights by Mr. Mogul Maker',
      description: 'Free business credit tips, funding strategies, and wealth-building advice from entrepreneur coach Antonio Cook. Learn how to build business credit and secure funding.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://mrmogulmaker.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://mrmogulmaker.com/blog'
              }
            ]
          },
          {
            '@type': 'Blog',
            name: 'Mr. Mogul Maker Blog',
        description: 'Business credit tips, funding strategies, and wealth-building insights from entrepreneur coach Antonio Cook',
        url: 'https://mrmogulmaker.com/blog',
        author: {
          '@type': 'Person',
          name: 'Antonio Cook',
          alternateName: 'Mr. Mogul Maker',
          url: 'https://mrmogulmaker.com',
          image: 'https://mrmogulmaker.com/antonio-cook-professional.jpg'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Mr. Mogul Maker',
          logo: {
            '@type': 'ImageObject',
            url: 'https://mrmogulmaker.com/mr-mogul-maker-logo.png'
          }
        },
        blogPost: [
          {
            '@type': 'BlogPosting',
            headline: '10 Steps to Building Business Credit Fast',
            description: 'Learn the fastest and most effective way to build business credit from scratch.',
            author: {
              '@type': 'Person',
              name: 'Antonio Cook'
            },
            datePublished: '2025-01-15',
            url: 'https://mrmogulmaker.com/blog#building-business-credit'
          },
          {
            '@type': 'BlogPosting',
            headline: 'How to Get $250K in Business Funding Without Personal Credit',
            description: 'Discover funding strategies that don\'t require personal credit checks.',
            author: {
              '@type': 'Person',
              name: 'Antonio Cook'
            },
            datePublished: '2025-01-10',
            url: 'https://mrmogulmaker.com/blog#business-funding'
          },
          {
            '@type': 'BlogPosting',
            headline: 'The 3M Framework Explained: Make, Manage, Multiply',
            description: 'A deep dive into the wealth-building framework that transforms entrepreneurs.',
            author: {
              '@type': 'Person',
              name: 'Antonio Cook'
            },
            datePublished: '2025-01-05',
            url: 'https://mrmogulmaker.com/blog#3m-framework'
          }
        ]
          }
        ]
      }
    }
  )
})

// AI Coach Page Route
app.get('/ai-coach', (c) => {
  return c.render(
    <div style="font-family: 'Poppins', sans-serif;">
      {/* Navigation */}
      <nav class="fixed w-full bg-black/95 backdrop-blur-sm z-50 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <a href="/" class="flex items-center gap-3 group">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-12 w-12 transition-transform group-hover:scale-110" />
                <span class="text-2xl font-bold">
                  <span class="text-white">Mr.</span> <span class="text-yellow-400">Mogul Maker</span>
                </span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="text-white hover:text-yellow-400 transition">Home</a>
              <a href="/speaking" class="text-white hover:text-yellow-400 transition">Speaking</a>
              <a href="/blog" class="text-white hover:text-yellow-400 transition">Blog</a>
              <a href="/#programs" class="text-white hover:text-yellow-400 transition">Programs</a>
              <a href="/ai-coach" class="text-yellow-400 font-semibold">AI Coach</a>
              <a href="/shop" class="text-white hover:text-yellow-400 transition">
                <i class="fas fa-shopping-bag mr-2"></i>Shop
              </a>
            </div>
            <button id="mobile-menu-btn-aicoach" class="md:hidden text-white z-[70] relative">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu-aicoach" class="hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 pt-20">
        <div class="flex flex-col items-center justify-center space-y-8 mt-12 h-full pb-32">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/speaking" class="text-white text-2xl hover:text-yellow-400 transition">Speaking</a>
          <a href="/blog" class="text-white text-2xl hover:text-yellow-400 transition">Blog</a>
          <a href="/#programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
          <a href="/ai-coach" class="text-yellow-400 text-2xl font-semibold">AI Coach</a>
          <a href="/shop" class="text-white text-2xl hover:text-yellow-400 transition">
            <i class="fas fa-shopping-bag mr-2"></i>Shop
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-20 overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmRiNGQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJoNGMxLjEgMCAyIC45IDIgMnY0YzAgMS4xLS45IDItMiAyaC00Yy0xLjEgMC0yLS45LTItMnYtNHptMCAxOGMwLTEuMS45LTIgMi0yaDRjMS4xIDAgMiAuOSAyIDJ2NGMwIDEuMS0uOSAyLTIgMmgtNGMtMS4xIDAtMi0uOS0yLTJ2LTR6bTE4IDBjMC0xLjEuOS0yIDItMmg0YzEuMSAwIDIgLjkgMiAydjRjMCAxLjEtLjkgMi0yIDJoLTRjLTEuMSAwLTItLjktMi0ydi00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div class="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-full mb-6 animate-pulse">
            <i class="fas fa-robot mr-2"></i>
            POWERED BY PAIGE AI
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Your Personal <span class="text-yellow-400">AI Business Coaches</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Get 24/7 access to 8 specialized AI coaches trained on the complete <a href="https://mogulmakeracademy.com" target="_blank" class="text-yellow-400 hover:underline font-semibold">Mogul Maker Academy</a> curriculum. 
            From business structure to acquisition strategy, your AI coach team is always ready to help.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#waitlist" class="bg-yellow-400 text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105 inline-flex items-center justify-center gap-2">
              <i class="fas fa-bell"></i>
              Join the Waitlist
            </a>
            <a href="#coaches" class="border-2 border-yellow-400 text-yellow-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition inline-flex items-center justify-center gap-2">
              <i class="fas fa-users"></i>
              Meet Your Coaches
            </a>
          </div>

          {/* Stats */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">8</div>
              <div class="text-gray-400 text-sm">AI Coaches</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div class="text-gray-400 text-sm">Availability</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">∞</div>
              <div class="text-gray-400 text-sm">Questions</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">$47</div>
              <div class="text-gray-400 text-sm">Per Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section id="coaches" class="bg-white py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Your <span class="text-yellow-400">AI Coach Team</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Each coach is specialized in one of the 8 core pillars from <a href="https://mogulmakeracademy.com" target="_blank" class="text-yellow-400 hover:underline font-semibold">Mogul Maker Academy</a>
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* BUILD Coach */}
            <div class="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition transform hover:scale-105">
              <div class="absolute top-0 right-0 text-yellow-400/10 text-9xl font-bold">01</div>
              <div class="relative z-10">
                <div class="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-hammer text-black text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-3">BUILD Coach</h3>
                <p class="text-gray-400 text-sm mb-4">Foundation & Structure</p>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Entity formation (LLC, Corp)</li>
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>EIN & business accounts</li>
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Business plan development</li>
                </ul>
                <div class="mt-6 pt-6 border-t border-gray-700">
                  <span class="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* LAUNCH Coach */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-black relative overflow-hidden group hover:shadow-2xl transition transform hover:scale-105">
              <div class="absolute top-0 right-0 text-black/10 text-9xl font-bold">02</div>
              <div class="relative z-10">
                <div class="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-rocket text-yellow-400 text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-3">LAUNCH Coach</h3>
                <p class="text-black/70 text-sm mb-4 font-semibold">Market Entry Strategy</p>
                <ul class="space-y-2 text-sm">
                  <li><i class="fas fa-check mr-2"></i>Go-to-market strategy</li>
                  <li><i class="fas fa-check mr-2"></i>Product launch planning</li>
                  <li><i class="fas fa-check mr-2"></i>Customer acquisition</li>
                </ul>
                <div class="mt-6 pt-6 border-t border-black/20">
                  <span class="inline-block bg-black/20 px-3 py-1 rounded-full text-xs font-semibold">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* FUND Coach */}
            <div class="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition transform hover:scale-105">
              <div class="absolute top-0 right-0 text-yellow-400/10 text-9xl font-bold">03</div>
              <div class="relative z-10">
                <div class="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-dollar-sign text-black text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-3">FUND Coach</h3>
                <p class="text-gray-400 text-sm mb-4">Capital & Financing</p>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Business credit building</li>
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Funding source ID</li>
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Application prep</li>
                </ul>
                <div class="mt-6 pt-6 border-t border-gray-700">
                  <span class="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* DRIVE Coach */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-black relative overflow-hidden group hover:shadow-2xl transition transform hover:scale-105">
              <div class="absolute top-0 right-0 text-black/10 text-9xl font-bold">04</div>
              <div class="relative z-10">
                <div class="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-car text-yellow-400 text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-3">DRIVE Coach</h3>
                <p class="text-black/70 text-sm mb-4 font-semibold">Growth & Momentum</p>
                <ul class="space-y-2 text-sm">
                  <li><i class="fas fa-check mr-2"></i>Sales systems</li>
                  <li><i class="fas fa-check mr-2"></i>Marketing automation</li>
                  <li><i class="fas fa-check mr-2"></i>Revenue acceleration</li>
                </ul>
                <div class="mt-6 pt-6 border-t border-black/20">
                  <span class="inline-block bg-black/20 px-3 py-1 rounded-full text-xs font-semibold">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* ACCEL Coach */}
            <div class="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition transform hover:scale-105">
              <div class="absolute top-0 right-0 text-yellow-400/10 text-9xl font-bold">05</div>
              <div class="relative z-10">
                <div class="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-chart-line text-black text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-3">ACCEL Coach</h3>
                <p class="text-gray-400 text-sm mb-4">Scale & Expansion</p>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Team building</li>
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Systems automation</li>
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Multi-location strategy</li>
                </ul>
                <div class="mt-6 pt-6 border-t border-gray-700">
                  <span class="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* REPORT Coach */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-black relative overflow-hidden group hover:shadow-2xl transition transform hover:scale-105">
              <div class="absolute top-0 right-0 text-black/10 text-9xl font-bold">06</div>
              <div class="relative z-10">
                <div class="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-file-alt text-yellow-400 text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-3">REPORT Coach</h3>
                <p class="text-black/70 text-sm mb-4 font-semibold">Credit Reporting</p>
                <ul class="space-y-2 text-sm">
                  <li><i class="fas fa-check mr-2"></i>Score optimization</li>
                  <li><i class="fas fa-check mr-2"></i>Vendor credit setup</li>
                  <li><i class="fas fa-check mr-2"></i>Agency navigation</li>
                </ul>
                <div class="mt-6 pt-6 border-t border-black/20">
                  <span class="inline-block bg-black/20 px-3 py-1 rounded-full text-xs font-semibold">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* SHIELD Coach */}
            <div class="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition transform hover:scale-105">
              <div class="absolute top-0 right-0 text-yellow-400/10 text-9xl font-bold">07</div>
              <div class="relative z-10">
                <div class="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-shield-alt text-black text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-3">SHIELD Coach</h3>
                <p class="text-gray-400 text-sm mb-4">Asset Protection</p>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Legal structure optimization</li>
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Risk management</li>
                  <li><i class="fas fa-check text-yellow-400 mr-2"></i>Insurance strategies</li>
                </ul>
                <div class="mt-6 pt-6 border-t border-gray-700">
                  <span class="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* ACQUIRE Coach */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-black relative overflow-hidden group hover:shadow-2xl transition transform hover:scale-105">
              <div class="absolute top-0 right-0 text-black/10 text-9xl font-bold">08</div>
              <div class="relative z-10">
                <div class="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-handshake text-yellow-400 text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-3">ACQUIRE Coach</h3>
                <p class="text-black/70 text-sm mb-4 font-semibold">Business Acquisition</p>
                <ul class="space-y-2 text-sm">
                  <li><i class="fas fa-check mr-2"></i>Due diligence</li>
                  <li><i class="fas fa-check mr-2"></i>Valuation methods</li>
                  <li><i class="fas fa-check mr-2"></i>Integration planning</li>
                </ul>
                <div class="mt-6 pt-6 border-t border-black/20">
                  <span class="inline-block bg-black/20 px-3 py-1 rounded-full text-xs font-semibold">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Academy CTA */}
          <div class="mt-16 text-center bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12">
            <h3 class="text-3xl font-bold text-white mb-4">
              Want the Full <span class="text-yellow-400">Academy Experience?</span>
            </h3>
            <p class="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              These AI coaches are trained on content from Mogul Maker Academy. 
              Get access to the complete curriculum, live coaching, and community.
            </p>
            <a href="https://mogulmakeracademy.com" target="_blank" class="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
              <i class="fas fa-graduation-cap mr-2"></i>
              Visit Mogul Maker Academy
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple <span class="text-yellow-400">Pricing</span>
            </h2>
            <p class="text-xl text-gray-600">
              Get access to all 8 AI coaches for one low monthly price
            </p>
          </div>

          <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <div class="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 hover:border-yellow-400 transition">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Monthly Access</h3>
                <div class="mb-6">
                  <span class="text-5xl font-bold text-gray-900">$47</span>
                  <span class="text-gray-600">/month</span>
                </div>
                <ul class="space-y-4 text-left mb-8">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <span class="text-gray-700">Access to all 8 AI coaches</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <span class="text-gray-700">Unlimited questions</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <span class="text-gray-700">24/7 availability</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <span class="text-gray-700">Chat history saved</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                    <span class="text-gray-700">Cancel anytime</span>
                  </li>
                </ul>
                <button class="w-full bg-gray-300 text-gray-600 px-8 py-4 rounded-full font-bold text-lg cursor-not-allowed">
                  <i class="fas fa-lock mr-2"></i>
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Annual Plan */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-10 shadow-2xl border-4 border-yellow-500 relative transform scale-105">
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-yellow-400 px-6 py-2 rounded-full text-sm font-bold">
                BEST VALUE - SAVE $94
              </div>
              <div class="text-center">
                <h3 class="text-2xl font-bold text-black mb-2">Annual Access</h3>
                <div class="mb-6">
                  <span class="text-5xl font-bold text-black">$470</span>
                  <span class="text-black/70">/year</span>
                  <div class="text-sm text-black/70 mt-2">Just $39/month</div>
                </div>
                <ul class="space-y-4 text-left mb-8">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-black text-xl mt-1"></i>
                    <span class="text-black font-semibold">Everything in Monthly, plus:</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-star text-black text-xl mt-1"></i>
                    <span class="text-black">Save 2 months ($94/year)</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-star text-black text-xl mt-1"></i>
                    <span class="text-black">Priority support</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-star text-black text-xl mt-1"></i>
                    <span class="text-black">Early access to new features</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-star text-black text-xl mt-1"></i>
                    <span class="text-black">Exclusive resources</span>
                  </li>
                </ul>
                <button class="w-full bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition cursor-not-allowed">
                  <i class="fas fa-lock mr-2"></i>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" class="bg-gradient-to-br from-black via-gray-900 to-black py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Be First to <span class="text-yellow-400">Access</span>
          </h2>
          <p class="text-xl text-gray-300 mb-12">
            Join the waitlist and get notified when AI coaches launch. 
            <strong class="text-yellow-400">Early birds get 50% off first month!</strong>
          </p>

          {/* GHL Waitlist Form Embed */}
          <div class="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div style="min-height: 738px;">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/xIZi4NsdZtwX8YAPfp6Z"
                style="width:100%;height:738px;border:none;border-radius:12px"
                id="inline-xIZi4NsdZtwX8YAPfp6Z" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Mogul Maker AI Coaching Waiting List Form"
                data-height="738"
                data-layout-iframe-id="inline-xIZi4NsdZtwX8YAPfp6Z"
                data-form-id="xIZi4NsdZtwX8YAPfp6Z"
                title="Mogul Maker AI Coaching Waiting List Form"
              ></iframe>
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>

            <p class="text-gray-500 text-sm mt-6 text-center">
              🎉 <strong>Early Bird Bonus:</strong> First 100 members get 50% off their first month ($23.50 instead of $47)
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="bg-white py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span class="text-yellow-400">Questions</span>
            </h2>
          </div>

          <div class="space-y-6">
            <details class="bg-gray-50 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition">
              <summary class="font-bold text-lg text-gray-900 flex justify-between items-center">
                What is an AI Coach?
                <i class="fas fa-chevron-down text-yellow-400"></i>
              </summary>
              <p class="text-gray-600 mt-4 leading-relaxed">
                An AI Coach is a specialized chatbot trained on the complete Mogul Maker Academy curriculum. 
                It can answer your questions, provide guidance, and help you implement strategies 24/7.
              </p>
            </details>

            <details class="bg-gray-50 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition">
              <summary class="font-bold text-lg text-gray-900 flex justify-between items-center">
                How is this different from ChatGPT?
                <i class="fas fa-chevron-down text-yellow-400"></i>
              </summary>
              <p class="text-gray-600 mt-4 leading-relaxed">
                These AI coaches are specifically trained on Antonio Cook's methodologies, frameworks, 
                and the complete Mogul Maker Academy content. They provide personalized guidance based 
                on proven systems, not generic AI responses.
              </p>
            </details>

            <details class="bg-gray-50 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition">
              <summary class="font-bold text-lg text-gray-900 flex justify-between items-center">
                Do I need to be in Mogul Maker Academy?
                <i class="fas fa-chevron-down text-yellow-400"></i>
              </summary>
              <p class="text-gray-600 mt-4 leading-relaxed">
                No! AI coaches are available as a standalone product. However, combining them with 
                Mogul Maker Academy gives you the complete experience: live coaching, community, 
                and AI support.
              </p>
            </details>

            <details class="bg-gray-50 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition">
              <summary class="font-bold text-lg text-gray-900 flex justify-between items-center">
                Can I cancel anytime?
                <i class="fas fa-chevron-down text-yellow-400"></i>
              </summary>
              <p class="text-gray-600 mt-4 leading-relaxed">
                Yes! There are no long-term contracts. Cancel your monthly subscription anytime. 
                Annual plans are prepaid but still offer significant savings.
              </p>
            </details>

            <details class="bg-gray-50 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition">
              <summary class="font-bold text-lg text-gray-900 flex justify-between items-center">
                When will this launch?
                <i class="fas fa-chevron-down text-yellow-400"></i>
              </summary>
              <p class="text-gray-600 mt-4 leading-relaxed">
                We're targeting Q2 2025 for the initial launch with 3 coaches (BUILD, FUND, REPORT). 
                All 8 coaches will be available by Q3 2025. Join the waitlist to be notified!
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-black text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-16 w-16" />
                <h3 class="text-2xl font-bold text-yellow-400">Mr. Mogul Maker</h3>
              </div>
              <p class="text-gray-400 mb-4">
                Empowering entrepreneurs with AI-powered coaching, financial literacy, 
                and wealth-building education.
              </p>
              <div class="flex gap-4">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/mrmogulmaker/" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/mrmogulmakerceo" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 class="font-bold text-lg mb-4">Quick Links</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/" class="hover:text-yellow-400 transition">Home</a></li>
                <li><a href="/speaking" class="hover:text-yellow-400 transition">Speaking</a></li>
                <li><a href="/blog" class="hover:text-yellow-400 transition">Blog</a></li>
                <li><a href="/#programs" class="hover:text-yellow-400 transition">Programs</a></li>
                <li><a href="/ai-coach" class="hover:text-yellow-400 transition">AI Coach</a></li>
                <li><a href="/shop" class="hover:text-yellow-400 transition">Shop</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold text-lg mb-4">Academy</h4>
              <ul class="space-y-2 text-gray-400">
                <li>
                  <a href="https://mogulmakeracademy.com" target="_blank" class="hover:text-yellow-400 transition">
                    Mogul Maker Academy
                  </a>
                </li>
                <li><a href="#waitlist" class="hover:text-yellow-400 transition">Join AI Coach Waitlist</a></li>
                <li><a href="/speaking#booking" class="hover:text-yellow-400 transition">Book a Session</a></li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mr. Mogul Maker | Antonio Cook. All rights reserved.</p>
            <p class="mt-2 text-yellow-400 font-semibold">Money Follows Management™</p>
            <p class="mt-2 text-sm">Powered by Paige AI</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu JavaScript */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const mobileMenuBtn = document.getElementById('mobile-menu-btn-aicoach');
          const mobileMenu = document.getElementById('mobile-menu-aicoach');
          
          if (!mobileMenuBtn || !mobileMenu) {
            return;
          }
          
          const mobileMenuIcon = mobileMenuBtn.querySelector('i');
          
          function openMobileMenu() {
            mobileMenu.classList.remove('hidden');
            if (mobileMenuIcon) {
              mobileMenuIcon.classList.remove('fa-bars');
              mobileMenuIcon.classList.add('fa-times');
            }
            document.body.style.overflow = 'hidden';
          }
          
          function closeMobileMenu() {
            mobileMenu.classList.add('hidden');
            if (mobileMenuIcon) {
              mobileMenuIcon.classList.remove('fa-times');
              mobileMenuIcon.classList.add('fa-bars');
            }
            document.body.style.overflow = '';
          }
          
          // Button click handler
          mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
              openMobileMenu();
            } else {
              closeMobileMenu();
            }
          });
          
          // Close mobile menu when clicking links
          mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
          });
          
          // Close mobile menu when clicking outside
          mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
              closeMobileMenu();
            }
          });
          
          // Close mobile menu on escape key
          document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
              closeMobileMenu();
            }
          });
        });
      `}} />
    </div>,
    {
      title: 'AI Business Coaches - 24/7 Expert Guidance | Mr. Mogul Maker',
      description: 'Get instant access to 8 specialized AI coaches trained on Mogul Maker Academy curriculum. From business structure to acquisition strategy, your AI coach team is always ready to help.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'AI Business Coaches by Mr. Mogul Maker',
        description: '8 specialized AI coaches providing 24/7 business guidance',
        brand: {
          '@type': 'Brand',
          name: 'Mr. Mogul Maker'
        },
        offers: {
          '@type': 'Offer',
          price: '47.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/PreOrder'
        }
      }
    }
  )
})

// Product Landing Page - Capital Stacking Blueprint
app.get('/products/capital-stacking-blueprint', (c) => {
  return c.render(
    <div style="font-family: 'Poppins', sans-serif;">
      {/* Navigation */}
      <nav class="fixed w-full bg-black/95 backdrop-blur-sm z-[60] shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <a href="/" class="flex items-center gap-3 group">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-12 w-12 transition-transform group-hover:scale-110" />
                <span class="text-2xl font-bold">
                  <span class="text-white">Mr.</span> <span class="text-yellow-400">Mogul Maker</span>
                </span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="text-white hover:text-yellow-400 transition">Home</a>
              <a href="/shop" class="text-white hover:text-yellow-400 transition">Shop</a>
              <a href="/speaking" class="text-white hover:text-yellow-400 transition">Speaking</a>
              <a href="/blog" class="text-white hover:text-yellow-400 transition">Blog</a>
            </div>
            <button id="mobile-menu-btn-product" class="md:hidden text-white z-[70] relative">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu-product" class="hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 pt-20">
        <div class="flex flex-col items-center justify-center space-y-8 mt-12 h-full pb-32">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/shop" class="text-white text-2xl hover:text-yellow-400 transition">Shop</a>
          <a href="/speaking" class="text-white text-2xl hover:text-yellow-400 transition">Speaking</a>
          <a href="/blog" class="text-white text-2xl hover:text-yellow-400 transition">Blog</a>
        </div>
      </div>

      {/* Hero Section */}
      <section class="bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-12 md:pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-8">
            <div class="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full mb-4 text-sm md:text-base">
              <i class="fas fa-layer-group mr-2"></i>
              Digital Workbook
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Capital Stacking Blueprint Workbook
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-4">
              Map Your Path to $500K in Business Funding
            </p>
            <div class="flex items-center justify-center gap-4 text-yellow-400">
              <div class="flex items-center">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <span class="text-white">Printable Workbook</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section class="bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Inside This Workbook?
              </h2>
              <p class="text-lg text-gray-600 mb-8">
                This printable workbook is your step-by-step guide to mapping out a comprehensive $500K capital stack. 
                Derived from our proven FUND and ACQUIRE frameworks, this workbook breaks down funding into three strategic layers.
              </p>
              
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-user text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Personal PG Strategy</h3>
                    <p class="text-gray-600">
                      Leverage personal credit for business funding with strategic personal guarantee approaches.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-building text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Business EIN Funding Roadmap</h3>
                    <p class="text-gray-600">
                      Build true business credit with vendor accounts, tradelines, and business credit cards.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-mobile-alt text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Fintech Sources Breakdown</h3>
                    <p class="text-gray-600">
                      Discover modern fintech lending options and alternative funding sources for rapid capital access.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-black shadow-2xl mb-6">
                <h3 class="text-2xl font-bold mb-4">What You'll Get:</h3>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-black text-xl mt-1"></i>
                    <span class="font-semibold">Complete capital stacking workbook (printable PDF)</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-black text-xl mt-1"></i>
                    <span class="font-semibold">Personal PG strategy section with worksheets</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-black text-xl mt-1"></i>
                    <span class="font-semibold">Business EIN funding roadmap and tracking tools</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-black text-xl mt-1"></i>
                    <span class="font-semibold">Fintech sources breakdown and application guide</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-black text-xl mt-1"></i>
                    <span class="font-semibold">FUND framework integration materials</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check-circle text-black text-xl mt-1"></i>
                    <span class="font-semibold">ACQUIRE framework tools and templates</span>
                  </li>
                </ul>
              </div>

              <div class="bg-gray-100 rounded-2xl p-6">
                <h4 class="font-bold text-lg mb-4 text-gray-900">Perfect For:</h4>
                <ul class="space-y-2 text-gray-700">
                  <li><i class="fas fa-arrow-right text-yellow-400 mr-2"></i>Entrepreneurs seeking funding</li>
                  <li><i class="fas fa-arrow-right text-yellow-400 mr-2"></i>Business owners scaling operations</li>
                  <li><i class="fas fa-arrow-right text-yellow-400 mr-2"></i>Real estate investors</li>
                  <li><i class="fas fa-arrow-right text-yellow-400 mr-2"></i>Anyone building business credit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Form Section */}
      <section class="bg-gray-50 py-12 md:py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Workbook Now
            </h2>
            <p class="text-xl text-gray-600">
              Instant digital download • Printable PDF • Only $37
            </p>
          </div>

          {/* GHL Form Embed */}
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/YEwuGbyCUCiSX0qtEjKu"
              style="width:100%;height:2600px;border:none;"
              id="inline-YEwuGbyCUCiSX0qtEjKu" 
              data-layout={`{'id':'INLINE'}`}
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Capital Stacking Blueprint (Workbook)"
              data-height="2572"
              data-layout-iframe-id="inline-YEwuGbyCUCiSX0qtEjKu"
              data-form-id="YEwuGbyCUCiSX0qtEjKu"
              title="Capital Stacking Blueprint (Workbook)"
            ></iframe>
            <script src="https://link.msgsndr.com/js/form_embed.js"></script>
          </div>

          <div class="mt-8 text-center">
            <div class="flex items-center justify-center gap-6 text-gray-600">
              <div class="flex items-center gap-2">
                <i class="fas fa-lock text-green-600"></i>
                <span>Secure Checkout</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-download text-green-600"></i>
                <span>Instant Access</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-shield-alt text-green-600"></i>
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="bg-white py-12 md:py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div class="space-y-6">
            <div class="bg-gray-50 rounded-2xl p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <i class="fas fa-question-circle text-yellow-400 mr-2"></i>
                What format is the workbook?
              </h3>
              <p class="text-gray-600">
                The workbook is delivered as a printable PDF that you can download immediately after purchase. 
                You can print it out or use it digitally on your tablet or computer.
              </p>
            </div>

            <div class="bg-gray-50 rounded-2xl p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <i class="fas fa-question-circle text-yellow-400 mr-2"></i>
                Do I need to be in the FUND or ACQUIRE programs?
              </h3>
              <p class="text-gray-600">
                No! While this workbook is derived from those frameworks, it's designed to be used standalone. 
                However, if you want deeper training, check out our Mogul Maker Academy programs.
              </p>
            </div>

            <div class="bg-gray-50 rounded-2xl p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <i class="fas fa-question-circle text-yellow-400 mr-2"></i>
                How long does it take to complete?
              </h3>
              <p class="text-gray-600">
                Most entrepreneurs complete the workbook in 2-4 hours. You can work at your own pace and 
                return to it as you implement your capital stacking strategy.
              </p>
            </div>

            <div class="bg-gray-50 rounded-2xl p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <i class="fas fa-question-circle text-yellow-400 mr-2"></i>
                Is there a money-back guarantee?
              </h3>
              <p class="text-gray-600">
                Yes! If you're not satisfied with the workbook, contact us within 30 days for a full refund. 
                No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-black text-white py-8 md:py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="flex items-center justify-center gap-3 mb-4">
              <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-12 w-12" />
              <span class="text-2xl font-bold">
                <span class="text-white">Mr.</span> <span class="text-yellow-400">Mogul Maker</span>
              </span>
            </div>
            <p class="text-gray-400 mb-6">Money Follows Management™</p>
            <div class="flex justify-center gap-6 mb-6">
              <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="text-gray-400 hover:text-yellow-400 transition">
                <i class="fab fa-youtube text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/mrmogulmaker/" target="_blank" class="text-gray-400 hover:text-yellow-400 transition">
                <i class="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://www.facebook.com/mrmogulmakerceo" target="_blank" class="text-gray-400 hover:text-yellow-400 transition">
                <i class="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://www.tiktok.com/@mrmogulmaker" target="_blank" class="text-gray-400 hover:text-yellow-400 transition">
                <i class="fab fa-tiktok text-2xl"></i>
              </a>
            </div>
            <p class="text-gray-500 text-sm">
              © 2025 Mr. Mogul Maker | Antonio Cook. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Script */}
      <script dangerouslySetInnerHTML={{__html: `
        const mobileMenuBtnProduct = document.getElementById('mobile-menu-btn-product');
        const mobileMenuProduct = document.getElementById('mobile-menu-product');
        
        if (mobileMenuBtnProduct && mobileMenuProduct) {
          const mobileMenuIconProduct = mobileMenuBtnProduct.querySelector('i');
          
          mobileMenuBtnProduct.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const isHidden = mobileMenuProduct.classList.contains('hidden');
            if (isHidden) {
              mobileMenuProduct.classList.remove('hidden');
              if (mobileMenuIconProduct) {
                mobileMenuIconProduct.classList.remove('fa-bars');
                mobileMenuIconProduct.classList.add('fa-times');
              }
              document.body.style.overflow = 'hidden';
            } else {
              mobileMenuProduct.classList.add('hidden');
              if (mobileMenuIconProduct) {
                mobileMenuIconProduct.classList.remove('fa-times');
                mobileMenuIconProduct.classList.add('fa-bars');
              }
              document.body.style.overflow = '';
            }
          });
          
          document.querySelectorAll('#mobile-menu-product a').forEach(link => {
            link.addEventListener('click', function() {
              mobileMenuProduct.classList.add('hidden');
              if (mobileMenuIconProduct) {
                mobileMenuIconProduct.classList.remove('fa-times');
                mobileMenuIconProduct.classList.add('fa-bars');
              }
              document.body.style.overflow = '';
            });
          });
        }
      `}} />
    </div>,
    {
      title: 'Capital Stacking Blueprint Workbook - $37 | Mr. Mogul Maker',
      description: 'Printable workbook for mapping out a $500K capital stack across personal PG, business EIN, and fintech sources. Derived from FUND and ACQUIRE frameworks.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Capital Stacking Blueprint Workbook',
        description: 'Printable workbook for mapping out a $500K capital stack across personal PG, business EIN, and fintech sources.',
        image: 'https://www.mrmogulmaker.com/mr-mogul-maker-logo.png',
        brand: {
          '@type': 'Brand',
          name: 'Mr. Mogul Maker'
        },
        offers: {
          '@type': 'Offer',
          price: '37.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.mrmogulmaker.com/products/capital-stacking-blueprint'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '127'
        }
      }
    }
  )
})

// Programs Page - AI Coaches Focus
app.get('/programs', (c) => {
  return c.render(
    <div style="font-family: 'Poppins', sans-serif;">
      {/* Navigation */}
      <nav class="fixed w-full bg-black/95 backdrop-blur-sm z-[60] shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <a href="/" class="flex items-center gap-3 group">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-12 w-12 transition-transform group-hover:scale-110" />
                <span class="text-2xl font-bold">
                  <span class="text-white">Mr.</span> <span class="text-yellow-400">Mogul Maker</span>
                </span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="text-white hover:text-yellow-400 transition">Home</a>
              <a href="/speaking" class="text-white hover:text-yellow-400 transition">Speaking</a>
              <a href="/blog" class="text-white hover:text-yellow-400 transition">Blog</a>
              <a href="/programs" class="text-yellow-400 font-semibold">Programs</a>
              <a href="/shop" class="text-white hover:text-yellow-400 transition">
                <i class="fas fa-shopping-bag mr-2"></i>Shop
              </a>
            </div>
            <button id="mobile-menu-btn-programs" class="md:hidden text-white z-[70] relative">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu-programs" class="hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 pt-20">
        <div class="flex flex-col items-center justify-center space-y-8 mt-12 h-full pb-32">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/speaking" class="text-white text-2xl hover:text-yellow-400 transition">Speaking</a>
          <a href="/blog" class="text-white text-2xl hover:text-yellow-400 transition">Blog</a>
          <a href="/programs" class="text-yellow-400 text-2xl font-semibold">Programs</a>
          <a href="/shop" class="text-white text-2xl hover:text-yellow-400 transition">
            <i class="fas fa-shopping-bag mr-2"></i>Shop
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-20">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <div class="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-full mb-6 animate-pulse">
              <i class="fas fa-robot mr-2"></i>
              POWERED BY PAIGE AI
            </div>
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
              Your Personal <span class="text-yellow-400">AI Business Coaches</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Get instant, expert guidance from 8 specialized AI coaches trained on proven business frameworks by <span class="text-yellow-400 font-semibold">Antonio Cook (Mr. Mogul Maker)</span>
            </p>
            
            {/* Key Stats */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20">
                <div class="text-4xl font-bold text-yellow-400 mb-2">8</div>
                <div class="text-gray-400 text-sm">AI Coaches</div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20">
                <div class="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div class="text-gray-400 text-sm">Availability</div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20">
                <div class="text-4xl font-bold text-yellow-400 mb-2">∞</div>
                <div class="text-gray-400 text-sm">Questions</div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20">
                <div class="text-4xl font-bold text-yellow-400 mb-2">$47</div>
                <div class="text-gray-400 text-sm">Per Month</div>
              </div>
            </div>

            <a href="#coaches" class="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
              <i class="fas fa-arrow-down mr-2"></i>
              Explore AI Coaches
            </a>
          </div>
        </div>
      </section>

      {/* 8 AI Coaches Section */}
      <section id="coaches" class="bg-white py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Your <span class="text-yellow-400">AI Coach Team</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Each coach specializes in a critical aspect of business success, trained on real-world strategies that have helped thousands of entrepreneurs
            </p>
          </div>

          <div class="space-y-6">
            {/* BUILD Coach */}
            <div class="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white shadow-2xl hover:shadow-yellow-400/20 transition-all">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="bg-yellow-400 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-hammer text-black text-3xl"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <h3 class="text-3xl font-bold">BUILD Coach</h3>
                    <span class="bg-yellow-400/20 text-yellow-400 px-4 py-1 rounded-full text-sm font-semibold">COMING SOON</span>
                  </div>
                  <p class="text-gray-400 text-lg mb-4">Foundation & Structure Expert</p>
                  <p class="text-gray-300 mb-6">
                    Master the fundamentals of business formation, entity structure, EIN setup, and foundational compliance. 
                    Get step-by-step guidance on choosing the right business structure and building a solid legal foundation.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">LLC Formation</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Entity Setup</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Compliance</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Business Banking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LAUNCH Coach */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 md:p-12 text-black shadow-2xl hover:shadow-yellow-400/50 transition-all">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="bg-black w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-rocket text-yellow-400 text-3xl"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <h3 class="text-3xl font-bold">LAUNCH Coach</h3>
                    <span class="bg-black/20 text-black px-4 py-1 rounded-full text-sm font-semibold">COMING SOON</span>
                  </div>
                  <p class="text-gray-900 text-lg mb-4 font-semibold">Market Entry Strategy Specialist</p>
                  <p class="text-gray-900 mb-6">
                    Navigate your market entry with precision. Get help with business planning, go-to-market strategies, 
                    competitive analysis, and positioning your brand for maximum impact from day one.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Business Plans</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Market Research</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Brand Strategy</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Product Launch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FUND Coach */}
            <div class="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white shadow-2xl hover:shadow-yellow-400/20 transition-all">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="bg-yellow-400 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-dollar-sign text-black text-3xl"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <h3 class="text-3xl font-bold">FUND Coach</h3>
                    <span class="bg-yellow-400/20 text-yellow-400 px-4 py-1 rounded-full text-sm font-semibold">COMING SOON</span>
                  </div>
                  <p class="text-gray-400 text-lg mb-4">Capital & Financing Authority</p>
                  <p class="text-gray-300 mb-6">
                    Unlock funding opportunities from business credit cards to lines of credit. Learn proven strategies 
                    to secure capital without personal credit checks and build fundable business profiles.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Business Credit</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Funding Sources</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Credit Lines</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Investor Pitch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DRIVE Coach */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 md:p-12 text-black shadow-2xl hover:shadow-yellow-400/50 transition-all">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="bg-black w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-car text-yellow-400 text-3xl"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <h3 class="text-3xl font-bold">DRIVE Coach</h3>
                    <span class="bg-black/20 text-black px-4 py-1 rounded-full text-sm font-semibold">COMING SOON</span>
                  </div>
                  <p class="text-gray-900 text-lg mb-4 font-semibold">Growth & Momentum Catalyst</p>
                  <p class="text-gray-900 mb-6">
                    Accelerate your growth with marketing strategies, sales systems, customer acquisition tactics, 
                    and operational efficiency frameworks designed to create unstoppable business momentum.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Marketing</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Sales Systems</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Customer Growth</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Operations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ACCEL Coach */}
            <div class="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white shadow-2xl hover:shadow-yellow-400/20 transition-all">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="bg-yellow-400 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-chart-line text-black text-3xl"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <h3 class="text-3xl font-bold">ACCEL Coach</h3>
                    <span class="bg-yellow-400/20 text-yellow-400 px-4 py-1 rounded-full text-sm font-semibold">COMING SOON</span>
                  </div>
                  <p class="text-gray-400 text-lg mb-4">Scale & Expansion Strategist</p>
                  <p class="text-gray-300 mb-6">
                    Scale to new heights with expansion strategies, team building frameworks, systems automation, 
                    and multi-location growth tactics that turn small businesses into industry leaders.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Scaling Systems</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Team Building</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Automation</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Expansion</span>
                  </div>
                </div>
              </div>
            </div>

            {/* REPORT Coach */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 md:p-12 text-black shadow-2xl hover:shadow-yellow-400/50 transition-all">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="bg-black w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-file-alt text-yellow-400 text-3xl"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <h3 class="text-3xl font-bold">REPORT Coach</h3>
                    <span class="bg-black/20 text-black px-4 py-1 rounded-full text-sm font-semibold">COMING SOON</span>
                  </div>
                  <p class="text-gray-900 text-lg mb-4 font-semibold">Credit Reporting & Building Pro</p>
                  <p class="text-gray-900 mb-6">
                    Become a data furnisher and control your credit destiny. Learn how to report to bureaus, 
                    build business credit scores, and establish fundable credit profiles that unlock capital.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Data Furnisher</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Credit Bureaus</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Score Building</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Credit Monitoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SHIELD Coach */}
            <div class="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white shadow-2xl hover:shadow-yellow-400/20 transition-all">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="bg-yellow-400 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-shield-alt text-black text-3xl"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <h3 class="text-3xl font-bold">SHIELD Coach</h3>
                    <span class="bg-yellow-400/20 text-yellow-400 px-4 py-1 rounded-full text-sm font-semibold">COMING SOON</span>
                  </div>
                  <p class="text-gray-400 text-lg mb-4">Asset Protection & Legal Shield</p>
                  <p class="text-gray-300 mb-6">
                    Protect what you build with trusts, holding companies, insurance strategies, and legal structures 
                    that separate personal assets from business liabilities and create generational wealth protection.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Asset Protection</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Trusts</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Legal Structures</span>
                    <span class="bg-white/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Risk Management</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ACQUIRE Coach */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 md:p-12 text-black shadow-2xl hover:shadow-yellow-400/50 transition-all">
              <div class="flex flex-col md:flex-row gap-6 items-start">
                <div class="bg-black w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-handshake text-yellow-400 text-3xl"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <h3 class="text-3xl font-bold">ACQUIRE Coach</h3>
                    <span class="bg-black/20 text-black px-4 py-1 rounded-full text-sm font-semibold">COMING SOON</span>
                  </div>
                  <p class="text-gray-900 text-lg mb-4 font-semibold">Business Acquisition & M&A Expert</p>
                  <p class="text-gray-900 mb-6">
                    Master the art of acquiring existing businesses. Learn valuation, due diligence, negotiation tactics, 
                    and creative financing structures to build wealth through strategic acquisitions.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Business Valuation</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Due Diligence</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">Negotiations</span>
                    <span class="bg-black/10 text-black px-3 py-1 rounded-full text-sm font-semibold">M&A Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, <span class="text-yellow-400">Transparent Pricing</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlimited access to all 8 AI coaches for less than one hour of traditional consulting
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Monthly Plan */}
            <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Monthly</h3>
                <div class="mb-6">
                  <span class="text-5xl font-bold text-gray-900">$47</span>
                  <span class="text-gray-600">/month</span>
                </div>
                <ul class="text-left space-y-4 mb-8">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-yellow-400 mt-1"></i>
                    <span class="text-gray-700">Access to all 8 AI coaches</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-yellow-400 mt-1"></i>
                    <span class="text-gray-700">24/7 availability</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-yellow-400 mt-1"></i>
                    <span class="text-gray-700">Unlimited questions</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-yellow-400 mt-1"></i>
                    <span class="text-gray-700">Cancel anytime</span>
                  </li>
                </ul>
                <a href="#waitlist" class="block w-full bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
                  Join Waitlist
                </a>
              </div>
            </div>

            {/* Annual Plan - Best Value */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-400/50 transition-all border-4 border-yellow-500 relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-black text-yellow-400 px-6 py-2 rounded-full font-bold text-sm">BEST VALUE</span>
              </div>
              <div class="text-center">
                <h3 class="text-2xl font-bold text-black mb-2">Annual</h3>
                <div class="mb-6">
                  <span class="text-5xl font-bold text-black">$470</span>
                  <span class="text-gray-900">/year</span>
                  <div class="text-sm text-black/70 mt-2">Save $94 per year</div>
                </div>
                <ul class="text-left space-y-4 mb-8">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-black mt-1"></i>
                    <span class="text-black font-semibold">Everything in Monthly, plus:</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-black mt-1"></i>
                    <span class="text-black">2 months free ($94 savings)</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-black mt-1"></i>
                    <span class="text-black">Priority support</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-black mt-1"></i>
                    <span class="text-black">Early access to new coaches</span>
                  </li>
                </ul>
                <a href="#waitlist" class="block w-full bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition transform hover:scale-105">
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" class="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="inline-block bg-yellow-400/20 text-yellow-600 px-6 py-3 rounded-full mb-6 animate-pulse">
              <i class="fas fa-clock mr-2"></i>
              LAUNCHING SOON
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join the <span class="text-yellow-400">Waitlist</span>
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              Be the first to get access when our AI coaches launch. Early members get exclusive benefits!
            </p>
            <div class="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              <i class="fas fa-fire text-green-600"></i>
              <span>🎉 First 100 members get 50% off first month!</span>
            </div>
          </div>

          {/* GHL Waitlist Form Embed - Enhanced Container */}
          <div class="relative">
            {/* Gradient border effect */}
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl blur-xl opacity-20"></div>
            
            {/* Form container */}
            <div class="relative bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-gray-100">
              {/* Form header */}
              <div class="text-center mb-6">
                <div class="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-bold mb-4">
                  <i class="fas fa-bolt"></i>
                  <span>Reserve Your Spot Now</span>
                </div>
                <p class="text-gray-600 text-sm">
                  Fill out the form below to get early access notifications and exclusive launch pricing
                </p>
              </div>

              {/* GHL Form */}
              <div style="min-height: 738px;">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/xIZi4NsdZtwX8YAPfp6Z"
                  style="width:100%;height:738px;border:none;border-radius:8px"
                  id="inline-xIZi4NsdZtwX8YAPfp6Z" 
                  data-form-name="Mogul Maker AI Coaching Waiting List Form"
                  data-height="738"
                  title="Mogul Maker AI Coaching Waiting List Form"
                ></iframe>
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>
              </div>

              {/* Trust badges */}
              <div class="mt-6 pt-6 border-t border-gray-200">
                <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                  <div class="flex items-center gap-2">
                    <i class="fas fa-lock text-green-600"></i>
                    <span>100% Secure</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fas fa-envelope text-blue-600"></i>
                    <span>No Spam Ever</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fas fa-gift text-yellow-600"></i>
                    <span>Early Bird Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Complete Success Path Section */}
      <section class="bg-gradient-to-br from-black via-gray-900 to-black py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Complete <span class="text-yellow-400">Success Path</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered coaching to live human support and elite networking—choose the level that fits your journey
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1: AI Coaches */}
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-400/30 hover:border-yellow-400/60 transition relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold text-sm">STEP 1</span>
              </div>
              <div class="text-center mb-6 mt-4">
                <div class="bg-yellow-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-robot text-black text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">AI Coaches</h3>
                <p class="text-gray-400 text-sm">
                  Start here for instant, expert guidance on business fundamentals
                </p>
              </div>
              <ul class="space-y-3 mb-6 text-gray-300 text-sm">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-yellow-400 mt-1 flex-shrink-0"></i>
                  <span>Instant responses 24/7</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-yellow-400 mt-1 flex-shrink-0"></i>
                  <span>All 8 specialized coaches</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-yellow-400 mt-1 flex-shrink-0"></i>
                  <span>Unlimited questions</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-yellow-400 mt-1 flex-shrink-0"></i>
                  <span>Frameworks & templates</span>
                </li>
              </ul>
              <div class="bg-yellow-400/10 rounded-xl p-4 mb-4">
                <div class="text-yellow-400 font-bold text-2xl mb-1">$47/mo</div>
                <div class="text-gray-400 text-xs">or $470/year (save $94)</div>
              </div>
              <a href="#waitlist" class="block w-full bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-center hover:bg-yellow-300 transition">
                Join Waitlist
              </a>
            </div>

            {/* Step 2: Academy Live Coaching */}
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 shadow-2xl relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-black text-yellow-400 px-4 py-1 rounded-full font-bold text-sm">STEP 2</span>
              </div>
              <div class="text-center mb-6 mt-4">
                <div class="bg-black w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-graduation-cap text-yellow-400 text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-black mb-3">Academy Coaching</h3>
                <p class="text-black/70 text-sm font-semibold">
                  Level up with live coaching from Antonio Cook & Tashia Anderson
                </p>
              </div>
              <ul class="space-y-3 mb-6 text-black text-sm">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-black mt-1 flex-shrink-0"></i>
                  <span class="font-semibold">Live coaching sessions</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-black mt-1 flex-shrink-0"></i>
                  <span class="font-semibold">Weekly Q&A calls</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-black mt-1 flex-shrink-0"></i>
                  <span class="font-semibold">Personalized guidance</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-black mt-1 flex-shrink-0"></i>
                  <span class="font-semibold">Expert team support</span>
                </li>
              </ul>
              <div class="bg-black/10 rounded-xl p-4 mb-4">
                <div class="text-black font-bold text-lg mb-1">Custom Pricing</div>
                <div class="text-black/60 text-xs">Multiple program tiers available</div>
              </div>
              <a href="https://mogulmakeracademy.com" target="_blank" class="block w-full bg-black text-yellow-400 px-6 py-3 rounded-full font-bold text-center hover:bg-gray-900 transition">
                <i class="fas fa-graduation-cap mr-2"></i>
                Explore Academy
              </a>
            </div>

            {/* Step 3: Skool Community */}
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-400/30 hover:border-purple-400/60 transition relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-purple-500 text-white px-4 py-1 rounded-full font-bold text-sm">STEP 3</span>
              </div>
              <div class="text-center mb-6 mt-4">
                <div class="bg-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-users text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">Skool Community</h3>
                <p class="text-gray-400 text-sm">
                  Network with elite entrepreneurs, investors, and industry leaders
                </p>
              </div>
              <ul class="space-y-3 mb-6 text-gray-300 text-sm">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-purple-400 mt-1 flex-shrink-0"></i>
                  <span>Network with entrepreneurs</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-purple-400 mt-1 flex-shrink-0"></i>
                  <span>Connect with investors & funders</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-purple-400 mt-1 flex-shrink-0"></i>
                  <span>Banking professionals access</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-purple-400 mt-1 flex-shrink-0"></i>
                  <span>Celebrity member network</span>
                </li>
              </ul>
              <div class="bg-purple-500/10 rounded-xl p-4 mb-4">
                <div class="text-purple-400 font-bold text-lg mb-1">Included</div>
                <div class="text-gray-400 text-xs">with Academy membership</div>
              </div>
              <a href="https://mogulmakeracademy.com" target="_blank" class="block w-full bg-purple-500 text-white px-6 py-3 rounded-full font-bold text-center hover:bg-purple-600 transition">
                <i class="fas fa-users mr-2"></i>
                Join Network
              </a>
            </div>
          </div>

          <div class="text-center mt-12">
            <p class="text-gray-400 text-lg max-w-3xl mx-auto">
              <strong class="text-white">Recommended Path:</strong> Start with AI Coaches for immediate guidance ($47/mo) → 
              Upgrade to Academy for live coaching when ready → Access Skool Community for elite networking and connections with investors, 
              banking professionals, and celebrity entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-black text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <img src="/mr-mogul-maker-logo.png" alt="Mr Mogul Maker Logo" class="h-16 w-16" />
                <h3 class="text-2xl font-bold text-yellow-400">Mr. Mogul Maker</h3>
              </div>
              <p class="text-gray-400 mb-4">
                Empowering entrepreneurs with AI-powered coaching, financial literacy, and business credit strategies.
              </p>
              <div class="flex gap-4">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/mrmogulmaker/" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/mrmogulmakerceo" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@mrmogulmaker" target="_blank" class="text-white hover:text-yellow-400 transition text-xl">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="/" class="text-gray-400 hover:text-yellow-400 transition">Home</a></li>
                <li><a href="/programs" class="text-gray-400 hover:text-yellow-400 transition">AI Coaches</a></li>
                <li><a href="/speaking" class="text-gray-400 hover:text-yellow-400 transition">Speaking</a></li>
                <li><a href="/blog" class="text-gray-400 hover:text-yellow-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Resources</h4>
              <ul class="space-y-2">
                <li><a href="https://mogulmakeracademy.com" target="_blank" class="text-gray-400 hover:text-yellow-400 transition">Mogul Maker Academy</a></li>
                <li><a href="/shop" class="text-gray-400 hover:text-yellow-400 transition">Shop</a></li>
                <li><a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="text-gray-400 hover:text-yellow-400 transition">YouTube Channel</a></li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mr. Mogul Maker (Antonio Cook). All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu JavaScript */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn-programs');
            const mobileMenu = document.getElementById('mobile-menu-programs');
            
            if (!mobileMenuBtn || !mobileMenu) return;
            
            const mobileMenuIcon = mobileMenuBtn.querySelector('i');
            
            function openMobileMenu() {
              mobileMenu.classList.remove('hidden');
              if (mobileMenuIcon) {
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-times');
              }
              document.body.style.overflow = 'hidden';
            }
            
            function closeMobileMenu() {
              mobileMenu.classList.add('hidden');
              if (mobileMenuIcon) {
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
              }
              document.body.style.overflow = '';
            }
            
            mobileMenuBtn.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();
              const isHidden = mobileMenu.classList.contains('hidden');
              if (isHidden) {
                openMobileMenu();
              } else {
                closeMobileMenu();
              }
            });
            
            mobileMenu.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', closeMobileMenu);
            });
            
            mobileMenu.addEventListener('click', function(e) {
              if (e.target === mobileMenu) {
                closeMobileMenu();
              }
            });
            
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
              }
            });
          });
        `
      }} />
    </div>,
    {
      title: 'Programs - AI Business Coaches | Mr. Mogul Maker',
      description: '8 specialized AI business coaches trained on proven frameworks by Antonio Cook. Get 24/7 expert guidance on business formation, funding, growth, credit building, and more. $47/month for unlimited access.'
    }
  )
})

export default app
