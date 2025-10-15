// Navigation Component for Portfolio Website
// This file contains the reusable navigation HTML and functionality

function createNavigation(activePage = '') {
  // Helper function to determine if a page should be active
  const isActive = (page) => {
    if (activePage === page) return 'active';
    // Handle special cases where multiple pages might map to same nav item
    if (activePage === 'project' && page === 'projects') return 'active';
    return '';
  };

  return `

<!-- Example Code Start-->
    <nav class="navbar navbar-dark fixed-top py-4">
      <div class="container-fluid ">
        <div class="tt-container-nav">
        
        <button class="navbar-toggler p-0 tt-btn-hw" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="index.html">than-theo</a>
        <a href="./assets/Resume-Thanasis-Theodorou (1).pdf" class="cv-download-link" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none"><path d="M5.75441 6.64956V7.73939C5.75441 7.85522 5.72827 7.93945 5.67598 7.9921C5.63415 8.03422 5.55049 8.05528 5.425 8.05528H3.08775C2.2616 8.05528 1.62369 7.83416 1.17402 7.39191C0.724348 6.94965 0.499512 6.3126 0.499512 5.48075V2.57453C0.499512 1.74268 0.724348 1.10563 1.17402 0.663377C1.62369 0.221125 2.2616 0 3.08775 0H5.425C5.64461 0 5.75441 0.110563 5.75441 0.331688V1.42152C5.75441 1.53735 5.72827 7.62159 5.67598 1.67424C5.63415 1.71635 5.55049 1.73741 5.425 1.73741H3.40147C3.07729 1.73741 2.842 1.81112 2.69559 1.95854C2.55964 2.09543 2.49167 2.33235 2.49167 2.6693V5.38598C2.49167 5.72294 2.55964 5.96512 2.69559 6.11254C2.842 6.24942 3.07729 6.31787 3.40147 6.31787H5.425C5.64461 6.31787 5.75441 6.42843 5.75441 6.64956Z" fill="#9D4EDD"/><path d="M7.07414 0H8.45454C8.66369 0 8.78918 0.110563 8.83101 0.331688L10.18 6.27048H10.2898L11.6075 0.331688C11.6493 0.110563 11.78 0 11.9996 0H13.38C13.5996 0 13.6781 0.110563 13.6153 0.331688L11.6388 7.7078C11.597 7.93945 11.4558 8.05528 11.2153 8.05528H9.22316C9.00356 8.05528 8.86238 7.93945 8.79963 7.7078L6.83885 0.331688C6.7761 0.110563 6.85454 0 7.07414 0Z" fill="#9D4EDD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9407 4.89635C15.0577 4.89645 15.1698 4.94335 15.2524 5.02668L19.3701 9.17279C19.4528 9.25601 19.4994 9.3689 19.4995 9.48667V18.9635C19.4995 19.2384 19.3908 19.5018 19.1977 19.6961C19.0047 19.8905 18.7431 20 18.4701 20H7.88187C7.60885 20 7.34728 19.8905 7.15423 19.6961C6.96118 19.5018 6.85245 19.2384 6.85245 18.9635V8.84502H7.73481V18.9635C7.73481 19.0027 7.75012 19.0406 7.7777 19.0684C7.80528 19.0961 7.84286 19.1116 7.88187 19.1116H18.4701C18.5091 19.1116 18.5467 19.0961 18.5743 19.0684C18.6018 19.0406 18.6172 19.0027 18.6172 18.9635V9.9309H14.9407C14.8237 9.9309 14.7117 9.88387 14.629 9.80056C14.5462 9.71725 14.4995 9.60449 14.4995 9.48667V5.7848H13.9113V4.89635H14.9407ZM15.3819 9.04245H17.9937L15.3819 6.41257V9.04245Z" fill="#9D4EDD"/><path d="M13.176 11.4116C13.293 11.4116 13.405 11.4587 13.4877 11.542C13.5705 11.6253 13.6172 11.7381 13.6172 11.8559V15.5215L14.629 14.5035C14.7117 14.4203 14.8238 14.3739 14.9407 14.3739C15.0576 14.3739 15.1697 14.4203 15.2524 14.5035C15.335 14.5868 15.3811 14.6997 15.3811 14.8174C15.3811 14.9351 15.335 15.048 15.2524 15.1313L13.4877 16.9082C13.405 16.9914 13.2929 17.0377 13.176 17.0377C13.0591 17.0377 12.947 16.9914 12.8642 16.9082L11.0995 15.1313C11.0216 15.0471 10.9788 14.9355 10.9808 14.8205C10.9829 14.7054 11.0295 14.5956 11.1103 14.5143C11.1911 14.4329 11.3001 14.386 11.4143 14.3839C11.5286 14.3819 11.6394 14.425 11.723 14.5035L12.7348 15.5215V11.8559C12.7348 11.7381 12.7815 11.6253 12.8642 11.542C12.947 11.4587 13.059 11.4116 13.176 11.4116Z" fill="#9D4EDD"/></svg>
        </a>

        </div>

        <div class="offcanvas offcanvas-end offcanvas-center offcanvas-bg my-4 " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style="
    border-left: none;
">
          <div class="offcanvas-header">

        <button type="button" class="btn-close btn-close-tt tt-btn-hw" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <a class="navbar-brand" href="index.html">than-theo</a>
        <a href="./assets/Resume-Thanasis-Theodorou (1).pdf" class="cv-download-link" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none"><path d="M5.75441 6.64956V7.73939C5.75441 7.85522 5.72827 7.93945 5.67598 7.9921C5.63415 8.03422 5.55049 8.05528 5.425 8.05528H3.08775C2.2616 8.05528 1.62369 7.83416 1.17402 7.39191C0.724348 6.94965 0.499512 6.3126 0.499512 5.48075V2.57453C0.499512 1.74268 0.724348 1.10563 1.17402 0.663377C1.62369 0.221125 2.2616 0 3.08775 0H5.425C5.64461 0 5.75441 0.110563 5.75441 0.331688V1.42152C5.75441 1.53735 5.72827 7.62159 5.67598 1.67424C5.63415 1.71635 5.55049 1.73741 5.425 1.73741H3.40147C3.07729 1.73741 2.842 1.81112 2.69559 1.95854C2.55964 2.09543 2.49167 2.33235 2.49167 2.6693V5.38598C2.49167 5.72294 2.55964 5.96512 2.69559 6.11254C2.842 6.24942 3.07729 6.31787 3.40147 6.31787H5.425C5.64461 6.31787 5.75441 6.42843 5.75441 6.64956Z" fill="#9D4EDD"/><path d="M7.07414 0H8.45454C8.66369 0 8.78918 0.110563 8.83101 0.331688L10.18 6.27048H10.2898L11.6075 0.331688C11.6493 0.110563 11.78 0 11.9996 0H13.38C13.5996 0 13.6781 0.110563 13.6153 0.331688L11.6388 7.7078C11.597 7.93945 11.4558 8.05528 11.2153 8.05528H9.22316C9.00356 8.05528 8.86238 7.93945 8.79963 7.7078L6.83885 0.331688C6.7761 0.110563 6.85454 0 7.07414 0Z" fill="#9D4EDD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9407 4.89635C15.0577 4.89645 15.1698 4.94335 15.2524 5.02668L19.3701 9.17279C19.4528 9.25601 19.4994 9.3689 19.4995 9.48667V18.9635C19.4995 19.2384 19.3908 19.5018 19.1977 19.6961C19.0047 19.8905 18.7431 20 18.4701 20H7.88187C7.60885 20 7.34728 19.8905 7.15423 19.6961C6.96118 19.5018 6.85245 19.2384 6.85245 18.9635V8.84502H7.73481V18.9635C7.73481 19.0027 7.75012 19.0406 7.7777 19.0684C7.80528 19.0961 7.84286 19.1116 7.88187 19.1116H18.4701C18.5091 19.1116 18.5467 19.0961 18.5743 19.0684C18.6018 19.0406 18.6172 19.0027 18.6172 18.9635V9.9309H14.9407C14.8237 9.9309 14.7117 9.88387 14.629 9.80056C14.5462 9.71725 14.4995 9.60449 14.4995 9.48667V5.7848H13.9113V4.89635H14.9407ZM15.3819 9.04245H17.9937L15.3819 6.41257V9.04245Z" fill="#9D4EDD"/><path d="M13.176 11.4116C13.293 11.4116 13.405 11.4587 13.4877 11.542C13.5705 11.6253 13.6172 11.7381 13.6172 11.8559V15.5215L14.629 14.5035C14.7117 14.4203 14.8238 14.3739 14.9407 14.3739C15.0576 14.3739 15.1697 14.4203 15.2524 14.5035C15.335 14.5868 15.3811 14.6997 15.3811 14.8174C15.3811 14.9351 15.335 15.048 15.2524 15.1313L13.4877 16.9082C13.405 16.9914 13.2929 17.0377 13.176 17.0377C13.0591 17.0377 12.947 16.9914 12.8642 16.9082L11.0995 15.1313C11.0216 15.0471 10.9788 14.9355 10.9808 14.8205C10.9829 14.7054 11.0295 14.5956 11.1103 14.5143C11.1911 14.4329 11.3001 14.386 11.4143 14.3839C11.5286 14.3819 11.6394 14.425 11.723 14.5035L12.7348 15.5215V11.8559C12.7348 11.7381 12.7815 11.6253 12.8642 11.542C12.947 11.4587 13.059 11.4116 13.176 11.4116Z" fill="#9D4EDD"/></svg>
        </a>
          </div>
          <div class="offcanvas-body d-flex flex-column">
            <ul class="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link ${isActive('home') || isActive('index')}" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('projects') || isActive('project')}" href="project.html">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('about')}" href="about.html">About me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('contact')}" href="contact.html">Contact</a>
              </li>
            </ul>
            <div class="nav-extras">
              <div class="d-flex justify-content-center gap-4">
                <a href="https://github.com/ThanasisTh98" target="_blank" rel="noopener" class="nav-extra-link">
                  <i class="ph ph-github-logo me-2"></i>GitHub
                </a>
                <a href="https://www.linkedin.com/in/thanasis-theodorou-cy/" target="_blank" rel="noopener" class="nav-extra-link">
                  <i class="ph ph-linkedin-logo me-2"></i>LinkedIn
                </a>
                <a href="mailto:thanasisth1998@gmail.com" class="nav-extra-link">
                  <i class="ph ph-envelope me-2"></i>Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Example Code End -->




    
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
  .offcanvas-body{
    --bs-offcanvas-border-width: 0px !important;
  }
  .tt-btn-hw{
    width:30px;
    height:30px;
  }
  .offcanvas-bg {
    background: #E6E0F5 !important;
    border-radius: 12px;
  }
  .tt-container-nav{
    max-width: fit-content;
    border-radius: 12px;
    background: rgba(220, 211, 244, 0.40);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    margin: 0 auto;
    padding: 12px 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    gap:150px;
        align-items: center;
  }
  
  /* Make offcanvas-header match tt-container-nav styling */
  .offcanvas-header {
    border-radius: 12px;
   gap:150px;
       align-items: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
   
    padding: 12px 16px !important;
    border-bottom: none !important;
  }
  
  /* Custom close button styling */
  .btn-close-tt {
    background: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.4539 0.691284L0.433056 12.7121L1.14016 13.4192L13.161 1.39839L12.4539 0.691284Z" fill="%239D4EDD"/><path d="M0.957107 0.580078L12.9779 12.6009L12.2708 13.308L0.25 1.28718L0.957107 0.580078Z" fill="%239D4EDD"/></svg>') no-repeat center center !important;
    background-size: 14px 14px !important;
    opacity: 1 !important;
  }
  
  /* Nav link colors */
  .nav-link {
    color: #3C3A47 !important;
    font-size: 40px;
    padding: 24px 0;
    text-transform: uppercase;
    font-weight: 500;
    
  }
   
  
  .nav-link.active {
    color: #9D4EDD !important;
    font-weight: 600;
  }
  
  .nav-link:hover {
    color: #9D4EDD !important;
  }
  
  /* Center the offcanvas */
  .offcanvas-center {
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: fit-content !important;
    max-width: 90vw !important;
    height: 95vh ;
  }
    @media (max-width: 576px) {

        .offcanvas-center {
            height: 80vh !important;
        }
    }
    .offcanvas-backdrop {
        background-color: #ffffff0d;
        backdrop-filter: blur(45px) brightness(1.1) contrast(1.05) saturate(1.1) hue-rotate(0deg) invert(0%) opacity(0.9) sepia(0%);
        -webkit-backdrop-filter: blur(45px) brightness(1.1) contrast(1.05) saturate(1.1) hue-rotate(0deg) invert(0%) opacity(0.9) sepia(0%);
    }
  
  .navbar-brand {
  color: #9D4EDD !important;

  font-size: 1.5rem;
  font-weight: 500;
  }
  .navbar-toggler-icon {
    background-image: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none"><path d="M0 0.5H12V1.5H0V0.5Z" fill="%239D4EDD"/><path d="M0 6.5H14V7.5H0V6.5Z" fill="%239D4EDD"/><path d="M0 12.5H17V13.5H0V12.5Z" fill="%239D4EDD"/></svg>') !important;
  }
  
  /* Nav extras styling */
  .nav-extra-link {
    color: #3C3A47 !important;
    text-decoration: none !important;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
  }
  
  .nav-extra-link:hover {
    color: #9D4EDD !important;
  }
  
  .nav-extra-link i {
    font-size: 18px;
  }


    /* Responsive breakpoint for tt-container-nav */
  @media (max-width: 576px) {
    .tt-container-nav {
      gap: 50px;
      padding: 8px 12px;
    }
  }

    /* Responsive breakpoint for offcanvas-header */
  @media (max-width: 576px) {
    .offcanvas-header {
      gap: 50px;
      padding: 8px 12px !important;
    }
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
