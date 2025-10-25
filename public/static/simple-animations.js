/**
 * Enhanced Animations JavaScript
 * Premium animations that are safe and reliable
 * Version: 2.0.0
 */

(function() {
  'use strict';

  // ==========================================
  // CRITICAL: Wait for page to be fully loaded
  // ==========================================
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    console.log('✨ Initializing enhanced animations...');
    
    try {
      // Only add animations AFTER everything is loaded
      addScrollProgress();
      addMobileMenuToggle();
      addFadeInElements();
      addScrollReveal();
      addNavAnimations();
      addButtonEnhancements();
      addIconAnimations();
      addCardGlow();
      addParallaxLite();
      
      console.log('✅ Enhanced animations activated!');
    } catch (error) {
      console.error('Animation error (non-critical):', error);
      // Do nothing - page still works without animations
    }
  }

  // ==========================================
  // 1. SCROLL PROGRESS BAR
  // ==========================================
  
  function addScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  // ==========================================
  // 2. MOBILE MENU TOGGLE
  // ==========================================
  
  function addMobileMenuToggle() {
    // Home page
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      
      // Close when clicking outside
      mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      });
    }

    // Shop page
    const mobileMenuBtnShop = document.getElementById('mobile-menu-btn-shop');
    const mobileMenuShop = document.getElementById('mobile-menu-shop');
    
    if (mobileMenuBtnShop && mobileMenuShop) {
      mobileMenuBtnShop.addEventListener('click', () => {
        mobileMenuShop.classList.toggle('hidden');
      });
      
      mobileMenuShop.addEventListener('click', (e) => {
        if (e.target === mobileMenuShop) {
          mobileMenuShop.classList.add('hidden');
        }
      });
    }

    // Speaking page
    const mobileMenuBtnSpeaking = document.getElementById('mobile-menu-btn-speaking');
    const mobileMenuSpeaking = document.getElementById('mobile-menu-speaking');
    
    if (mobileMenuBtnSpeaking && mobileMenuSpeaking) {
      mobileMenuBtnSpeaking.addEventListener('click', () => {
        mobileMenuSpeaking.classList.toggle('hidden');
      });
      
      mobileMenuSpeaking.addEventListener('click', (e) => {
        if (e.target === mobileMenuSpeaking) {
          mobileMenuSpeaking.classList.add('hidden');
        }
      });
    }

    // Blog page
    const mobileMenuBtnBlog = document.getElementById('mobile-menu-btn-blog');
    const mobileMenuBlog = document.getElementById('mobile-menu-blog');
    
    if (mobileMenuBtnBlog && mobileMenuBlog) {
      mobileMenuBtnBlog.addEventListener('click', () => {
        mobileMenuBlog.classList.toggle('hidden');
      });
      
      mobileMenuBlog.addEventListener('click', (e) => {
        if (e.target === mobileMenuBlog) {
          mobileMenuBlog.classList.add('hidden');
        }
      });
    }
  }

  // ==========================================
  // 3. ADD FADE IN EFFECT TO SECTIONS
  // ==========================================
  
  function addFadeInElements() {
    // Add fade-in class to major sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      // Stagger the animations slightly
      setTimeout(() => {
        section.classList.add('fade-in-element');
      }, index * 50);
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.bg-gray-50, .bg-gradient-to-br');
    cards.forEach(card => {
      if (!card.querySelector('img')) { // Don't add to hero section
        card.classList.add('hover-lift');
      }
    });

    // Add hover scale to buttons
    const buttons = document.querySelectorAll('a[href*="skool"], a[href*="youtube"], a[href*="#"]');
    buttons.forEach(btn => {
      if (btn.querySelector('i')) { // Has an icon
        btn.classList.add('hover-scale');
      }
    });
  }

  // ==========================================
  // 4. SCROLL-TRIGGERED REVEAL ANIMATIONS
  // ==========================================
  
  function addScrollReveal() {
    const revealElements = document.querySelectorAll('section, .bg-gray-50, .bg-gradient-to-br');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal', 'revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el, index) => {
      // Don't animate hero section
      if (index > 0) {
        el.classList.add('scroll-reveal');
        observer.observe(el);
      }
    });
  }

  // ==========================================
  // 5. NAVIGATION ENHANCEMENTS
  // ==========================================
  
  function addNavAnimations() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      // Add shine effect to logo
      if (link.querySelector('img')) {
        link.classList.add('shine-effect');
      }
    });

    // Add glow to scroll progress
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      progressBar.classList.add('glow');
    }
  }

  // ==========================================
  // 6. BUTTON ENHANCEMENTS
  // ==========================================
  
  function addButtonEnhancements() {
    // Add ripple effect to primary buttons
    const primaryButtons = document.querySelectorAll('.bg-yellow-400, .bg-black');
    primaryButtons.forEach(btn => {
      if (btn.tagName === 'A' || btn.tagName === 'BUTTON') {
        btn.classList.add('btn-ripple');
      }
    });

    // Add pulse to main CTA buttons
    const ctaButtons = document.querySelectorAll('a[href*="skool"]');
    ctaButtons.forEach(btn => {
      btn.classList.add('btn-pulse');
    });
  }

  // ==========================================
  // 7. ICON ANIMATIONS
  // ==========================================
  
  function addIconAnimations() {
    // Shopping cart icon - bounce on hover
    const cartIcons = document.querySelectorAll('.fa-shopping-cart');
    cartIcons.forEach(icon => {
      if (icon.closest('a') || icon.closest('button')) {
        icon.closest('a, button').classList.add('icon-bounce-hover');
      }
    });

    // Social media icons - spin on hover
    const socialIcons = document.querySelectorAll('.fab');
    socialIcons.forEach(icon => {
      if (icon.closest('a')) {
        icon.closest('a').classList.add('icon-spin-hover');
      }
    });

    // Crown icons - shake on hover
    const crownIcons = document.querySelectorAll('.fa-crown');
    crownIcons.forEach(icon => {
      if (icon.closest('div')) {
        icon.closest('div').classList.add('icon-shake-hover');
      }
    });
  }

  // ==========================================
  // 8. CARD GLOW EFFECT
  // ==========================================
  
  function addCardGlow() {
    // Add glow to program cards
    const programCards = document.querySelectorAll('#programs .bg-gradient-to-br');
    programCards.forEach(card => {
      card.classList.add('card-glow');
    });

    // Add glow to podcast cards
    const podcastCards = document.querySelectorAll('#podcasts .bg-gradient-to-br');
    podcastCards.forEach(card => {
      card.classList.add('card-glow');
    });
  }

  // ==========================================
  // 9. PARALLAX LITE (Safe)
  // ==========================================
  
  function addParallaxLite() {
    const hero = document.querySelector('section:first-of-type');
    if (!hero) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = hero.querySelectorAll('.text-white, h1, p');
      
      parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.05;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    }, { passive: true });
  }

  // ==========================================
  // 10. FLOATING ELEMENTS
  // ==========================================
  
  function addFloatingAnimation() {
    // Add floating to icons in hero section
    const heroIcons = document.querySelectorAll('section:first-of-type i.fa-crown');
    heroIcons.forEach(icon => {
      icon.classList.add('float-gentle');
    });
  }

  // ==========================================
  // 11. TEXT GRADIENT ANIMATION
  // ==========================================
  
  function addTextGradient() {
    // Add gradient animation to headings with yellow text
    const yellowHeadings = document.querySelectorAll('.text-yellow-400');
    yellowHeadings.forEach(heading => {
      if (heading.tagName === 'H1' || heading.tagName === 'H2' || heading.tagName === 'SPAN') {
        heading.classList.add('text-gradient-animate');
      }
    });
  }

  // ==========================================
  // 12. SMOOTH SCROLL TO ANCHORS
  // ==========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

})();
