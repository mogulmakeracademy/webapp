/**
 * Video Carousel for YouTube Embeds
 * Smooth carousel with keyboard and touch support
 * Version: 1.0.0
 */

(function() {
  'use strict';

  let currentSlide = 0;
  let totalSlides = 0;
  let slideContainer = null;
  let indicators = [];
  let autoplayInterval = null;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    slideContainer = document.getElementById('video-slides');
    if (!slideContainer) return;

    const slides = slideContainer.children;
    totalSlides = slides.length;
    indicators = document.querySelectorAll('.video-indicator');

    // Setup navigation buttons
    const prevBtn = document.getElementById('video-prev');
    const nextBtn = document.getElementById('video-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetAutoplay();
      });
    }

    // Setup indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        goToSlide(index);
        resetAutoplay();
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        goToSlide(currentSlide - 1);
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        goToSlide(currentSlide + 1);
        resetAutoplay();
      }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    slideContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slideContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          goToSlide(currentSlide + 1);
        } else {
          // Swipe right - previous slide
          goToSlide(currentSlide - 1);
        }
        resetAutoplay();
      }
    }

    // Start autoplay (optional - commented out by default)
    // startAutoplay();

    console.log('✅ Video carousel initialized');
  }

  function goToSlide(index) {
    // Wrap around
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    currentSlide = index;

    // Update slide position
    const offset = -currentSlide * 100;
    slideContainer.style.transform = `translateX(${offset}%)`;

    // Update indicators (compact version)
    indicators.forEach((indicator, i) => {
      if (i === currentSlide) {
        indicator.classList.remove('bg-gray-300');
        indicator.classList.add('bg-yellow-400');
        indicator.style.width = '20px'; // Active indicator is wider
      } else {
        indicator.classList.remove('bg-yellow-400');
        indicator.classList.add('bg-gray-300');
        indicator.style.width = '10px';
      }
    });

    // Pause all videos except current
    pauseAllVideos();
  }

  function pauseAllVideos() {
    const iframes = document.querySelectorAll('#video-slides iframe');
    iframes.forEach((iframe, index) => {
      if (index !== currentSlide) {
        // Pause video by reloading src (simple method)
        const src = iframe.src;
        if (src.includes('autoplay=1')) {
          iframe.src = src.replace('autoplay=1', 'autoplay=0');
        }
      }
    });
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 10000); // Change slide every 10 seconds
  }

  function resetAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      // Optionally restart autoplay after user interaction
      // startAutoplay();
    }
  }

  // Expose functions globally if needed
  window.videoCarousel = {
    goToSlide,
    next: () => goToSlide(currentSlide + 1),
    prev: () => goToSlide(currentSlide - 1)
  };

})();
