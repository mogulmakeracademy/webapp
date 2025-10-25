/**
 * Simple, Safe Animations JavaScript
 * Adds animation classes AFTER page content is visible
 * Version: 1.0.0
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
    console.log('✨ Initializing simple animations...');
    
    try {
      // Only add animations AFTER everything is loaded
      addScrollProgress();
      addMobileMenuToggle();
      addFadeInElements();
      
      console.log('✅ Simple animations activated!');
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

})();
