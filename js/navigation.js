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
        border: 1px solid #9D4EDD;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.10) 100%);
        box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.25) inset;
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        transition: all 0.3s ease;
        z-index: 1030;
        margin: 20px auto;
        width: calc(100% - 20px);
        
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
        background-color: #F4F0F6 !important;
      }
      
      /* Smooth scrolling for anchor links */
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
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
