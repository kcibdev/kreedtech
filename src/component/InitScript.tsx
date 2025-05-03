'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function InitScripts(): null {
  useEffect(() => {
    // Preloader
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }
    }, 800);

    // AOS init
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    // Custom cursor
    const cursor = document.querySelector<HTMLElement>('.custom-cursor');
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });

      document.addEventListener('mousedown', () => {
        cursor.style.width = '15px';
        cursor.style.height = '15px';
        cursor.style.backgroundColor = 'rgba(62, 135, 100, 0.8)';
      });

      document.addEventListener('mouseup', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'rgba(62, 135, 100, 0.5)';
      });

      document.querySelectorAll<HTMLElement>('a, button, input, select').forEach((item) => {
        item.addEventListener('mouseenter', () => {
          cursor.style.width = '30px';
          cursor.style.height = '30px';
          cursor.style.backgroundColor = 'rgba(62, 135, 100, 0.3)';
        });

        item.addEventListener('mouseleave', () => {
          cursor.style.width = '20px';
          cursor.style.height = '20px';
          cursor.style.backgroundColor = 'rgba(62, 135, 100, 0.5)';
        });
      });
    }

    // Mobile menu toggle
    const hamburger = document.querySelector<HTMLElement>('.hamburger');
    const mobileMenu = document.querySelector<HTMLElement>('.mobile-menu');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });

      document.querySelectorAll<HTMLAnchorElement>('.mobile-menu a').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('open');
          mobileMenu.classList.remove('open');
        });
      });
    }

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add('scale-100');
        } else {
          backToTopButton.classList.remove('scale-100');
        }
      });

      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }

    // Smooth scroll for anchors
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const targetElement = document.querySelector(href);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      });
    });

    // Waitlist form submission
    const waitlistForm = document.getElementById('waitlistForm') as HTMLFormElement | null;
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    if (waitlistForm) {
      waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        setTimeout(() => {
          if (successModal) successModal.classList.remove('hidden');
          waitlistForm.reset();
        }, 800);
      });
    }

    if (closeModal) {
      closeModal.addEventListener('click', () => {
        successModal?.classList.add('hidden');
      });
    }

    window.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal?.classList.add('hidden');
      }
    });
  }, []);

  return null;
}
