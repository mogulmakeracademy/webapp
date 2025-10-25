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
              <a href="/" class="text-2xl font-bold text-yellow-400">
                <span class="text-white">Mr.</span> Mogul Maker
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#about" class="text-white hover:text-yellow-400 transition">About</a>
              <a href="#programs" class="text-white hover:text-yellow-400 transition">Programs</a>
              <a href="#podcasts" class="text-white hover:text-yellow-400 transition">Podcasts</a>
              <a href="#contact" class="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">Get Started</a>
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
          <a href="#about" class="text-white text-2xl hover:text-yellow-400 transition">About</a>
          <a href="#programs" class="text-white text-2xl hover:text-yellow-400 transition">Programs</a>
          <a href="#podcasts" class="text-white text-2xl hover:text-yellow-400 transition">Podcasts</a>
          <a href="#contact" class="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-xl">Get Started</a>
        </div>
      </div>

      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center pt-20">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmRiNGQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJoNGMxLjEgMCAyIC45IDIgMnY0YzAgMS4xLS45IDItMiAyaC00Yy0xLjEgMC0yLS45LTItMnYtNHptMCAxOGMwLTEuMS45LTIgMi0yaDRjMS4xIDAgMiAuOSAyIDJ2NGMwIDEuMS0uOSAyLTIgMmgtNGMtMS4xIDAtMi0uOS0yLTJ2LTR6bTE4IDBjMC0xLjEuOS0yIDItMmg0YzEuMSAwIDIgLjkgMiAydjRjMCAxLjEtLjkgMi0yIDJoLTRjLTEuMSAwLTItLjktMi0ydi00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid md:grid-cols-2 gap-12 items-center">
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
            
            <div class="relative">
              <div class="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full"></div>
              <div class="relative bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 shadow-2xl">
                <div class="bg-black/50 backdrop-blur rounded-2xl p-8 text-white">
                  <h3 class="text-2xl font-bold mb-4">📊 Our Success Framework</h3>
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <i class="fas fa-check-circle text-yellow-400 text-xl"></i>
                      <span>Make: Business & Income Strategies</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <i class="fas fa-check-circle text-yellow-400 text-xl"></i>
                      <span>Manage: Credit & Protection Systems</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <i class="fas fa-check-circle text-yellow-400 text-xl"></i>
                      <span>Multiply: Funding & Wealth Building</span>
                    </div>
                  </div>
                  <div class="mt-6 pt-6 border-t border-white/20">
                    <p class="text-yellow-400 font-semibold text-center">Money Follows Management™</p>
                  </div>
                </div>
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
              <h3 class="text-2xl font-bold text-yellow-400 mb-4">Mr. Mogul Maker</h3>
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
    </div>
  )
})

export default app
