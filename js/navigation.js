// Navigation Component for Portfolio Website
// This file contains the reusable navigation HTML and functionality

function createNavigation(activePage = '') {
  return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary container fixed-top navbar-custom">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav w-100 align-items-center justify-content-center">
            <li class="nav-item me-4">
              <a class="nav-link ${activePage === 'about' ? 'active' : ''}" ${activePage === 'about' ? 'aria-current="page"' : ''} href="about.html">About</a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link ${activePage === 'resume' ? 'active' : ''}" ${activePage === 'resume' ? 'aria-current="page"' : ''} href="resume.html">Resume</a>
            </li>
            <li class="nav-item mx-3">
              <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img src="assets/Logo-dark.png" class="img-fluid" alt="Thanasis Theo Logo" width="28" height="28">
              </a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link ${activePage === 'projects' ? 'active' : ''}" ${activePage === 'projects' ? 'aria-current="page"' : ''} href="projects.html">Portfolio</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function createFooter() {
  return `
    <footer class="bg-footer py-4 mt-auto" id="contact">
      <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
          <div class="col-auto">
            <div class="small m-0"><a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="mailto:theo@example.com">→ Email</a></div>
            <div class="small m-0"><a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="resume.html">→ Resume</a></div>
            <div class="small m-0"><a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://linkedin.com/in/thanasis-theo" target="_blank">→ LinkedIn</a></div>
          </div>
          <div class="col-auto">
            <div class="small m-0"> Last Updated → <strong><span id="lastCommitDate">31/07</span></strong></div>
            <div class="small m-0">@Theo_Theodorou_2024 </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Common styles that can be applied to all pages
function createCommonStyles() {
  return `
    <style>
      .download-btn {
        background-color: #1C1F33;
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        text-decoration: none;
        display: inline-block;
        font-weight: bold;
        transition: all 0.3s ease;
        font-size: 0.9rem;
      }
      .download-btn:hover {
        background-color: #525069;
        color: white;
        text-decoration: none;
        transform: translateY(-1px);
      }
      
      /* Sticky navigation enhancements */
      .navbar-custom {
        border-radius: 200px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.10) 100%);
        box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.25) inset;
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        transition: all 0.3s ease;
        z-index: 1030;
        margin: 20px auto;
        width: calc(100% - 20px);
        max-width: 50%;
        left: 50%;
        transform: translateX(-50%);
      }
      
      /* Add 100px gap between navbar items */
      .navbar-custom .navbar-nav {
        gap: 100px;
      }
      
      /* Remove default Bootstrap margins since we're using gap */
      .navbar-custom .nav-item {
        margin: 0 !important;
      }
      
      /* Responsive adjustments for mobile */
      @media (max-width: 991.98px) {
        .navbar-custom .navbar-nav {
          gap: 20px;
          flex-direction: column;
        }
      }
      
      /* Override Bootstrap's bg-body-tertiary for the navbar */
      .navbar.bg-body-tertiary {
        background-color: transparent !important;
      }
      
      /* Add padding to body to prevent content from hiding behind sticky nav */
      body {
        padding-top: 0;
      }
      
      /* Smooth scrolling for anchor links */
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
      }
      
      /* Hero section gradient background */
      #hero-section {
        background: linear-gradient(110deg, #E3DFEC 25.76%, #C0BDCD 54.01%, #A29FB1 78.88%, #807D92 106.57%, #726F86 117.87%, #525069 143.3%);
        position: relative;
        overflow: hidden;
      }
      
      /* Hero section SVG overlay */
      #hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2007' height='1077' viewBox='0 0 2007 1077' fill='none'%3E%3Cg filter='url(%23filter0_g_433_16815)'%3E%3Crect x='100' y='100' width='1807' height='877' fill='url(%23paint0_linear_433_16815)'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_g_433_16815' x='0' y='0' width='2007' height='1077' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015151515603065491 0.015151515603065491' numOctaves='3' seed='4442' result='displacementX'/%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015151515603065491 0.015151515603065491' numOctaves='3' seed='4443' result='displacementY'/%3E%3CfeColorMatrix in='displacementX' type='matrix' values='0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1' result='displacementXRed'/%3E%3CfeColorMatrix in='displacementY' type='matrix' values='0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1'/%3E%3CfeComposite in='displacementXRed' operator='arithmetic' k1='0' k2='1' k3='1' k4='0'/%3E%3CfeDisplacementMap in='shape' scale='200' xChannelSelector='R' yChannelSelector='G' width='100%25' height='100%25'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'/%3E%3CfeComponentTransfer result='sourceDisplacedAlpha'%3E%3CfeFuncA type='gamma' exponent='0.2'/%3E%3C/feComponentTransfer%3E%3CfeColorMatrix in='shape' type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'/%3E%3CfeComponentTransfer result='inputSourceAlpha'%3E%3CfeFuncA type='gamma' exponent='0.2'/%3E%3C/feComponentTransfer%3E%3CfeComposite in='sourceDisplacedAlpha' operator='arithmetic' k1='1' k2='0' k3='0' k4='0' result='displacementAlphasMultiplied'/%3E%3CfeComposite in='displacementAlphasMultiplied' operator='arithmetic' k1='0' k2='0' k3='-0.5' k4='0.5' result='centeringAdjustment'/%3E%3CfeComposite in='displacementX' in2='displacementAlphasMultiplied' operator='arithmetic' k1='1' k2='0' k3='0' k4='0'/%3E%3CfeComposite in='centeringAdjustment' operator='arithmetic' k1='0' k2='1' k3='1' k4='0'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1' result='displacementXFinal'/%3E%3CfeComposite in='displacementY' in2='displacementAlphasMultiplied' operator='arithmetic' k1='1' k2='0' k3='0' k4='0'/%3E%3CfeComposite in='centeringAdjustment' operator='arithmetic' k1='0' k2='1' k3='1' k4='0'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 1 0  0 0 0 0 0  0 0 0 0 1' result='displacementYFinal'/%3E%3CfeComposite in='displacementXFinal' in2='displacementYFinal' operator='arithmetic' k1='0' k2='1' k3='1' k4='0'/%3E%3CfeComposite in2='displacementAlphasMultiplied' operator='in' result='displacementMap'/%3E%3CfeFlood flood-color='rgb(127, 127, 127)' flood-opacity='1'/%3E%3CfeComposite in2='displacementAlphasMultiplied' operator='out'/%3E%3CfeComposite in2='displacementMap' operator='over' result='displacementMapWithBg'/%3E%3CfeDisplacementMap in='shape' scale='200' xChannelSelector='R' yChannelSelector='G' width='100%25' height='100%25' result='displacedImage'/%3E%3CfeColorMatrix in='shape' type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 127 0' result='imageOpaque'/%3E%3CfeDisplacementMap in='imageOpaque' in2='displacementMapWithBg' scale='200' xChannelSelector='R' yChannelSelector='G' width='100%25' height='100%25' result='displacedImageOpaque'/%3E%3CfeColorMatrix in='displacedImage' type='matrix' values='0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0' result='displacedImageRed'/%3E%3CfeColorMatrix in='shape' type='matrix' values='0 0 0 1 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0'/%3E%3CfeComposite in='displacedImageRed' operator='atop' result='transparencyRedMap'/%3E%3CfeColorMatrix in='transparencyRedMap' type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0' result='transparencyAlphaMap'/%3E%3CfeComposite in='displacedImageOpaque' in2='imageOpaque' operator='over'/%3E%3CfeComposite in2='transparencyAlphaMap' operator='in' result='effect1_texture_433_16815'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_433_16815' x1='519.5' y1='386' x2='2358' y2='1790.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23E3DFEC'/%3E%3Cstop offset='0.240385' stop-color='%23C0BDCD'/%3E%3Cstop offset='0.451923' stop-color='%23A29FB1'/%3E%3Cstop offset='0.6875' stop-color='%23807D92'/%3E%3Cstop offset='0.783654' stop-color='%23726F86'/%3E%3Cstop offset='1' stop-color='%23525069'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.3;
        z-index: 1;
      }
      
      /* Ensure hero section content is above the SVG overlay */
      #hero-section > * {
        position: relative;
        z-index: 2;
      }
    </style>
  `;
}

// Initialize navigation and footer on page load
function initializeNavigation(activePage = '') {
  // Wait for DOM to be loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Insert common styles first
    const head = document.head;
    const styleElement = document.createElement('style');
    styleElement.innerHTML = createCommonStyles().replace('<style>', '').replace('</style>', '');
    head.appendChild(styleElement);
    
    // Insert navigation
    const navContainer = document.getElementById('navigation-placeholder');
    if (navContainer) {
      navContainer.innerHTML = createNavigation(activePage);
    }
    
    // Insert footer
    const footerContainer = document.getElementById('footer-placeholder');
    if (footerContainer) {
      footerContainer.innerHTML = createFooter();
    }
  });
}

// Function to set active page (can be called from individual pages)
function setActivePage(pageName) {
  initializeNavigation(pageName);
}

// Auto-inject styles when this script loads
(function() {
  const head = document.head;
  const styleElement = document.createElement('style');
  styleElement.innerHTML = createCommonStyles().replace('<style>', '').replace('</style>', '');
  head.appendChild(styleElement);
})();
