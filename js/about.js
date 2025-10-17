// About Component for Portfolio Website
// This file contains the reusable about HTML and functionality

async function loadAboutData() {
  try {
    const response = await fetch('./data/about-data.json');
    const data = await response.json();
    return data.about || {};
  } catch (error) {
    console.error('Error loading about data:', error);
    return {};
  }
}

function createAboutContent(aboutData = {}) {
  return `
    <div class="row justify-content-between">
      <div class="col-lg-6">
        <p class="mb-4">${aboutData.greeting || 'Hello! I\'m Thanasis Theo,'}</p>
        ${aboutData.paragraphs ? aboutData.paragraphs.map(paragraph => `
          <p class="mb-4">${paragraph}</p>
        `).join('') : ''}
        <div class="my-4">
        <!--
          ${aboutData.buttons ? aboutData.buttons.map(button => `
            <a href="${button.href}" class="${button.class || 'btn btn-lg btn-outline-tt-primary'}">${button.label} →</a>
          `).join(' ') : '<a href="#" class="btn btn-lg btn-outline-tt-primary">Read more →</a>'} -->
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card about-card">
          <div class="card-body text-center">
            <div style="position: relative;">
              <img src="./assets/tt-dot-decorations.svg" alt="Dot Decorations" style="position: absolute; top: -20px; left: -20px; width: 100px; height: 100px; z-index: 0;">
              <img src="./assets/tt-dot-decorations.svg" alt="Dot Decorations" style="position: absolute; bottom: -20px; right: -20px; width: 100px; height: 100px; z-index: 0;">
              <img src="${aboutData.profileImage || './assets/ougabouga2.jpg'}" class="img-fluid mb-3" alt="${aboutData.name || 'Thanasis Theo'}" style="width: 279px; height: 382px; object-fit: cover; border-radius: 100px;">
            </div>
            
            <h5>Quick Facts</h5>
            ${aboutData.quickFacts ? aboutData.quickFacts.map(fact => `
              <p class="small mb-1"><strong>${fact.label}:</strong> ${fact.value}</p>
            `).join('') : ''}
            <hr class="custom-hr">
          </div>
        </div>
      </div>
    </div>
  `;
}

// Initialize about injection
async function initializeAbout() {
  const aboutData = await loadAboutData();
  const aboutContainer = document.getElementById('about-placeholder');
  
  if (aboutContainer) {
    aboutContainer.innerHTML = createAboutContent(aboutData);
  }
}

// Function to manually inject about content (can be called from individual pages)
async function injectAbout() {
  await initializeAbout();
}

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