// Projects Component for Portfolio Website
// This file contains the reusable projects HTML and functionality

async function loadProjectsData() {
  try {
    const response = await fetch('./data/project-card-data.json');
    const data = await response.json();
    return data.projects || {};
  } catch (error) {
    console.error('Error loading projects data:', error);
    return {};
  }
}

function createProjectCards(projectsData = {}) {
  const projects = projectsData.cards || [];
  
  return `
  <style>
  .project-tt-card {
    color: #3C3A47 !important;
    

    border-radius: 12px;
    background: transparent;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    margin: 0 auto;
    padding: 12px 16px;
    border: none;
}
    #badge-container {
        padding: 0.5rem 1rem;
    }
    .text-bg-badge {
        background-color: #9D4EDD !important;
        color: #FFFFFF !important;
        font-weight: 500;
    }
    </style>
    <div class="row g-4">
      ${projects.map(project => `
        <div class="col-sm-6 col-12">
          <div class="card project-tt-card h-100">
            <div class="row g-0">
              <div class="col-md-4">
                <div class="ratio ratio-16x9">
                  <img src="${project.image}" class="img-fluid rounded" alt="${project.title}" style="object-fit: cover;">
                </div>
              </div>
              <div class="col-md-8">
               
                <div id="badge-container">
                    ${project.categories ? project.categories.slice(0, 3).map(category => `
                        <span class="badge text-bg-badge me-1">${category}</span>
                    `).join('') : '<span class="badge text-bg-badge">Default</span>'}
                </div>
                <div class="card-body py-0">
                  <h5 class="card-title">${project.title}</h5>
                  <p class="card-text">${project.description}</p>
                  <div class="mt-auto">
                    ${project.buttons ? project.buttons.map(button => `
                      <a href="${button.href}" class="btn  ${button.class || 'btn-outline-tt-primary'}" ${button.target ? `target="${button.target}"` : ''}>${button.label} →</a>
                    `).join(' ') : '<button type="button" class="btn btn-outline-tt-primary">Read more →</button>'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Initialize projects injection
async function initializeProjects() {
  const projectsData = await loadProjectsData();
  const projectsContainer = document.getElementById('project-cards-placeholder');
  
  if (projectsContainer) {
    projectsContainer.innerHTML = createProjectCards(projectsData);
  }
}

// Function to manually inject projects (can be called from individual pages)
async function injectProjects() {
  await initializeProjects();
}