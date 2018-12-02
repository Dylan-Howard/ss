(function ($) {
  'use strict' // Start of use strict
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Callback for reveal animations
  function questionCallback (el) {
    setTimeout(function () {
      el.classList.add('active')
    }, 600)
  }

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.hero-title, .hero-paragraph, .hero-cta, .hero-action-form-container', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 150
    })

    sr.reveal('.header-brand', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'left',
      interval: 150
    })

    sr.reveal('.header-links li', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'right',
      interval: 150
    })

    sr.reveal('.feature, .service-picture', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      scale: 0.9,
      viewFactor: 0.5
    })

    // From Bottom
    sr.reveal('.service-content, .schedule-table p', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      viewFactor: 0.5
    })

    // From Bottom with Callback
    sr.reveal('.question', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      viewFactor: 0.5,
      beforeReveal: questionCallback
    })

    // Contact Section
    if (window.width > 640) { // > Medium Contact
      // From Left
      sr.reveal('.contact-picture', {
        duration: 1000,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 100,
        origin: 'left',
        scale: 0.9,
        viewFactor: 0.5
      })

      // From Right
      sr.reveal('.contact-content', {
        duration: 1000,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 100,
        origin: 'right',
        scale: 1,
        viewFactor: 0.5
      })
    } else { // < Medium Contact
      // From Left
      sr.reveal('.contact-picture', {
        duration: 1000,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 100,
        origin: 'left',
        scale: 0.9,
        viewFactor: 0.5
      })

      // From Right
      sr.reveal('.contact-content', {
        duration: 1000,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 100,
        origin: 'right',
        scale: 1,
        viewFactor: 0.5
      })
    }
  }

  // // Collapse Navbar
  // const nav = document.getElementById('mainNav')
  // var navbarCollapse = function () {)
  //   if (document.body.scrollTop > 100) {
  //     console.log('test')
  //     nav.classList.add('navbar-shrink')
  //   } else {
  //     nav.classList.remove('navbar-shrink')
  //   }
  // }
  // // Collapse now if page is not at top
  // navbarCollapse()
  // // Collapse the navbar when page is scrolled
  // setInterval(function () {
  //   navbarCollapse()
  // }, 100)
}()) // End of use strict
