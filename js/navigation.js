// Navigation Component for Portfolio Website
// This file contains the reusable navigation HTML and functionality

function createNavigation(activePage = '') {
  return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary container">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="assets/Logo-dark.png" class="img-fluid" alt="Thanasis Theo Logo" width="50px">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link ${activePage === 'about' ? 'active' : ''}" ${activePage === 'about' ? 'aria-current="page"' : ''} href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${activePage === 'resume' ? 'active' : ''}" ${activePage === 'resume' ? 'aria-current="page"' : ''} href="resume.html">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${activePage === 'projects' ? 'active' : ''}" ${activePage === 'projects' ? 'aria-current="page"' : ''} href="projects.html">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <span class="navbar-text d-flex g-2">
            <a href="resume.html" class="download-btn" style="text-decoration: none;">
              <i class="ph ph-file-arrow-down" style="margin-right: 8px;"></i>
              Resume
            </a>
          </span>
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
    </style>
  `;
}

// Initialize navigation and footer on page load
function initializeNavigation(activePage = '') {
  // Wait for DOM to be loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Insert navigation
    const navContainer = document.getElementById('navigation-container');
    if (navContainer) {
      navContainer.innerHTML = createNavigation(activePage);
    }
    
    // Insert footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
      footerContainer.innerHTML = createFooter();
    }
    
    // Insert common styles
    const head = document.head;
    const stylesDiv = document.createElement('div');
    stylesDiv.innerHTML = createCommonStyles();
    head.appendChild(stylesDiv.firstElementChild);
  });
}

// Function to set active page (can be called from individual pages)
function setActivePage(pageName) {
  initializeNavigation(pageName);
}
