import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
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
              <a href="/shop" class="text-white hover:text-yellow-400 transition">Shop</a>
              <a href="/speaking" class="text-white hover:text-yellow-400 transition">Speaking</a>
              <a href="/blog" class="text-white hover:text-yellow-400 transition">Blog</a>
              <a href="/#programs" class="text-white hover:text-yellow-400 transition">Programs</a>
              <a href="/shop" class="relative text-white hover:text-yellow-400 transition">
                <i class="fas fa-shopping-cart text-2xl"></i>
                <span id="cart-badge-home" class="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center hidden">0</span>
              </a>
            </div>
            <button id="mobile-menu-btn" class="md:hidden text-white">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" class="hidden fixed inset-0 bg-black/95 z-40 pt-20">
        <div class="flex flex-col items-center space-y-8 mt-12">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/shop" class="text-white text-2xl hover:text-yellow-400 transition">Shop</a>
          <a href="/speaking" class="text-white text-2xl hover:text-yellow-400 transition">Speaking</a>
          <a href="/blog" class="text-white text-2xl hover:text-yellow-400 transition">Blog</a>
          <a href="/#programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
        </div>
      </div>

      {/* Lead Magnet Popup */}
      <div id="lead-magnet-popup" class="hidden fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl max-w-2xl w-full p-8 md:p-12 relative">
          <button id="close-popup" class="absolute top-4 right-4 text-black hover:text-gray-700 text-3xl">
            <i class="fas fa-times"></i>
          </button>
          
          <div class="text-center">
            <div class="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-gift text-yellow-400 text-4xl"></i>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-black mb-4">
              FREE Business Credit Blueprint
            </h2>
            <p class="text-xl text-gray-900 font-semibold mb-8">
              Download your FREE guide: "How to Build Business Credit in 90 Days" 
              - The exact blueprint used by thousands of entrepreneurs!
            </p>
            
            <div class="bg-white rounded-2xl p-8 mb-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">What You'll Get:</h3>
              <ul class="text-left space-y-3 mb-6">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                  <span class="text-gray-700 font-semibold">Step-by-step guide to establishing business credit</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                  <span class="text-gray-700 font-semibold">List of 20+ Net-30 vendor accounts</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                  <span class="text-gray-700 font-semibold">Credit monitoring tools and resources</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-yellow-400 text-xl mt-1"></i>
                  <span class="text-gray-700 font-semibold">Funding application strategies</span>
                </li>
              </ul>
              
              <form id="lead-form" class="space-y-4">
                <input
                  type="text"
                  id="name-input"
                  placeholder="Your Name"
                  class="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-yellow-400 focus:outline-none font-semibold"
                  required
                />
                <input
                  type="email"
                  id="email-input"
                  placeholder="Your Email"
                  class="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-yellow-400 focus:outline-none font-semibold"
                  required
                />
                <button
                  type="submit"
                  class="w-full bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition transform hover:scale-105"
                >
                  <i class="fas fa-download mr-2"></i>
                  Get My FREE Blueprint
                </button>
              </form>
              
              <p class="text-sm text-gray-600 mt-4">
                <i class="fas fa-lock mr-1"></i>
                Your information is 100% secure. No spam, ever.
              </p>
            </div>
            
            <p class="text-black text-sm">
              Join 5,000+ entrepreneurs who have downloaded this guide!
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div class="absolute inset-0">
          <img 
            src="/antonio-cook-professional.jpg" 
            alt="Antonio Cook - Mr. Mogul Maker" 
            class="w-full h-full object-cover"
            style="object-position: center top;"
          />
          {/* Dark gradient overlay for text readability - lighter on right to show your photo */}
          <div class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="text-white">
              <div class="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full mb-6">
                <i class="fas fa-crown mr-2"></i>
                Entrepreneur Coach & Financial Educator
              </div>
              <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Build <span class="text-yellow-400">Business Credit</span> & Multiply Wealth
              </h1>
              <p class="text-xl text-gray-300 mb-8">
                I'm Antonio Cook, aka Mr. Mogul Maker — CEO of Mogul Maker Academy. 
                Learn how to secure funding, build business credit, and create generational wealth.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="#programs" class="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
                  <i class="fas fa-rocket mr-2"></i>
                  Explore Programs
                </a>
                <a href="#contact" class="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition transform hover:scale-105">
                  <i class="fas fa-phone mr-2"></i>
                  Get In Touch
                </a>
              </div>
              
              {/* Social Links */}
              <div class="flex gap-6 mt-12">
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
      <section class="bg-yellow-400 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-black mb-2">737+</div>
              <div class="text-black/70 font-semibold">YouTube Subscribers</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-black mb-2">325+</div>
              <div class="text-black/70 font-semibold">TikTok Followers</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-black mb-2">80+</div>
              <div class="text-black/70 font-semibold">Educational Videos</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-black mb-2">8</div>
              <div class="text-black/70 font-semibold">Academy Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" class="bg-white py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span class="text-yellow-400">Mr. Mogul Maker</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming entrepreneurs from consumers to creditors through financial literacy and strategic business education.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-12 text-white shadow-2xl">
                <i class="fas fa-quote-left text-yellow-400 text-4xl mb-6"></i>
                <p class="text-xl leading-relaxed mb-6">
                  "This channel is where entrepreneurs, investors, and everyday moguls-in-the-making learn how to build real financial power. 
                  We break money down into three stages: how to <strong>make it</strong> through business and income strategies, 
                  how to <strong>manage it</strong> with credit, compliance, and protection systems, and how to <strong>multiply it</strong> 
                  through funding, acquisitions, and wealth-building frameworks."
                </p>
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <i class="fas fa-crown text-black text-2xl"></i>
                  </div>
                  <div>
                    <div class="font-bold text-lg">Antonio Cook</div>
                    <div class="text-yellow-400">Mr. Mogul Maker</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <div class="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div class="flex items-start gap-4">
                  <div class="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-graduation-cap text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Financial Literacy Educator</h3>
                    <p class="text-gray-600">Empowering individuals with the knowledge to build business credit, secure funding, and create lasting wealth.</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div class="flex items-start gap-4">
                  <div class="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-building text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">CEO of Mogul Maker Academy</h3>
                    <p class="text-gray-600">Leading a comprehensive educational platform with 8 specialized programs designed to transform entrepreneurs into successful business owners.</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div class="flex items-start gap-4">
                  <div class="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-podcast text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Podcast Host</h3>
                    <p class="text-gray-600">Host of "Mind Your Money Podcast" and "3M Podcast: Make, Manage, Multiply" - sharing practical financial wisdom and success strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" class="bg-gray-900 py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Mogul Maker Academy <span class="text-yellow-400">Programs</span>
            </h2>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive programs designed to take you from startup to funded, structured, and protected business owner.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'BUILD', icon: 'fa-hammer', desc: 'Foundation & Structure' },
              { name: 'LAUNCH', icon: 'fa-rocket', desc: 'Market Entry Strategy' },
              { name: 'FUND', icon: 'fa-dollar-sign', desc: 'Capital & Financing' },
              { name: 'DRIVE', icon: 'fa-car', desc: 'Growth & Momentum' },
              { name: 'ACCEL', icon: 'fa-chart-line', desc: 'Scale & Expansion' },
              { name: 'REPORT', icon: 'fa-file-alt', desc: 'Credit Reporting' },
              { name: 'SHIELD', icon: 'fa-shield-alt', desc: 'Asset Protection' },
              { name: 'ACQUIRE', icon: 'fa-handshake', desc: 'Business Acquisition' }
            ].map((program, idx) => (
              <div class="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-6 border-2 border-yellow-400/20 hover:border-yellow-400 transition transform hover:scale-105 cursor-pointer">
                <div class="text-center">
                  <div class="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class={`fas ${program.icon} text-black text-2xl`}></i>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-2">{program.name}</h3>
                  <p class="text-gray-400">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div class="text-center mt-12">
            <a href="https://skool.com/mogul-maker-academy/about" target="_blank" class="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
              <i class="fas fa-graduation-cap mr-2"></i>
              Visit Mogul Maker Academy
            </a>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section id="podcasts" class="bg-white py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span class="text-yellow-400">Podcasts</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Tune in to learn practical strategies for building wealth and mastering money management.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 text-white shadow-2xl">
              <div class="flex items-center gap-4 mb-6">
                <div class="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-brain text-black text-2xl"></i>
                </div>
                <h3 class="text-3xl font-bold">Mind Your Money Podcast</h3>
              </div>
              <p class="text-gray-300 mb-6 text-lg">
                Deep dive into financial literacy, credit strategies, and wealth-building principles. Learn how to think like a bank and build wealth like a mogul.
              </p>
              <div class="flex gap-4">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                  <i class="fab fa-youtube mr-2"></i>
                  Watch Now
                </a>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-black shadow-2xl">
              <div class="flex items-center gap-4 mb-6">
                <div class="bg-black w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-coins text-yellow-400 text-2xl"></i>
                </div>
                <h3 class="text-3xl font-bold">3M Podcast</h3>
              </div>
              <p class="text-gray-900 mb-6 text-lg font-semibold">
                <strong>Make, Manage, Multiply</strong> - The complete framework for entrepreneurs. Learn the three essential stages of building lasting wealth and financial freedom.
              </p>
              <div class="flex gap-4">
                <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition">
                  <i class="fab fa-youtube mr-2"></i>
                  Listen Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Popular Videos */}
          <div class="mt-16">
            <h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Videos</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div class="bg-gradient-to-br from-black to-gray-800 h-48 flex items-center justify-center">
                  <i class="fab fa-youtube text-yellow-400 text-6xl"></i>
                </div>
                <div class="p-6">
                  <h4 class="font-bold text-lg mb-2">How to Become a Data Furnisher</h4>
                  <p class="text-gray-600 text-sm mb-4">Step-by-step guide to reporting to credit bureaus</p>
                  <div class="flex items-center justify-between text-sm text-gray-500">
                    <span><i class="fas fa-eye mr-1"></i> 5.1K views</span>
                    <span>6 months ago</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div class="bg-gradient-to-br from-black to-gray-800 h-48 flex items-center justify-center">
                  <i class="fab fa-youtube text-yellow-400 text-6xl"></i>
                </div>
                <div class="p-6">
                  <h4 class="font-bold text-lg mb-2">Structure Your Business Right</h4>
                  <p class="text-gray-600 text-sm mb-4">LLC, Corp, or Sole Proprietor? Make the right choice</p>
                  <div class="flex items-center justify-between text-sm text-gray-500">
                    <span><i class="fas fa-eye mr-1"></i> 409 views</span>
                    <span>6 months ago</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div class="bg-gradient-to-br from-black to-gray-800 h-48 flex items-center justify-center">
                  <i class="fab fa-youtube text-yellow-400 text-6xl"></i>
                </div>
                <div class="p-6">
                  <h4 class="font-bold text-lg mb-2">Think Like a Bank</h4>
                  <p class="text-gray-600 text-sm mb-4">Build wealth like a mogul with the right mindset</p>
                  <div class="flex items-center justify-between text-sm text-gray-500">
                    <span><i class="fas fa-eye mr-1"></i> 323 views</span>
                    <span>5 months ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" class="bg-gradient-to-br from-black via-gray-900 to-black py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-12 shadow-2xl">
            <i class="fas fa-crown text-black text-6xl mb-6"></i>
            <h2 class="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Become a Mogul?
            </h2>
            <p class="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join Mogul Maker Academy and learn the proven strategies to build business credit, secure funding, and multiply your wealth.
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <a href="https://skool.com/mogul-maker-academy/about" target="_blank" class="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition transform hover:scale-105">
                <i class="fas fa-graduation-cap mr-2"></i>
                Join Academy
              </a>
              <a href="https://www.youtube.com/@mrmogulmaker" target="_blank" class="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-yellow-400 transition transform hover:scale-105">
                <i class="fab fa-youtube mr-2"></i>
                Subscribe on YouTube
              </a>
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
                <li><a href="#about" class="hover:text-yellow-400 transition">About</a></li>
                <li><a href="#programs" class="hover:text-yellow-400 transition">Programs</a></li>
                <li><a href="#podcasts" class="hover:text-yellow-400 transition">Podcasts</a></li>
                <li><a href="https://skool.com/mogul-maker-academy/about" target="_blank" class="hover:text-yellow-400 transition">Academy</a></li>
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
        
        // Lead Magnet Popup Logic
        const leadPopup = document.getElementById('lead-magnet-popup');
        const closePopupBtn = document.getElementById('close-popup');
        const leadForm = document.getElementById('lead-form');
        
        // Check if user has already seen popup
        const hasSeenPopup = localStorage.getItem('has_seen_lead_popup');
        
        // Show popup after 15 seconds if not seen before
        if (!hasSeenPopup) {
          setTimeout(() => {
            leadPopup.classList.remove('hidden');
          }, 15000);
        }
        
        // Close popup
        closePopupBtn.addEventListener('click', () => {
          leadPopup.classList.add('hidden');
          localStorage.setItem('has_seen_lead_popup', 'true');
        });
        
        // Close on outside click
        leadPopup.addEventListener('click', (e) => {
          if (e.target.id === 'lead-magnet-popup') {
            leadPopup.classList.add('hidden');
            localStorage.setItem('has_seen_lead_popup', 'true');
          }
        });
        
        // Handle form submission
        leadForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('name-input').value;
          const email = document.getElementById('email-input').value;
          
          // Store in localStorage (in production, send to your email service)
          localStorage.setItem('lead_name', name);
          localStorage.setItem('lead_email', email);
          localStorage.setItem('has_seen_lead_popup', 'true');
          
          // Show success message
          alert('🎉 Success! Check your email for the Business Credit Blueprint.\\n\\nWe\\'ll send you weekly tips on building credit and securing funding!');
          leadPopup.classList.add('hidden');
          
          // TODO: Integrate with email service (Mailchimp, ConvertKit, or GHL)
          // Example: Send data to your email marketing platform
        });
        
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
          document.getElementById('mobile-menu').classList.toggle('hidden');
        });
        
        document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.add('hidden');
          });
        });
        
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
              <a href="/shop" class="text-yellow-400 font-semibold">Shop</a>
              <a href="/speaking" class="text-white hover:text-yellow-400 transition">Speaking</a>
              <a href="/blog" class="text-white hover:text-yellow-400 transition">Blog</a>
              <a href="/#programs" class="text-white hover:text-yellow-400 transition">Programs</a>
              <button id="cart-btn" class="relative text-white hover:text-yellow-400 transition">
                <i class="fas fa-shopping-cart text-2xl"></i>
                <span id="cart-count" class="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center hidden">0</span>
              </button>
            </div>
            <button id="mobile-menu-btn-shop" class="md:hidden text-white">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu-shop" class="hidden fixed inset-0 bg-black/95 z-40 pt-20">
        <div class="flex flex-col items-center space-y-8 mt-12">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/shop" class="text-yellow-400 text-2xl font-semibold">Shop</a>
          <a href="/speaking" class="text-white text-2xl hover:text-yellow-400 transition">Speaking</a>
          <a href="/blog" class="text-white text-2xl hover:text-yellow-400 transition">Blog</a>
          <a href="/#programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
        </div>
      </div>

      {/* Shopping Cart Modal */}
      <div id="cart-modal" class="hidden fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-8">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-3xl font-bold text-gray-900">
                <i class="fas fa-shopping-cart text-yellow-400 mr-2"></i>
                Your Cart
              </h2>
              <button id="close-cart" class="text-gray-500 hover:text-gray-900 text-2xl">
                <i class="fas fa-times"></i>
              </button>
            </div>
            
            <div id="cart-items" class="space-y-4 mb-6">
              {/* Cart items will be inserted here by JavaScript */}
            </div>
            
            <div id="empty-cart" class="text-center py-12">
              <i class="fas fa-shopping-cart text-gray-300 text-6xl mb-4"></i>
              <p class="text-gray-500 text-xl">Your cart is empty</p>
            </div>
            
            <div id="cart-summary" class="hidden border-t pt-6">
              <div class="flex justify-between items-center mb-6">
                <span class="text-2xl font-bold text-gray-900">Total:</span>
                <span id="cart-total" class="text-3xl font-bold text-yellow-400">$0.00</span>
              </div>
              <button id="checkout-btn" class="w-full bg-yellow-400 text-black py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
                <i class="fas fa-lock mr-2"></i>
                Proceed to Checkout
              </button>
              <p class="text-center text-sm text-gray-500 mt-4">
                <i class="fas fa-shield-alt mr-1"></i>
                Secure payment powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <div id="product-modal" class="hidden fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-8">
            <div class="flex justify-between items-start mb-6">
              <h2 id="modal-title" class="text-3xl font-bold text-gray-900"></h2>
              <button id="close-modal" class="text-gray-500 hover:text-gray-900 text-2xl">
                <i class="fas fa-times"></i>
              </button>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <div id="modal-image" class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl aspect-square flex items-center justify-center mb-4">
                  <i class="fas fa-file-pdf text-white text-8xl"></i>
                </div>
                <div id="modal-features" class="space-y-2">
                  {/* Features will be inserted here */}
                </div>
              </div>
              
              <div>
                <div class="mb-6">
                  <span id="modal-price" class="text-4xl font-bold text-yellow-400"></span>
                </div>
                <p id="modal-description" class="text-gray-600 mb-6"></p>
                <div id="modal-includes" class="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h4 class="font-bold text-lg mb-3">What's Included:</h4>
                  <ul id="modal-includes-list" class="space-y-2">
                    {/* Includes will be inserted here */}
                  </ul>
                </div>
                <button id="modal-add-to-cart" class="w-full bg-yellow-400 text-black py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105 mb-3">
                  <i class="fas fa-shopping-cart mr-2"></i>
                  Add to Cart
                </button>
                <button id="modal-buy-now" class="w-full border-2 border-yellow-400 text-yellow-400 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition">
                  <i class="fas fa-bolt mr-2"></i>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-16">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmRiNGQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJoNGMxLjEgMCAyIC45IDIgMnY0YzAgMS4xLS45IDItMiAyaC00Yy0xLjEgMC0yLS45LTItMnYtNHptMCAxOGMwLTEuMS45LTIgMi0yaDRjMS4xIDAgMiAuOSAyIDJ2NGMwIDEuMS0uOSAyLTIgMmgtNGMtMS4xIDAtMi0uOS0yLTJ2LTR6bTE4IDBjMC0xLjEuOS0yIDItMmg0YzEuMSAwIDIgLjkgMiAydjRjMCAxLjEtLjkgMi0yIDJoLTRjLTEuMSAwLTItLjktMi0ydi00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div class="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-full mb-6">
            <i class="fas fa-store mr-2"></i>
            Digital Products Store
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
            Business Credit <span class="text-yellow-400">Courses & Templates</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium digital products designed to help you build business credit, secure funding, and multiply your wealth.
          </p>
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
              Shop
            </li>
          </ol>
        </div>
      </nav>

      {/* Filter Section */}
      <section class="bg-gray-100 py-8 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap gap-4 justify-center">
            <button class="filter-btn active bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition" data-filter="all">
              All Products
            </button>
            <button class="filter-btn bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition border-2 border-gray-200" data-filter="courses">
              Courses
            </button>
            <button class="filter-btn bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition border-2 border-gray-200" data-filter="templates">
              Templates
            </button>
            <button class="filter-btn bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition border-2 border-gray-200" data-filter="guides">
              Guides
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="products-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Products will be inserted here by JavaScript */}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section class="bg-gradient-to-br from-black to-gray-900 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <i class="fas fa-shield-alt text-yellow-400 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Secure Payment</h3>
              <p class="text-gray-400">Protected by Stripe encryption</p>
            </div>
            <div>
              <i class="fas fa-download text-yellow-400 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Instant Access</h3>
              <p class="text-gray-400">Download immediately after purchase</p>
            </div>
            <div>
              <i class="fas fa-headset text-yellow-400 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold mb-2">Expert Support</h3>
              <p class="text-gray-400">Get help from Mr. Mogul Maker</p>
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
                <li><a href="/#programs" class="hover:text-yellow-400 transition">Programs</a></li>
                <li><a href="/#podcasts" class="hover:text-yellow-400 transition">Podcasts</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold text-lg mb-4">Support</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-yellow-400 transition">Refund Policy</a></li>
                <li><a href="#" class="hover:text-yellow-400 transition">Terms of Service</a></li>
                <li><a href="#" class="hover:text-yellow-400 transition">Privacy Policy</a></li>
                <li><a href="#" class="hover:text-yellow-400 transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mr. Mogul Maker | Antonio Cook. All rights reserved.</p>
            <p class="mt-2 text-yellow-400 font-semibold">Money Follows Management™</p>
          </div>
        </div>
      </footer>

      {/* JavaScript for Shop Functionality */}
      <script dangerouslySetInnerHTML={{__html: `
        // Product Data
        // GHL INTEGRATION: Add your GoHighLevel order form URLs to the 'ghlCheckoutUrl' field
        // Example: ghlCheckoutUrl: "https://your-ghl-domain.com/order-form/your-product-id"
        const products = [
          {
            id: 1,
            name: "Business Credit Blueprint",
            price: 297,
            category: "courses",
            description: "Complete step-by-step course on building business credit from scratch. Learn the exact strategies used by successful entrepreneurs.",
            image: "file-pdf",
            features: ["10+ Video Lessons", "Downloadable Templates", "Lifetime Access"],
            includes: [
              "Step-by-step video training",
              "Business credit checklist",
              "Vendor list (Net-30 accounts)",
              "Credit monitoring tools",
              "Email support"
            ],
            ghlCheckoutUrl: "" // Add your GHL order form URL here
          },
          {
            id: 2,
            name: "Funding Success System",
            price: 497,
            category: "courses",
            description: "Master the art of securing business funding. Get access to funding sources, application strategies, and insider tips.",
            image: "chart-line",
            features: ["15+ Video Modules", "Funding Templates", "Private Community"],
            includes: [
              "Comprehensive video course",
              "Funding application templates",
              "List of 50+ funding sources",
              "Pitch deck template",
              "1-on-1 consultation call"
            ],
            ghlCheckoutUrl: "" // Add your GHL order form URL here
          },
          {
            id: 3,
            name: "LLC Formation Guide",
            price: 97,
            category: "guides",
            description: "Everything you need to properly form and structure your LLC. Includes state-specific guidance and templates.",
            image: "building",
            features: ["PDF Guide", "Forms & Templates", "State Requirements"],
            includes: [
              "50-page comprehensive guide",
              "LLC operating agreement template",
              "EIN application walkthrough",
              "State filing checklists",
              "Business structure comparison"
            ],
            ghlCheckoutUrl: "" // Add your GHL order form URL here
          },
          {
            id: 4,
            name: "Credit Repair Templates",
            price: 147,
            category: "templates",
            description: "Professional dispute letters and credit repair templates. Remove negative items and boost your credit score.",
            image: "file-alt",
            features: ["20+ Templates", "Letter Library", "Instructions"],
            includes: [
              "Dispute letter templates",
              "Goodwill adjustment letters",
              "Verification request forms",
              "Credit bureau contact info",
              "Usage instructions"
            ],
            ghlCheckoutUrl: "" // Add your GHL order form URL here
          },
          {
            id: 5,
            name: "Business Plan Template",
            price: 127,
            category: "templates",
            description: "Professional business plan template used by funded businesses. Includes financial projections and market analysis.",
            image: "file-invoice",
            features: ["Editable Template", "Financial Models", "Examples"],
            includes: [
              "Complete business plan template",
              "Financial projection spreadsheet",
              "Market analysis template",
              "Sample business plans",
              "Video tutorial"
            ],
            ghlCheckoutUrl: "" // Add your GHL order form URL here
          },
          {
            id: 6,
            name: "Wealth Multiplication Masterclass",
            price: 697,
            category: "courses",
            description: "Advanced strategies for multiplying wealth through investments, acquisitions, and passive income streams.",
            image: "coins",
            features: ["20+ Hours Content", "Investment Tools", "Private Coaching"],
            includes: [
              "Complete video masterclass",
              "Investment calculator tools",
              "Passive income playbook",
              "Acquisition checklist",
              "Monthly group coaching",
              "Lifetime updates"
            ],
            ghlCheckoutUrl: "" // Add your GHL order form URL here
          },
          {
            id: 7,
            name: "Credit Score Optimization",
            price: 197,
            category: "guides",
            description: "Learn how to optimize your credit score to 750+. Understand credit algorithms and scoring factors.",
            image: "chart-bar",
            features: ["Video + PDF", "Score Simulator", "Action Plan"],
            includes: [
              "Credit optimization course",
              "Score improvement action plan",
              "Credit utilization calculator",
              "Payment history tracker",
              "Monthly credit tips newsletter"
            ],
            ghlCheckoutUrl: "" // Add your GHL order form URL here
          },
          {
            id: 8,
            name: "Funding Application Bundle",
            price: 247,
            category: "templates",
            description: "Complete collection of funding applications, forms, and supporting documents ready to use.",
            image: "folder-open",
            features: ["30+ Templates", "Bank Applications", "SBA Forms"],
            includes: [
              "Bank loan applications",
              "SBA loan forms",
              "Business financial statements",
              "Personal financial statement",
              "Supporting documents checklist",
              "Application tips guide"
            ],
            ghlCheckoutUrl: "" // Add your GHL order form URL here
          },
          {
            id: 9,
            name: "3M Framework Guide",
            price: 77,
            category: "guides",
            description: "Deep dive into the Make, Manage, Multiply framework. The foundation of wealth building.",
            image: "book",
            features: ["100-Page Guide", "Worksheets", "Audio Version"],
            includes: [
              "Complete 3M framework guide",
              "Implementation worksheets",
              "Goal-setting templates",
              "Progress tracker",
              "Audio version (MP3)",
              "Bonus case studies"
            ],
            ghlCheckoutUrl: "" // Add your GHL order form URL here
          },
          {
            id: 10,
            name: "Capital Stacking Blueprint",
            price: 37,
            category: "templates",
            description: "Printable workbook for mapping out a $500K capital stack across personal PG, business EIN, and fintech sources. Derived from FUND and ACQUIRE frameworks.",
            image: "layer-group",
            features: ["Printable Workbook", "Capital Mapping Tools", "Framework Integration"],
            includes: [
              "Complete capital stacking workbook",
              "Personal PG strategy section",
              "Business EIN funding roadmap",
              "Fintech sources breakdown",
              "FUND framework integration",
              "ACQUIRE framework tools"
            ],
            ghlCheckoutUrl: "https://link.fastpaydirect.com/payment-link/68fc51252197096625e30088"
          }
        ];

        // Shopping Cart
        let cart = JSON.parse(localStorage.getItem('mogulmaker_cart') || '[]');
        
        function updateCartUI() {
          const cartCount = document.getElementById('cart-count');
          const cartItems = document.getElementById('cart-items');
          const emptyCart = document.getElementById('empty-cart');
          const cartSummary = document.getElementById('cart-summary');
          const cartTotal = document.getElementById('cart-total');
          
          if (cart.length === 0) {
            cartCount.classList.add('hidden');
            emptyCart.classList.remove('hidden');
            cartSummary.classList.add('hidden');
            cartItems.innerHTML = '';
            return;
          }
          
          cartCount.textContent = cart.length;
          cartCount.classList.remove('hidden');
          emptyCart.classList.add('hidden');
          cartSummary.classList.remove('hidden');
          
          let total = 0;
          cartItems.innerHTML = cart.map(item => {
            total += item.price;
            return \`
              <div class="flex gap-4 border-b pb-4">
                <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-\${item.image} text-white text-2xl"></i>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-lg">\${item.name}</h3>
                  <p class="text-yellow-400 font-semibold">$\${item.price}</p>
                </div>
                <button onclick="removeFromCart(\${item.id})" class="text-red-500 hover:text-red-700">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            \`;
          }).join('');
          
          cartTotal.textContent = '$' + total.toFixed(2);
        }
        
        window.addToCart = function(productId, event) {
          const product = products.find(p => p.id === productId);
          
          // Check if product already in cart
          if (cart.find(item => item.id === productId)) {
            showToast('This product is already in your cart.', 'info', product.name);
            return;
          }
          
          // Add to cart
          cart.push(product);
          localStorage.setItem('mogulmaker_cart', JSON.stringify(cart));
          updateCartUI();
          
          // Get button position for animation
          const button = event?.target.closest('button');
          if (button) {
            createFlyingProductAnimation(button, product);
          }
          
          // Animate cart icon
          animateCartIcon();
          
          // Show success toast
          showToast('Added to cart!', 'success', product.name);
        };
        
        // Create flying product animation
        function createFlyingProductAnimation(button, product) {
          const buttonRect = button.getBoundingClientRect();
          const cartIcon = document.getElementById('cart-count') || document.querySelector('.fa-shopping-cart');
          if (!cartIcon) return;
          
          const cartRect = cartIcon.getBoundingClientRect();
          
          // Create flying element
          const flyingProduct = document.createElement('div');
          flyingProduct.className = 'flying-product bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-4 flex items-center justify-center';
          flyingProduct.innerHTML = \`<i class="fas fa-\${product.image} text-white text-2xl"></i>\`;
          flyingProduct.style.left = buttonRect.left + 'px';
          flyingProduct.style.top = buttonRect.top + 'px';
          flyingProduct.style.width = '60px';
          flyingProduct.style.height = '60px';
          
          // Calculate translation distance
          const tx = cartRect.left - buttonRect.left;
          const ty = cartRect.top - buttonRect.top;
          flyingProduct.style.setProperty('--tx', tx + 'px');
          flyingProduct.style.setProperty('--ty', ty + 'px');
          
          document.body.appendChild(flyingProduct);
          
          // Remove after animation
          setTimeout(() => {
            flyingProduct.remove();
          }, 800);
        }
        
        // Animate cart icon
        function animateCartIcon() {
          const cartIcon = document.querySelector('.fa-shopping-cart')?.closest('a');
          const cartBadge = document.getElementById('cart-count');
          
          if (cartIcon) {
            cartIcon.classList.add('cart-icon-shake', 'cart-glow');
            setTimeout(() => {
              cartIcon.classList.remove('cart-icon-shake', 'cart-glow');
            }, 1000);
          }
          
          if (cartBadge) {
            cartBadge.classList.add('cart-badge-bounce');
            setTimeout(() => {
              cartBadge.classList.remove('cart-badge-bounce');
            }, 600);
          }
        }
        
        // Show toast notification
        function showToast(message, type = 'success', productName = '') {
          // Remove any existing toasts
          const existingToast = document.querySelector('.toast-notification');
          if (existingToast) {
            existingToast.remove();
          }
          
          const toast = document.createElement('div');
          toast.className = \`toast-notification \${type}\`;
          
          const icon = type === 'success' ? 'check-circle' : 'info-circle';
          const iconColor = type === 'success' ? 'text-green-500' : 'text-blue-500';
          
          toast.innerHTML = \`
            <div class="flex items-start gap-3">
              <i class="fas fa-\${icon} \${iconColor} text-2xl"></i>
              <div class="flex-1">
                <h4 class="font-bold text-gray-900 mb-1">\${message}</h4>
                \${productName ? \`<p class="text-sm text-gray-600">\${productName}</p>\` : ''}
                <div class="flex gap-2 mt-3">
                  <button onclick="document.getElementById('cart-btn').click(); this.closest('.toast-notification').remove();" class="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition">
                    View Cart
                  </button>
                  <button onclick="this.closest('.toast-notification').remove();" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition">
                    Continue Shopping
                  </button>
                </div>
              </div>
              <button onclick="this.closest('.toast-notification').remove();" class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-times"></i>
              </button>
            </div>
          \`;
          
          document.body.appendChild(toast);
          
          // Auto-hide after 5 seconds
          setTimeout(() => {
            toast.classList.add('hiding');
            setTimeout(() => {
              toast.remove();
            }, 400);
          }, 5000);
        }
        
        window.removeFromCart = function(productId) {
          cart = cart.filter(item => item.id !== productId);
          localStorage.setItem('mogulmaker_cart', JSON.stringify(cart));
          updateCartUI();
        };
        
        // Render Products
        function renderProducts(filter = 'all') {
          const grid = document.getElementById('products-grid');
          const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);
          
          grid.innerHTML = filteredProducts.map(product => \`
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 cursor-pointer product-card" data-product-id="\${product.id}">
              <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 h-64 flex items-center justify-center">
                <i class="fas fa-\${product.image} text-white text-8xl"></i>
              </div>
              <div class="p-6">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-xl font-bold text-gray-900">\${product.name}</h3>
                  <span class="text-2xl font-bold text-yellow-400">$\${product.price}</span>
                </div>
                <p class="text-gray-600 mb-4">\${product.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  \${product.features.map(f => \`
                    <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      <i class="fas fa-check text-yellow-400 mr-1"></i>\${f}
                    </span>
                  \`).join('')}
                </div>
                <div class="flex gap-3">
                  <button onclick="event.stopPropagation(); addToCart(\${product.id}, event)" class="flex-1 bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-300 transition transform hover:scale-105">
                    <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
                  </button>
                  <button onclick="event.stopPropagation(); showProductDetails(\${product.id})" class="bg-gray-200 text-gray-700 px-4 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
                    <i class="fas fa-info-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          \`).join('');
          
          // Add click handlers to product cards
          document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
              if (!e.target.closest('button')) {
                showProductDetails(parseInt(card.dataset.productId));
              }
            });
          });
        }
        
        // Show Product Details
        window.showProductDetails = function(productId) {
          const product = products.find(p => p.id === productId);
          const modal = document.getElementById('product-modal');
          
          document.getElementById('modal-title').textContent = product.name;
          document.getElementById('modal-price').textContent = '$' + product.price;
          document.getElementById('modal-description').textContent = product.description;
          
          const imageContainer = document.getElementById('modal-image');
          imageContainer.innerHTML = \`<i class="fas fa-\${product.image} text-white text-8xl"></i>\`;
          
          const featuresList = document.getElementById('modal-features');
          featuresList.innerHTML = product.features.map(f => \`
            <div class="flex items-center gap-2 text-gray-700">
              <i class="fas fa-check-circle text-yellow-400"></i>
              <span>\${f}</span>
            </div>
          \`).join('');
          
          const includesList = document.getElementById('modal-includes-list');
          includesList.innerHTML = product.includes.map(i => \`
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-yellow-400 mt-1"></i>
              <span class="text-gray-700">\${i}</span>
            </li>
          \`).join('');
          
          document.getElementById('modal-add-to-cart').onclick = (e) => {
            addToCart(productId, e);
            modal.classList.add('hidden');
          };
          
          document.getElementById('modal-buy-now').onclick = () => {
            // Buy Now - Direct GHL checkout
            if (product.ghlCheckoutUrl && product.ghlCheckoutUrl.trim() !== '') {
              window.location.href = product.ghlCheckoutUrl;
            } else {
              addToCart(productId);
              modal.classList.add('hidden');
              document.getElementById('cart-modal').classList.remove('hidden');
            }
          };
          
          modal.classList.remove('hidden');
        };
        
        // Filter Products
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => {
              b.classList.remove('active', 'bg-yellow-400', 'text-black');
              b.classList.add('bg-white', 'text-gray-700');
            });
            btn.classList.add('active', 'bg-yellow-400', 'text-black');
            btn.classList.remove('bg-white', 'text-gray-700');
            renderProducts(btn.dataset.filter);
          });
        });
        
        // Cart Modal
        document.getElementById('cart-btn').addEventListener('click', () => {
          document.getElementById('cart-modal').classList.remove('hidden');
        });
        
        document.getElementById('close-cart').addEventListener('click', () => {
          document.getElementById('cart-modal').classList.add('hidden');
        });
        
        // Product Modal
        document.getElementById('close-modal').addEventListener('click', () => {
          document.getElementById('product-modal').classList.add('hidden');
        });
        
        // Checkout - GHL Integration
        document.getElementById('checkout-btn').addEventListener('click', () => {
          // Check if all products have GHL checkout URLs
          const hasGhlUrls = cart.every(item => item.ghlCheckoutUrl && item.ghlCheckoutUrl.trim() !== '');
          
          if (hasGhlUrls && cart.length === 1) {
            // Single product - redirect directly to GHL order form
            window.location.href = cart[0].ghlCheckoutUrl;
          } else if (hasGhlUrls && cart.length > 1) {
            // Multiple products - show options
            alert('You have multiple products. You will be redirected to complete each purchase separately.\\n\\nProduct 1: ' + cart[0].name);
            window.location.href = cart[0].ghlCheckoutUrl;
          } else {
            // No GHL URLs configured - show coming soon message
            alert('🚀 To enable checkout:\\n\\n1. Add your GoHighLevel order form URLs to each product\\n2. Or integrate Stripe payment processing\\n\\nContact support for help setting this up.');
          }
        });
        
        // Mobile Menu
        document.getElementById('mobile-menu-btn-shop').addEventListener('click', () => {
          document.getElementById('mobile-menu-shop').classList.toggle('hidden');
        });
        
        document.querySelectorAll('#mobile-menu-shop a').forEach(link => {
          link.addEventListener('click', () => {
            document.getElementById('mobile-menu-shop').classList.add('hidden');
          });
        });
        
        // Close modals on outside click
        document.getElementById('cart-modal').addEventListener('click', (e) => {
          if (e.target.id === 'cart-modal') {
            document.getElementById('cart-modal').classList.add('hidden');
          }
        });
        
        document.getElementById('product-modal').addEventListener('click', (e) => {
          if (e.target.id === 'product-modal') {
            document.getElementById('product-modal').classList.add('hidden');
          }
        });
        
        // Initialize
        renderProducts();
        updateCartUI();
      `}} />
    </div>,
    {
      title: 'Digital Products - Business Credit Courses & Templates | Mr. Mogul Maker',
      description: 'Download business credit blueprints, funding templates, and wealth-building courses from Mr. Mogul Maker. Proven systems to build business credit and secure funding.',
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
                name: 'Shop',
                item: 'https://mrmogulmaker.com/shop'
              }
            ]
          },
          {
            '@type': 'Product',
            name: 'Business Credit Blueprint',
            description: 'Complete step-by-step course on building business credit from scratch. Learn the exact strategies used by successful entrepreneurs.',
            offers: {
              '@type': 'Offer',
              price: '297',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://mrmogulmaker.com/shop'
            },
            brand: {
              '@type': 'Brand',
              name: 'Mr. Mogul Maker'
            }
          },
          {
            '@type': 'Product',
            name: 'Funding Success System',
            description: 'Master the art of securing business funding. Get access to funding sources, application strategies, and insider tips.',
            offers: {
              '@type': 'Offer',
              price: '497',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://mrmogulmaker.com/shop'
            },
            brand: {
              '@type': 'Brand',
              name: 'Mr. Mogul Maker'
            }
          },
          {
            '@type': 'Product',
            name: 'LLC Formation Guide',
            description: 'Everything you need to properly form and structure your LLC. Includes state-specific guidance and templates.',
            offers: {
              '@type': 'Offer',
              price: '97',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://mrmogulmaker.com/shop'
            },
            brand: {
              '@type': 'Brand',
              name: 'Mr. Mogul Maker'
            }
          },
          {
            '@type': 'Product',
            name: 'Credit Repair Templates',
            description: 'Professional dispute letters and credit repair templates. Remove negative items and boost your credit score.',
            offers: {
              '@type': 'Offer',
              price: '147',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://mrmogulmaker.com/shop'
            },
            brand: {
              '@type': 'Brand',
              name: 'Mr. Mogul Maker'
            }
          },
          {
            '@type': 'Product',
            name: 'Business Plan Template',
            description: 'Professional business plan template used by funded businesses. Includes financial projections and market analysis.',
            offers: {
              '@type': 'Offer',
              price: '127',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://mrmogulmaker.com/shop'
            },
            brand: {
              '@type': 'Brand',
              name: 'Mr. Mogul Maker'
            }
          },
          {
            '@type': 'Product',
            name: 'Wealth Multiplication Masterclass',
            description: 'Advanced strategies for multiplying wealth through investments, acquisitions, and passive income streams.',
            offers: {
              '@type': 'Offer',
              price: '697',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://mrmogulmaker.com/shop'
            },
            brand: {
              '@type': 'Brand',
              name: 'Mr. Mogul Maker'
            }
          },
          {
            '@type': 'Product',
            name: 'Credit Score Optimization',
            description: 'Learn how to optimize your credit score to 750+. Understand credit algorithms and scoring factors.',
            offers: {
              '@type': 'Offer',
              price: '197',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://mrmogulmaker.com/shop'
            },
            brand: {
              '@type': 'Brand',
              name: 'Mr. Mogul Maker'
            }
          },
          {
            '@type': 'Product',
            name: 'Funding Application Bundle',
            description: 'Complete collection of funding applications, forms, and supporting documents ready to use.',
            offers: {
              '@type': 'Offer',
              price: '247',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://mrmogulmaker.com/shop'
            },
            brand: {
              '@type': 'Brand',
              name: 'Mr. Mogul Maker'
            }
          },
          {
            '@type': 'Product',
            name: '3M Framework Guide',
            description: 'Deep dive into the Make, Manage, Multiply framework. The foundation of wealth building.',
            offers: {
              '@type': 'Offer',
              price: '77',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://mrmogulmaker.com/shop'
            },
            brand: {
              '@type': 'Brand',
              name: 'Mr. Mogul Maker'
            }
          }
        ]
      }
    }
  )
})

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
              <a href="/shop" class="text-white hover:text-yellow-400 transition">Shop</a>
              <a href="/speaking" class="text-yellow-400 font-semibold">Speaking</a>
              <a href="/blog" class="text-white hover:text-yellow-400 transition">Blog</a>
              <a href="/#programs" class="text-white hover:text-yellow-400 transition">Programs</a>
              <a href="/#contact" class="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">Book Me</a>
            </div>
            <button id="mobile-menu-btn-speaking" class="md:hidden text-white">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu-speaking" class="hidden fixed inset-0 bg-black/95 z-40 pt-20">
        <div class="flex flex-col items-center space-y-8 mt-12">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/shop" class="text-white text-2xl hover:text-yellow-400 transition">Shop</a>
          <a href="/speaking" class="text-yellow-400 text-2xl font-semibold">Speaking</a>
          <a href="/blog" class="text-white text-2xl hover:text-yellow-400 transition">Blog</a>
          <a href="/#programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
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
            <span class="text-yellow-400">Business Credit Speaker</span> for Corporate Events
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Inspire your audience with proven strategies on business credit, funding, and wealth building. 
            Dynamic keynotes that transform entrepreneurs from consumers to creditors.
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

      {/* Calendly Booking Section */}
      <section id="booking" class="bg-white py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Antonio for Your <span class="text-yellow-400">Event</span>
            </h2>
            <p class="text-xl text-gray-600">
              Schedule a call to discuss your event, audience, and how we can create maximum impact together.
            </p>
          </div>

          {/* Calendly Embed */}
          <div class="bg-gray-50 rounded-3xl p-8 shadow-xl">
            <div class="calendly-inline-widget" data-url="https://calendly.com/mrmogulmaker-44?hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
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
        document.getElementById('mobile-menu-btn-speaking').addEventListener('click', function() {
          document.getElementById('mobile-menu-speaking').classList.toggle('hidden');
        });
        
        document.querySelectorAll('#mobile-menu-speaking a').forEach(link => {
          link.addEventListener('click', function() {
            document.getElementById('mobile-menu-speaking').classList.add('hidden');
          });
        });
      `}} />
    </div>,
    {
      title: 'Book Antonio Cook for Speaking Engagements | Business Credit Keynote Speaker',
      description: 'Hire Antonio Cook (Mr. Mogul Maker) for corporate events, conferences, and workshops. Expert keynote speaker on business credit, funding, financial literacy, and wealth building.',
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
        description: 'Professional keynote speaking services for corporate events, conferences, and workshops on business credit, funding, and financial literacy',
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
              <a href="/shop" class="text-white hover:text-yellow-400 transition">Shop</a>
              <a href="/speaking" class="text-white hover:text-yellow-400 transition">Speaking</a>
              <a href="/blog" class="text-yellow-400 font-semibold">Blog</a>
              <a href="/#programs" class="text-white hover:text-yellow-400 transition">Programs</a>
            </div>
            <button id="mobile-menu-btn-blog" class="md:hidden text-white">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu-blog" class="hidden fixed inset-0 bg-black/95 z-40 pt-20">
        <div class="flex flex-col items-center space-y-8 mt-12">
          <a href="/" class="text-white text-2xl hover:text-yellow-400 transition">Home</a>
          <a href="/shop" class="text-white text-2xl hover:text-yellow-400 transition">Shop</a>
          <a href="/speaking" class="text-white text-2xl hover:text-yellow-400 transition">Speaking</a>
          <a href="/blog" class="text-yellow-400 text-2xl font-semibold">Blog</a>
          <a href="/#programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
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
        document.getElementById('mobile-menu-btn-blog').addEventListener('click', function() {
          document.getElementById('mobile-menu-blog').classList.toggle('hidden');
        });
        
        document.querySelectorAll('#mobile-menu-blog a').forEach(link => {
          link.addEventListener('click', function() {
            document.getElementById('mobile-menu-blog').classList.add('hidden');
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

export default app
