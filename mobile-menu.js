// Enhanced mobile menu functionality with better touch support
document.addEventListener('DOMContentLoaded', function() {
    // Inject sticky header styles globally (for pages without common.css)
    try {
        if (!document.getElementById('nx-sticky-header-style')) {
            const style = document.createElement('style');
            style.id = 'nx-sticky-header-style';
            style.textContent = `
                .header { 
                    position: sticky !important; 
                    top: 0 !important; 
                    z-index: 1000 !important; 
                    transition: padding 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease; 
                }
                .header.header--scrolled { 
                    padding-top: 10px; 
                    padding-bottom: 10px; 
                    background: rgba(10, 10, 10, 0.6); 
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); 
                }
                @media (max-width: 768px) {
                    .header.header--scrolled { 
                        padding-top: 8px; 
                        padding-bottom: 8px; 
                    }
                }
            `;
            document.head.appendChild(style);
        }
    } catch (e) {
        // no-op if style injection fails
    }

    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    // Active menu highlight for Blog pages (works regardless of mobile menu presence)
    try {
        var path = location.pathname;
        var isBlog = (path === '/blog.html' || path.indexOf('/blog/') === 0);
        if (isBlog) {
            document.querySelectorAll('a[href="/blog.html"]').forEach(function(a) {
                a.classList.add('active');
            });
        }
    } catch (e) {}
    
    if (!mobileToggle || !mobileNav) {
        // Even if there is no mobile nav, still apply sticky header on scroll below
        const headerEl = document.querySelector('.header');
        if (headerEl) {
            const applyHeaderScrollState = () => {
                if (window.scrollY > 10) {
                    headerEl.classList.add('header--scrolled');
                } else {
                    headerEl.classList.remove('header--scrolled');
                }
            };
            applyHeaderScrollState();
            window.addEventListener('scroll', applyHeaderScrollState, { passive: true });
        }
        return;
    }
    
    let isToggling = false;
    let touchStartY = 0;
    
    // Toggle menu function with debouncing
    function toggleMenu(e) {
        if (isToggling) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        isToggling = true;
        
        const isActive = mobileToggle.classList.contains('active');
        
        if (isActive) {
            // Closing menu
            mobileToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        } else {
            // Opening menu
            mobileToggle.classList.add('active');
            mobileNav.classList.add('active');
        }
        
        // Reset debounce flag after animation
        setTimeout(() => {
            isToggling = false;
        }, 350);
    }
    
    // Handle touch start to track vertical scroll
    function handleTouchStart(e) {
        touchStartY = e.touches[0].clientY;
    }
    
    // Handle touch end/cancel
    function handleTouchEnd(e) {
        const touchEndY = e.changedTouches[0].clientY;
        const verticalMove = Math.abs(touchEndY - touchStartY);
        
        // Only trigger if it's a tap (minimal vertical movement)
        if (verticalMove < 10) {
            toggleMenu(e);
        }
    }
    
    // Close menu when clicking/touching outside
    function closeMenu(e) {
        if (mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
            
            mobileToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    }
    
    // Close menu when clicking/touching nav links
    function closeMobileMenu(e) {
        if (mobileNav.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    }
    
    // Attach event listeners
    // Use touch events for mobile devices
    if ('ontouchstart' in window) {
        mobileToggle.addEventListener('touchstart', handleTouchStart, { passive: true });
        mobileToggle.addEventListener('touchend', handleTouchEnd, { passive: false });
        
        document.addEventListener('touchstart', function(e) {
            if (mobileNav.classList.contains('active') && 
                !mobileNav.contains(e.target) && 
                !mobileToggle.contains(e.target)) {
                closeMenu(e);
            }
        });
    } else {
        // Use click events for desktop
        mobileToggle.addEventListener('click', toggleMenu);
        document.addEventListener('click', closeMenu);
    }
    
    // Handle nav link clicks
    const navLinks = mobileNav.querySelectorAll('.nav-link, .dropdown-link');
    navLinks.forEach(link => {
        if ('ontouchstart' in window) {
            link.addEventListener('touchend', closeMobileMenu, { passive: false });
        } else {
            link.addEventListener('click', closeMobileMenu);
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });

    // Sticky header on scroll
    const headerEl = document.querySelector('.header');
    if (headerEl) {
        const applyHeaderScrollState = () => {
            if (window.scrollY > 10) {
                headerEl.classList.add('header--scrolled');
            } else {
                headerEl.classList.remove('header--scrolled');
            }
        };
        applyHeaderScrollState();
        window.addEventListener('scroll', applyHeaderScrollState, { passive: true });
    }
// removed duplicate active menu highlight block here
});

// Local dev helper: rewrite "/blog" links to "/blog.html" so the Blog menu works like the reference without server rewrites
(function() {
  try {
    var isLocal = (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.protocol === 'file:');
    if (!isLocal) return; // only in local/dev
    var blogLinks = document.querySelectorAll('a[href="/blog/"], a[href="/blog"]');
    blogLinks.forEach(function(a) {
      a.setAttribute('data-href-original', a.getAttribute('href'));
      a.setAttribute('href', '/blog.html');
    });
  } catch (e) {
    console.warn('Blog link local rewrite skipped:', e);
  }
})();