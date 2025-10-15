/**
 * Sub-page hero section component
 * Creates consistent hero sections for all sub-pages
 */

let subPageData = null;

// Load sub-page data
async function loadSubPageData() {
    if (subPageData) return subPageData;
    
    try {
        const response = await fetch('./data/sub-page-titles.json');
        subPageData = await response.json();
        return subPageData;
    } catch (error) {
        console.error('Error loading sub-page data:', error);
        return {};
    }
}

/**
 * Create sub-page hero section
 * @param {string} pageKey - The key identifying which page data to use
 * @returns {string} HTML string for the hero section
 */
function createSubPageHero(pageKey) {
    // Fallback data if JSON loading fails
    const fallbackData = {
        title: pageKey || 'page',
        description: 'Welcome to this page.'
    };
    
    const pageData = subPageData?.[pageKey] || fallbackData;
    
    return `
    <style>
    .sub-page-hero h1 {
        color: #9D4EDD !important;
        font-weight: 500;
    }
    .sub-page-hero p {
        font-size: 1.25rem;
        color: #3C3A47 !important;
    }
    </style>
        <section class="sub-page-hero">
            <div class="container">
                <div class="d-flex flex-column">
                    <div class="p-2"><h1 class="display-1"><strong>/</strong>${pageData.title}</h1></div>
                    <p>${pageData.description}</p>
                </div>
            </div>
        </section>
    `;
}

/**
 * Initialize sub-page hero section
 * @param {string} pageKey - The key identifying which page data to use
 * @param {string} containerId - The ID of the container to inject the hero into
 */
async function initializeSubPageHero(pageKey, containerId = 'sub-page-hero-placeholder') {
    await loadSubPageData();
    
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = createSubPageHero(pageKey);
    } else {
        console.error(`Container with ID '${containerId}' not found`);
    }
}

/**
 * Auto-initialize hero section based on current page
 * Attempts to determine page from URL or document title
 */
function autoInitializeSubPageHero() {
    // Try to determine page from URL
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '') || 'index';
    
    // Skip initialization for index page
    if (filename === 'index' || filename === '') return;
    
    // Initialize with detected page name
    initializeSubPageHero(filename);
}

// Export functions for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadSubPageData,
        createSubPageHero,
        initializeSubPageHero,
        autoInitializeSubPageHero
    };
}