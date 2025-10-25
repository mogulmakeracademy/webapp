/**
 * Mobile-Specific Enhancements
 * Advanced touch interactions and mobile optimizations
 * Version: 1.0.0
 */

(function() {
  'use strict';

  // ==========================================
  // 1. PULL-TO-REFRESH
  // ==========================================
  
  const PullToRefresh = {
    init() {
      let startY = 0;
      let pulling = false;
      const threshold = 80;
      
      const indicator = this.createIndicator();
      document.body.appendChild(indicator);
      
      document.addEventListener('touchstart', (e) => {
        if (window.pageYOffset === 0) {
          startY = e.touches[0].pageY;
          pulling = true;
        }
      }, { passive: true });
      
      document.addEventListener('touchmove', (e) => {
        if (!pulling) return;
        
        const currentY = e.touches[0].pageY;
        const distance = currentY - startY;
        
        if (distance > 0 && distance < threshold * 2) {
          indicator.style.transform = `translateY(${distance}px)`;
          indicator.style.opacity = Math.min(distance / threshold, 1);
          
          if (distance > threshold) {
            indicator.classList.add('ready');
          } else {
            indicator.classList.remove('ready');
          }
        }
      }, { passive: true });
      
      document.addEventListener('touchend', () => {
        if (pulling) {
          const distance = parseFloat(indicator.style.transform.match(/\d+/) || [0])[0];
          
          if (distance > threshold) {
            indicator.classList.add('refreshing');
            setTimeout(() => {
              window.location.reload();
            }, 500);
          } else {
            indicator.style.transform = '';
            indicator.style.opacity = '';
            indicator.classList.remove('ready');
          }
          
          pulling = false;
        }
      });
    },
    
    createIndicator() {
      const div = document.createElement('div');
      div.id = 'pull-to-refresh-indicator';
      div.innerHTML = `
        <div class="refresh-icon">
          <i class="fas fa-sync-alt"></i>
        </div>
        <div class="refresh-text">Pull to refresh</div>
      `;
      return div;
    }
  };

  // ==========================================
  // 2. SWIPE NAVIGATION
  // ==========================================
  
  const SwipeNavigation = {
    init() {
      const pages = ['/shop', '/speaking', '/blog'];
      const currentPath = window.location.pathname;
      const currentIndex = pages.indexOf(currentPath);
      
      if (currentIndex === -1) return;
      
      let startX = 0;
      let startY = 0;
      let endX = 0;
      let endY = 0;
      
      document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
      }, { passive: true });
      
      document.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].pageX;
        endY = e.changedTouches[0].pageY;
        
        const deltaX = endX - startX;
        const deltaY = Math.abs(endY - startY);
        
        // Only trigger if horizontal swipe is dominant
        if (Math.abs(deltaX) > 100 && deltaY < 50) {
          if (deltaX > 0 && currentIndex > 0) {
            // Swipe right - go to previous page
            window.location.href = pages[currentIndex - 1];
          } else if (deltaX < 0 && currentIndex < pages.length - 1) {
            // Swipe left - go to next page
            window.location.href = pages[currentIndex + 1];
          }
        }
      });
    }
  };

  // ==========================================
  // 3. BOTTOM NAVIGATION (Mobile)
  // ==========================================
  
  const BottomNav = {
    init() {
      if (window.innerWidth > 768) return; // Only on mobile
      
      const nav = this.createBottomNav();
      document.body.appendChild(nav);
      
      // Hide on scroll down, show on scroll up
      let lastScroll = 0;
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
          nav.style.transform = 'translateY(100%)';
        } else {
          nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
      }, { passive: true });
    },
    
    createBottomNav() {
      const nav = document.createElement('nav');
      nav.id = 'mobile-bottom-nav';
      nav.innerHTML = `
        <a href="/" class="nav-item ${window.location.pathname === '/' ? 'active' : ''}">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </a>
        <a href="/shop" class="nav-item ${window.location.pathname === '/shop' ? 'active' : ''}">
          <i class="fas fa-shopping-bag"></i>
          <span>Shop</span>
        </a>
        <a href="/speaking" class="nav-item ${window.location.pathname === '/speaking' ? 'active' : ''}">
          <i class="fas fa-microphone"></i>
          <span>Speaking</span>
        </a>
        <a href="/blog" class="nav-item ${window.location.pathname === '/blog' ? 'active' : ''}">
          <i class="fas fa-blog"></i>
          <span>Blog</span>
        </a>
      `;
      return nav;
    }
  };

  // ==========================================
  // 4. ENHANCED CART (Mobile)
  // ==========================================
  
  const MobileCart = {
    init() {
      this.enhanceCartModal();
      this.addSwipeToClose();
    },
    
    enhanceCartModal() {
      const cartModal = document.getElementById('cart-modal');
      if (!cartModal) return;
      
      // Make cart slide up from bottom on mobile
      if (window.innerWidth <= 768) {
        const modalContent = cartModal.querySelector('.max-w-4xl');
        if (modalContent) {
          modalContent.style.position = 'fixed';
          modalContent.style.bottom = '0';
          modalContent.style.left = '0';
          modalContent.style.right = '0';
          modalContent.style.margin = '0';
          modalContent.style.maxHeight = '85vh';
          modalContent.style.borderRadius = '20px 20px 0 0';
          modalContent.style.animation = 'slideUpFromBottom 0.3s ease';
        }
      }
    },
    
    addSwipeToClose() {
      const cartModal = document.getElementById('cart-modal');
      if (!cartModal) return;
      
      let startY = 0;
      let currentY = 0;
      const modalContent = cartModal.querySelector('.max-w-4xl');
      
      if (modalContent) {
        modalContent.addEventListener('touchstart', (e) => {
          startY = e.touches[0].clientY;
        }, { passive: true });
        
        modalContent.addEventListener('touchmove', (e) => {
          currentY = e.touches[0].clientY;
          const diff = currentY - startY;
          
          if (diff > 0) {
            modalContent.style.transform = `translateY(${diff}px)`;
          }
        }, { passive: true });
        
        modalContent.addEventListener('touchend', () => {
          const diff = currentY - startY;
          
          if (diff > 100) {
            cartModal.classList.add('hidden');
          }
          
          modalContent.style.transform = '';
          startY = 0;
          currentY = 0;
        });
      }
    }
  };

  // ==========================================
  // 5. FLOATING ACTION BUTTON (FAB)
  // ==========================================
  
  const FloatingActionButton = {
    init() {
      if (window.innerWidth > 768) return;
      
      const fab = this.createFAB();
      document.body.appendChild(fab);
      
      // Hide when scrolling, show when stopped
      let scrollTimer;
      window.addEventListener('scroll', () => {
        fab.style.opacity = '0.3';
        
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          fab.style.opacity = '1';
        }, 150);
      }, { passive: true });
      
      fab.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },
    
    createFAB() {
      const fab = document.createElement('button');
      fab.id = 'scroll-to-top-fab';
      fab.innerHTML = '<i class="fas fa-arrow-up"></i>';
      fab.setAttribute('aria-label', 'Scroll to top');
      return fab;
    }
  };

  // ==========================================
  // 6. SMART APP BANNER
  // ==========================================
  
  const SmartAppBanner = {
    init() {
      // Detect if already dismissed
      if (localStorage.getItem('app-banner-dismissed')) return;
      
      // Only show on mobile
      if (window.innerWidth > 768) return;
      
      const banner = this.createBanner();
      document.body.insertBefore(banner, document.body.firstChild);
      
      // Dismiss button
      banner.querySelector('.dismiss-banner').addEventListener('click', () => {
        banner.style.transform = 'translateY(-100%)';
        setTimeout(() => banner.remove(), 300);
        localStorage.setItem('app-banner-dismissed', 'true');
      });
    },
    
    createBanner() {
      const banner = document.createElement('div');
      banner.id = 'smart-app-banner';
      banner.innerHTML = `
        <div class="banner-content">
          <img src="/mr-mogul-maker-logo.png" alt="MMM Logo" class="banner-icon">
          <div class="banner-text">
            <strong>Mr. Mogul Maker</strong>
            <span>Get the full experience</span>
          </div>
          <button class="banner-btn">Open</button>
          <button class="dismiss-banner"><i class="fas fa-times"></i></button>
        </div>
      `;
      return banner;
    }
  };

  // ==========================================
  // 7. TOUCH FEEDBACK ENHANCEMENTS
  // ==========================================
  
  const TouchFeedback = {
    init() {
      this.addTouchHighlight();
      this.preventGhostClicks();
    },
    
    addTouchHighlight() {
      const style = document.createElement('style');
      style.textContent = `
        * {
          -webkit-tap-highlight-color: rgba(255, 219, 77, 0.2);
        }
      `;
      document.head.appendChild(style);
    },
    
    preventGhostClicks() {
      // Prevent 300ms delay on mobile
      document.addEventListener('touchstart', () => {}, { passive: true });
    }
  };

  // ==========================================
  // 8. VIEWPORT HEIGHT FIX (Mobile Safari)
  // ==========================================
  
  const ViewportFix = {
    init() {
      // Fix for mobile safari vh units
      const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      setVH();
      window.addEventListener('resize', setVH);
      window.addEventListener('orientationchange', setVH);
    }
  };

  // ==========================================
  // 9. GESTURE INDICATORS
  // ==========================================
  
  const GestureIndicators = {
    init() {
      // Show swipe hints on first visit
      if (!localStorage.getItem('gesture-hints-shown')) {
        this.showSwipeHints();
        localStorage.setItem('gesture-hints-shown', 'true');
      }
    },
    
    showSwipeHints() {
      const hint = document.createElement('div');
      hint.id = 'gesture-hint';
      hint.innerHTML = `
        <div class="hint-content">
          <i class="fas fa-hand-pointer"></i>
          <p>Swipe left/right to navigate</p>
          <p>Pull down to refresh</p>
        </div>
      `;
      document.body.appendChild(hint);
      
      setTimeout(() => {
        hint.style.opacity = '0';
        setTimeout(() => hint.remove(), 300);
      }, 3000);
    }
  };

  // ==========================================
  // 10. INITIALIZE ALL MOBILE FEATURES
  // ==========================================
  
  function initMobileFeatures() {
    // Only initialize on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 768;
    
    if (isMobile || isSmallScreen) {
      console.log('📱 Initializing Mobile Enhancements...');
      
      try {
        PullToRefresh.init();
        SwipeNavigation.init();
        BottomNav.init();
        MobileCart.init();
        FloatingActionButton.init();
        SmartAppBanner.init();
        TouchFeedback.init();
        ViewportFix.init();
        GestureIndicators.init();
        
        console.log('✅ Mobile Enhancements Activated!');
      } catch (error) {
        console.error('❌ Error initializing mobile features:', error);
      }
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileFeatures);
  } else {
    initMobileFeatures();
  }
})();
