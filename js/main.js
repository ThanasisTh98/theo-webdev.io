// main.js
// Dynamically loads content from data.json and populates the page

async function loadContent(page) {
  const response = await fetch('data.json');
  const data = await response.json();
  const content = data[page];
  if (!content) return;

  if (document.getElementById('title')) {
    document.getElementById('title').textContent = content.title;
  }
  if (document.getElementById('subtitle')) {
    document.getElementById('subtitle').textContent = content.subtitle || '';
  }
  if (document.getElementById('description')) {
    document.getElementById('description').textContent = content.description || '';
  }
  if (document.getElementById('about-content')) {
    document.getElementById('about-content').textContent = content.content || '';
  }
}

// Detect page and load content
const page = document.body.getAttribute('data-page');
if (page) {
  loadContent(page);
}
