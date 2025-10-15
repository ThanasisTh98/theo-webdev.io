// Skills Component for Portfolio Website
// This file contains the reusable skills HTML and functionality

async function loadSkillsData() {
  try {
    const response = await fetch('./data/skills-data.json');
    const data = await response.json();
    return data.skills || {};
  } catch (error) {
    console.error('Error loading skills data:', error);
    return {};
  }
}

function createSkillsCards(skillsData = {}) {
  const categories = skillsData.categories || [];
  
  return `
    <div class="row justify-content-center">
      ${categories.map(category => `
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
          <div class="card border-tt-card text-bg-tt-card">
            <div class="card-header">${category.title}</div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <div class="row">
                <div class="col-12">
                  ${category.items.map(item => `
                    <div class="skill-row-tag">
                      <img src="${item.icon}" alt="${item.name}" width="20" height="20"/>
                      ${item.name}
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Initialize skills injection
async function initializeSkills() {
  const skillsData = await loadSkillsData();
  const skillsContainer = document.getElementById('skills-placeholder');
  
  if (skillsContainer) {
    skillsContainer.innerHTML = createSkillsCards(skillsData);
  }
}

// Function to manually inject skills (can be called from individual pages)
async function injectSkills() {
  await initializeSkills();
}