/**
 * POONAM CONSTRUCTION – Engineers & Contractors
 * Master Architectural Script
 * Er. Pratik D. Chougule (B.E. Civil) | Contact: 72649 08823
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ----------------------------------------------------
     1. Sticky Navbar & Header Scroll Effect
  ---------------------------------------------------- */
  const header = document.getElementById('main-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------
     2. Mobile Drawer Navigation
  ---------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.remove('translate-x-full');
      mobileNavDrawer.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.remove('translate-x-0');
      mobileNavDrawer.classList.add('translate-x-full');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ----------------------------------------------------
     3. Hero Background Image Transition
  ---------------------------------------------------- */
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  if (slides.length > 1) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 6500);
  }

  /* ----------------------------------------------------
     4. Portfolio Category Filtering
  ---------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.portfolio-tab-btn');
  const projectCards = document.querySelectorAll('.project-editorial-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  /* ----------------------------------------------------
     5. Project Lightbox Modal
  ---------------------------------------------------- */
  const projectModal = document.getElementById('project-modal');
  const modalProjectImg = document.getElementById('modal-project-img');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalProjectCategory = document.getElementById('modal-project-category');
  const modalProjectDesc = document.getElementById('modal-project-desc');
  const modalWhatsappLink = document.getElementById('modal-whatsapp-link');
  const closeModalBtns = document.querySelectorAll('.close-modal-trigger');

  const viewProjectBtns = document.querySelectorAll('.view-project-btn');

  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title');
      const category = btn.getAttribute('data-category-label') || 'Architectural Project';
      const desc = btn.getAttribute('data-desc');
      const img = btn.getAttribute('data-img');

      if (modalProjectTitle) modalProjectTitle.textContent = title;
      if (modalProjectCategory) modalProjectCategory.textContent = category;
      if (modalProjectDesc) modalProjectDesc.textContent = desc;
      if (modalProjectImg) modalProjectImg.src = img;

      if (modalWhatsappLink) {
        const msg = `Hello Er. Pratik Chougule, I viewed your architectural project "${title}" on your website and would like to discuss a similar project in Kolhapur.`;
        modalWhatsappLink.href = `https://wa.me/917264908823?text=${encodeURIComponent(msg)}`;
      }

      if (projectModal) {
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (projectModal) projectModal.classList.remove('active');
      const serviceModal = document.getElementById('service-modal');
      if (serviceModal) serviceModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('custom-modal')) {
      e.target.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  /* ----------------------------------------------------
     6. Services Data & Modal
  ---------------------------------------------------- */
  const serviceModal = document.getElementById('service-modal');
  const serviceModalTitle = document.getElementById('service-modal-title');
  const serviceModalNumber = document.getElementById('service-modal-number');
  const serviceModalDesc = document.getElementById('service-modal-desc');
  const serviceModalHighlights = document.getElementById('service-modal-highlights');
  const serviceWhatsappLink = document.getElementById('service-modal-whatsapp');

  const learnServiceBtns = document.querySelectorAll('.learn-service-btn');

  const serviceData = {
    'vastu': {
      number: '01',
      title: 'Vastu-Based Planning',
      desc: 'Authentic Vastu Shastra principles synchronized with contemporary architectural science to optimize natural illumination, air currents, and positive residential energy flow.',
      highlights: [
        'Zonal alignment of entrance, kitchen, master suite and prayer sanctum',
        '2D Architectural floor plans with precise dimensioning and circulation paths',
        'Kolhapur municipal council & town planning approval documentation',
        'Optimal cross-ventilation and sunlight orientation'
      ]
    },
    '3d-elevation': {
      number: '02',
      title: '3D Elevation Design',
      desc: 'High-definition photorealistic 3D exterior architectural modeling allowing you to preview facade textures, ambient lighting, and material compositions with clarity.',
      highlights: [
        'Daylight & twilight architectural lighting renders',
        'Material palette selection: stone veneer, composite panels, louvers, textured paint',
        'Compound wall, gate and landscape facade coordination',
        'Balcony cantilever and volumetric facade styling'
      ]
    },
    'interior': {
      number: '03',
      title: 'Interior Design & Renovation',
      desc: 'Bespoke interior architecture and modern remodeling services creating sophisticated, clutter-free living environments tailored to your lifestyle.',
      highlights: [
        'Custom modular kitchen spatial engineering with premium hardware',
        'Architectural false ceiling designs with hidden cove illumination',
        'Custom wardrobes, TV consoles and artisanal woodwork detailing',
        'Complete structural retrofitting and spatial re-planning under civil oversight'
      ]
    },
    'rcc-design': {
      number: '04',
      title: 'RCC Design & Structural Planning',
      desc: 'Certified civil engineering structural load analysis adhering strictly to Bureau of Indian Standards (IS 456 & IS 1893) for earthquake-resistant safety.',
      highlights: [
        'Computerized frame modeling for columns, beams, footings and slabs',
        'Bar Bending Schedule (BBS) to optimize steel consumption',
        'Safe load calculations based on Kolhapur local soil bearing capacity',
        'Complete structural stability certification by Er. Pratik D. Chougule'
      ]
    },
    'supervision': {
      number: '05',
      title: 'Site Supervision & Consulting',
      desc: 'Rigorous on-site engineering oversight ensuring contractors and craftspeople build strictly according to approved blueprints and technical benchmarks.',
      highlights: [
        'Concrete slump inspection and cube compressive strength verification',
        'Pre-pour slab rebar audit: steel spacing, lap lengths, cover blocks',
        'Masonry plumblines, right angles, and curing schedule monitoring',
        'Periodic technical audit and quality milestone checks'
      ]
    },
    'quality-construction': {
      number: '06',
      title: 'Construction with Quality Materials',
      desc: 'End-to-end building execution utilizing verified Grade-A branded construction supplies for lasting durability and peace of mind.',
      highlights: [
        'Primary steel: Tata Tiscon / JSW Neosteel / Rajuri 550D TMT',
        'Branded cement: UltraTech / ACC / Ambuja 53 & 43 Grade',
        'High-density red clay bricks or certified AAC blocks',
        'Concealed plumbing and wiring with top-tier Astral and Polycab supplies'
      ]
    },
    'modern-planning': {
      number: '07',
      title: 'Modern Planning & Designing',
      desc: 'Forward-looking contemporary home architecture embracing open floor plans, double-height volumes, skylights, courtyards, and integrated deck areas.',
      highlights: [
        'Seamless integration between indoor living and outdoor landscape',
        'Climate-responsive design capturing cool breezes and blocking harsh glare',
        'Flexible multi-generational room layouts',
        'Full set of municipal submission drawings'
      ]
    },
    'turnkey': {
      number: '08',
      title: 'Turnkey Construction – Lock & Key Projects',
      desc: 'Single-source accountability from bare ground excavation to handing over your polished front entrance keys on schedule and within budget.',
      highlights: [
        'Total material procurement, labor coordination, and civil project management',
        'Transparent Bill of Quantities (BOQ) with milestone-based agreements',
        'Complete flooring, electrification, sanitary fixtures, doors and finishing',
        'Formal structural stability warranty and handover documentation'
      ]
    }
  };

  learnServiceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-service');
      const data = serviceData[key];

      if (data && serviceModal) {
        if (serviceModalTitle) serviceModalTitle.textContent = data.title;
        if (serviceModalNumber) serviceModalNumber.textContent = data.number;
        if (serviceModalDesc) serviceModalDesc.textContent = data.desc;

        if (serviceModalHighlights) {
          serviceModalHighlights.innerHTML = data.highlights
            .map(item => `
              <li class="flex items-start gap-3 text-slate-700 text-sm">
                <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">✓</span>
                <span>${item}</span>
              </li>
            `).join('');
        }

        if (serviceWhatsappLink) {
          const msg = `Hello Er. Pratik Chougule, I would like to inquire about your service: "${data.title}".`;
          serviceWhatsappLink.href = `https://wa.me/917264908823?text=${encodeURIComponent(msg)}`;
        }

        serviceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  /* ----------------------------------------------------
     7. Contact Form Handling & Validation
  ---------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const whatsappSubmitBtn = document.getElementById('send-whatsapp-form-btn');

  function getFormData() {
    return {
      name: document.getElementById('contact-name')?.value.trim() || '',
      phone: document.getElementById('contact-phone')?.value.trim() || '',
      email: document.getElementById('contact-email')?.value.trim() || 'N/A',
      projectType: document.getElementById('contact-type')?.value || 'Not specified',
      location: document.getElementById('contact-location')?.value.trim() || 'Kolhapur',
      budget: document.getElementById('contact-budget')?.value || 'Not specified',
      message: document.getElementById('contact-message')?.value.trim() || 'General inquiry'
    };
  }

  if (whatsappSubmitBtn) {
    whatsappSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();

      if (!data.name || !data.phone) {
        alert('Please enter your Name and Phone Number to start your project consultation.');
        return;
      }

      const text = `*New Construction Consultation Request*\n\n` +
        `👤 *Client Name:* ${data.name}\n` +
        `📞 *Contact Number:* ${data.phone}\n` +
        `📧 *Email:* ${data.email}\n` +
        `🏗️ *Project Type:* ${data.projectType}\n` +
        `📍 *Project Location:* ${data.location}\n` +
        `💰 *Estimated Budget:* ${data.budget}\n` +
        `📝 *Project Overview:* ${data.message}\n\n` +
        `_Sent via Poonam Construction Master Website_`;

      const url = `https://wa.me/917264908823?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = getFormData();

      if (!data.name || !data.phone) {
        alert('Please fill in your Name and Phone Number.');
        return;
      }

      if (formStatus) {
        formStatus.classList.remove('hidden');
        formStatus.innerHTML = `
          <div class="p-4 rounded bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-3">
            <span class="text-emerald-600 font-bold text-lg">✓</span>
            <div>
              <p class="font-bold text-sm">Thank you, ${data.name}! Your consultation request has been received.</p>
              <p class="text-xs text-emerald-700">Er. Pratik D. Chougule will get in touch with you shortly. You may also connect instantly via WhatsApp.</p>
            </div>
          </div>
        `;
      }

      contactForm.reset();
    });
  }

  // Smooth scroll with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
