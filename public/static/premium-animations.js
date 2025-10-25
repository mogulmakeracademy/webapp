/**
 * Premium Animations & Interactions System
 * Netflix/Disney-level user experience
 * Version: 1.0.0
 */

(function() {
  'use strict';

  // ==========================================
  // 1. PAGE TRANSITION SYSTEM
  // ==========================================
  
  const PageTransitions = {
    init() {
      // Create loading overlay
      this.createLoadingOverlay();
      
      // Intercept all internal links
      this.setupLinkInterception();
      
      // Fade in page on load
      this.fadeInPage();
      
      // Handle browser back/forward
      window.addEventListener('popstate', () => {
        this.transitionToPage(window.location.href, false);
      });
    },
    
    createLoadingOverlay() {
      // Safety check: don't create if body doesn't exist
      if (!document.body) {
        console.error('Cannot create overlay: document.body not found');
        return;
      }
      
      const overlay = document.createElement('div');
      overlay.id = 'page-transition-overlay';
      overlay.innerHTML = `
        <div class="transition-content">
          <div class="spinner"></div>
          <p class="transition-text">Loading...</p>
        </div>
      `;
      document.body.appendChild(overlay);
      
      // Safety timeout: force remove overlay after 5 seconds
      setTimeout(() => {
        if (overlay && overlay.classList.contains('active')) {
          console.warn('Overlay stuck, force removing');
          overlay.classList.remove('active');
        }
      }, 5000);
    },
    
    setupLinkInterception() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        
        // Only intercept internal links
        if (href && 
            href.startsWith('/') && 
            !href.startsWith('//') &&
            !link.hasAttribute('target') &&
            !link.hasAttribute('data-no-transition')) {
          
          e.preventDefault();
          this.transitionToPage(href, true);
        }
      });
    },
    
    transitionToPage(url, pushState = true) {
      const overlay = document.getElementById('page-transition-overlay');
      
      // Fade out current page
      overlay.classList.add('active');
      
      setTimeout(() => {
        // Navigate to new page
        if (pushState) {
          window.history.pushState({}, '', url);
        }
        window.location.href = url;
      }, 300);
    },
    
    fadeInPage() {
      const overlay = document.getElementById('page-transition-overlay');
      
      // Ensure overlay exists before trying to manipulate it
      if (!overlay) {
        console.warn('Page transition overlay not found');
        return;
      }
      
      // Wait for page to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(() => {
            if (overlay) overlay.classList.remove('active');
          }, 100);
        });
      } else {
        setTimeout(() => {
          if (overlay) overlay.classList.remove('active');
        }, 100);
      }
    }
  };

  // ==========================================
  // 2. SCROLL ANIMATIONS
  // ==========================================
  
  const ScrollAnimations = {
    init() {
      this.setupIntersectionObserver();
      this.markAnimatableElements();
    },
    
    markAnimatableElements() {
      // Auto-detect elements that should animate
      const selectors = [
        'section',
        '.card',
        'article',
        '.feature-item',
        '.product-card',
        '.testimonial',
        'h1', 'h2', 'h3',
        '.btn-primary',
        'img'
      ];
      
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
          if (!el.hasAttribute('data-animate')) {
            el.setAttribute('data-animate', 'fade-up');
            el.setAttribute('data-delay', Math.min(index * 50, 300));
          }
        });
      });
    },
    
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute('data-delay') || 0;
            
            setTimeout(() => {
              el.classList.add('animated');
            }, parseInt(delay));
            
            observer.unobserve(el);
          }
        });
      }, options);
      
      // Observe all elements with data-animate
      document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
      });
    }
  };

  // ==========================================
  // 3. PARALLAX EFFECTS
  // ==========================================
  
  const ParallaxEffects = {
    init() {
      this.setupParallax();
      window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    },
    
    setupParallax() {
      // Add parallax to hero images
      document.querySelectorAll('.hero-parallax, section.relative img').forEach(el => {
        el.classList.add('parallax-element');
      });
    },
    
    handleScroll() {
      const scrolled = window.pageYOffset;
      
      document.querySelectorAll('.parallax-element').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const speed = 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        }
      });
    }
  };

  // ==========================================
  // 4. MOBILE SWIPE GESTURES
  // ==========================================
  
  const SwipeGestures = {
    init() {
      this.setupModalSwipe();
      this.setupMobileMenuSwipe();
    },
    
    setupModalSwipe() {
      document.querySelectorAll('[id$="-modal"]').forEach(modal => {
        let startY = 0;
        let currentY = 0;
        
        const modalContent = modal.querySelector('div[class*="max-w"]');
        if (!modalContent) return;
        
        modalContent.addEventListener('touchstart', (e) => {
          startY = e.touches[0].clientY;
        }, { passive: true });
        
        modalContent.addEventListener('touchmove', (e) => {
          currentY = e.touches[0].clientY;
          const diff = currentY - startY;
          
          if (diff > 0) {
            modalContent.style.transform = `translateY(${diff}px)`;
            modalContent.style.opacity = 1 - (diff / 300);
          }
        }, { passive: true });
        
        modalContent.addEventListener('touchend', () => {
          const diff = currentY - startY;
          
          if (diff > 100) {
            // Swipe down to close
            modal.classList.add('hidden');
          }
          
          // Reset
          modalContent.style.transform = '';
          modalContent.style.opacity = '';
          startY = 0;
          currentY = 0;
        });
      });
    },
    
    setupMobileMenuSwipe() {
      let startX = 0;
      let currentX = 0;
      
      document.addEventListener('touchstart', (e) => {
        if (e.touches[0].clientX < 50) {
          startX = e.touches[0].clientX;
        }
      }, { passive: true });
      
      document.addEventListener('touchmove', (e) => {
        if (startX > 0) {
          currentX = e.touches[0].clientX;
        }
      }, { passive: true });
      
      document.addEventListener('touchend', () => {
        const diff = currentX - startX;
        
        if (diff > 100) {
          // Swipe right to open menu
          const mobileMenu = document.querySelector('[id*="mobile-menu"]');
          if (mobileMenu) {
            mobileMenu.classList.remove('hidden');
          }
        }
        
        startX = 0;
        currentX = 0;
      });
    }
  };

  // ==========================================
  // 5. SKELETON LOADERS
  // ==========================================
  
  const SkeletonLoaders = {
    init() {
      this.createProductSkeletons();
    },
    
    createProductSkeletons() {
      // Show skeleton loaders for products
      document.querySelectorAll('.product-grid').forEach(grid => {
        const skeleton = this.createSkeleton();
        grid.insertAdjacentHTML('beforebegin', skeleton);
        
        // Remove after products load
        setTimeout(() => {
          document.querySelectorAll('.skeleton-loader').forEach(s => s.remove());
        }, 1000);
      });
    },
    
    createSkeleton() {
      return `
        <div class="skeleton-loader">
          <div class="skeleton-card">
            <div class="skeleton-image"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-button"></div>
          </div>
        </div>
      `;
    }
  };

  // ==========================================
  // 6. MICRO-INTERACTIONS
  // ==========================================
  
  const MicroInteractions = {
    init() {
      this.setupButtonEffects();
      this.setupCardHoverEffects();
      this.setupInputFocus();
    },
    
    setupButtonEffects() {
      document.querySelectorAll('button, .btn, a[class*="bg-"]').forEach(btn => {
        // Ripple effect on click
        btn.addEventListener('click', (e) => {
          const ripple = document.createElement('span');
          ripple.classList.add('ripple-effect');
          
          const rect = btn.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;
          
          ripple.style.width = ripple.style.height = `${size}px`;
          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;
          
          btn.style.position = 'relative';
          btn.style.overflow = 'hidden';
          btn.appendChild(ripple);
          
          setTimeout(() => ripple.remove(), 600);
        });
      });
    },
    
    setupCardHoverEffects() {
      document.querySelectorAll('.product-card, article, .card').forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = '';
        });
      });
    },
    
    setupInputFocus() {
      document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('focus', function() {
          this.parentElement?.classList.add('input-focused');
        });
        
        input.addEventListener('blur', function() {
          this.parentElement?.classList.remove('input-focused');
        });
      });
    }
  };

  // ==========================================
  // 7. ENHANCED MOBILE MENU
  // ==========================================
  
  const EnhancedMobileMenu = {
    init() {
      this.setupMobileMenuAnimations();
      this.setupBackdropBlur();
    },
    
    setupMobileMenuAnimations() {
      document.querySelectorAll('[id*="mobile-menu-btn"]').forEach(btn => {
        btn.addEventListener('click', () => {
          const menuId = btn.id.replace('-btn', '');
          const menu = document.getElementById(menuId);
          
          if (menu) {
            menu.classList.toggle('hidden');
            
            if (!menu.classList.contains('hidden')) {
              // Animate menu items
              menu.querySelectorAll('a').forEach((link, index) => {
                link.style.animation = `slideInRight 0.3s ease ${index * 0.05}s forwards`;
                link.style.opacity = '0';
              });
            }
          }
        });
      });
    },
    
    setupBackdropBlur() {
      document.querySelectorAll('[id*="mobile-menu"]').forEach(menu => {
        if (!menu.classList.contains('hidden')) {
          menu.style.backdropFilter = 'blur(10px)';
        }
      });
    }
  };

  // ==========================================
  // 8. TOUCH OPTIMIZATIONS
  // ==========================================
  
  const TouchOptimizations = {
    init() {
      this.preventDoubleTapZoom();
      this.improveScrolling();
      this.addHapticFeedback();
    },
    
    preventDoubleTapZoom() {
      let lastTap = 0;
      document.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 500 && tapLength > 0) {
          e.preventDefault();
        }
        lastTap = currentTime;
      });
    },
    
    improveScrolling() {
      // Add momentum scrolling
      document.body.style.webkitOverflowScrolling = 'touch';
      
      // Smooth scroll to anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    },
    
    addHapticFeedback() {
      // Vibration feedback for important actions
      document.querySelectorAll('button[type="submit"], .add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
          if ('vibrate' in navigator) {
            navigator.vibrate(10);
          }
        });
      });
    }
  };

  // ==========================================
  // 9. PERFORMANCE OPTIMIZATIONS
  // ==========================================
  
  const PerformanceOptimizations = {
    init() {
      this.lazyLoadImages();
      this.deferNonCriticalCSS();
    },
    
    lazyLoadImages() {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
            }
            
            imageObserver.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    },
    
    deferNonCriticalCSS() {
      // Load non-critical CSS asynchronously
      const links = document.querySelectorAll('link[rel="stylesheet"][data-defer]');
      links.forEach(link => {
        link.media = 'print';
        link.onload = function() {
          this.media = 'all';
        };
      });
    }
  };

  // ==========================================
  // 10. INITIALIZE ALL SYSTEMS
  // ==========================================
  
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initSystems);
    } else {
      initSystems();
    }
  }
  
  function initSystems() {
    console.log('🚀 Initializing Premium Experience Systems...');
    
    try {
      PageTransitions.init();
      ScrollAnimations.init();
      ParallaxEffects.init();
      SwipeGestures.init();
      SkeletonLoaders.init();
      MicroInteractions.init();
      EnhancedMobileMenu.init();
      TouchOptimizations.init();
      PerformanceOptimizations.init();
      
      console.log('✅ Premium Experience Activated!');
      
      // Add loaded class to body
      document.body.classList.add('premium-loaded');
    } catch (error) {
      console.error('❌ Error initializing premium features:', error);
      
      // CRITICAL: Ensure page is visible even if init fails
      const overlay = document.getElementById('page-transition-overlay');
      if (overlay) {
        overlay.classList.remove('active');
        overlay.style.display = 'none';
      }
      
      // Ensure body is visible
      if (document.body) {
        document.body.style.opacity = '1';
        document.body.style.visibility = 'visible';
      }
    }
  }
  
  // Start initialization
  init();
})();
