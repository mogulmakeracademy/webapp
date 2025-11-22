/**
 * Enhanced Animations & Interactive Effects
 * Mr. Mogul Maker Website
 */

(function() {
  'use strict';

  // ============================================
  // 1. SCROLL FADE-IN OBSERVER
  // ============================================
  
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });

    // Observe cards and other elements
    document.querySelectorAll('.card-lift, .card-lift-subtle').forEach(card => {
      card.classList.add('fade-in-section');
      observer.observe(card);
    });
  }

  // ============================================
  // 2. ANIMATED STAT COUNTERS
  // ============================================
  
  function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = Math.ceil(target) + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.ceil(current) + suffix;
      }
    }, 16);
  }

  function initStatCounters() {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-number');
          statNumbers.forEach(stat => {
            const targetText = stat.getAttribute('data-value') || stat.textContent;
            const suffix = targetText.match(/[+KM]/g)?.join('') || '';
            const target = parseInt(targetText.replace(/[^0-9]/g, ''));
            
            if (!isNaN(target)) {
              animateCounter(stat, target, 2000, suffix);
            }
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-grid')?.closest('section');
    if (statsSection) {
      // Add data-value attributes to stat numbers for animation
      const statNumbers = statsSection.querySelectorAll('.text-3xl, .text-4xl');
      statNumbers.forEach(stat => {
        if (!stat.classList.contains('stat-number')) {
          stat.classList.add('stat-number');
          stat.setAttribute('data-value', stat.textContent);
        }
      });
      
      statsObserver.observe(statsSection);
    }
  }

  // ============================================
  // 3. NAVIGATION SCROLL EFFECTS
  // ============================================
  
  function initNavScrollEffects() {
    let lastScroll = 0;
    const nav = document.querySelector('nav');
    
    if (!nav) return;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ============================================
  // 4. SMOOTH SCROLL TO ANCHORS
  // ============================================
  
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ============================================
  // 5. BUTTON RIPPLE EFFECT
  // ============================================
  
  function initButtonRipples() {
    document.querySelectorAll('.btn-enhanced').forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = this.querySelector('::before');
        // Ripple animation is handled by CSS
        // This just ensures the element is present
      });
    });
  }

  // ============================================
  // 6. VIDEO LAZY LOADING
  // ============================================
  
  function initVideoLazyLoad() {
    const heroVideo = document.querySelector('.hero-video');
    
    if (!heroVideo) return;

    // Check if video source exists
    const videoSource = heroVideo.querySelector('source');
    if (!videoSource || !videoSource.src) {
      console.info('Hero video not configured yet - using fallback image');
      return;
    }

    // Play video when loaded
    heroVideo.addEventListener('loadeddata', () => {
      heroVideo.play().catch(err => {
        console.warn('Video autoplay failed:', err);
      });
    });

    // Fallback to poster if video fails
    heroVideo.addEventListener('error', () => {
      console.warn('Video failed to load - using poster image');
      heroVideo.style.display = 'none';
    });
  }

  // ============================================
  // 7. PARALLAX EFFECT (SUBTLE)
  // ============================================
  
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-parallax') || 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    }, { passive: true });
  }

  // ============================================
  // 8. CARD STAGGER ANIMATION
  // ============================================
  
  function initCardStagger() {
    const cardGroups = document.querySelectorAll('.stats-grid, .grid');
    
    cardGroups.forEach(group => {
      const cards = group.querySelectorAll('div[class*="col-"], > div');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
      });
    });
  }

  // ============================================
  // 9. SOCIAL ICON ANIMATIONS
  // ============================================
  
  function initSocialIcons() {
    const socialIcons = document.querySelectorAll('a[href*="youtube"], a[href*="instagram"], a[href*="facebook"], a[href*="tiktok"]');
    
    socialIcons.forEach(icon => {
      icon.classList.add('icon-bounce');
      
      // Add pulse effect on hover
      icon.addEventListener('mouseenter', () => {
        icon.classList.add('pulse-subtle');
      });
      
      icon.addEventListener('mouseleave', () => {
        icon.classList.remove('pulse-subtle');
      });
    });
  }

  // ============================================
  // 10. MOBILE MENU ENHANCEMENTS
  // ============================================
  
  function initMobileMenuEnhancements() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuBtn || !mobileMenu) return;

    // Add animation classes to mobile menu links
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach((link, index) => {
      link.style.animationDelay = `${index * 0.05}s`;
    });

    // Enhanced open animation
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuLinks.forEach(link => link.classList.add('fade-in'));
      } else {
        menuLinks.forEach(link => link.classList.remove('fade-in'));
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
      }
    });
  }

  // ============================================
  // 11. IMAGE LAZY LOADING OBSERVER
  // ============================================
  
  function initImageLazyLoad() {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // 12. PERFORMANCE MONITORING
  // ============================================
  
  function logPerformance() {
    if (window.performance && window.performance.timing) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = window.performance.timing;
          const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
          console.info(`🚀 Page loaded in ${pageLoadTime}ms`);
        }, 0);
      });
    }
  }

  // ============================================
  // 13. INITIALIZE ALL EFFECTS
  // ============================================
  
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    console.log('🎨 Initializing enhanced animations...');

    try {
      initScrollAnimations();
      initStatCounters();
      initNavScrollEffects();
      initSmoothScroll();
      initButtonRipples();
      initVideoLazyLoad();
      initParallax();
      initCardStagger();
      initSocialIcons();
      initMobileMenuEnhancements();
      initImageLazyLoad();
      logPerformance();

      console.log('✅ Enhanced animations initialized successfully!');
    } catch (error) {
      console.error('❌ Error initializing animations:', error);
    }
  }

  // Start initialization
  init();

})();
