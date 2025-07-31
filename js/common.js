// Common utilities for all portfolio pages
// Includes London time display and GitHub commit date functionality

// London Time Display Function
function showLondonTime() {
  var options = { 
    timeZone: 'Europe/London', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true // 12-hour format
  };
  
  var londonTime = new Date().toLocaleString('en-GB', options);
  const timeElement = document.getElementById("timeDisplay");
  if (timeElement) {
    timeElement.textContent = londonTime;
  }
}

// GitHub Last Commit Date Function
async function getLastCommitDate() {
  try {
    const response = await fetch('https://api.github.com/repos/ThanasisTh98/theo-webdev.io/commits?per_page=1');
    if (response.ok) {
      const commits = await response.json();
      if (commits.length > 0) {
        const lastCommitDate = new Date(commits[0].commit.author.date);
        const formattedDate = lastCommitDate.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit'
        });
        const commitElement = document.getElementById('lastCommitDate');
        if (commitElement) {
          commitElement.textContent = formattedDate;
        }
      }
    } else {
      // Fallback to current date if API fails
      const fallbackDate = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit'
      });
      const commitElement = document.getElementById('lastCommitDate');
      if (commitElement) {
        commitElement.textContent = fallbackDate;
      }
    }
  } catch (error) {
    console.log('Could not fetch commit date:', error);
    // Fallback to current date
    const fallbackDate = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit'
    });
    const commitElement = document.getElementById('lastCommitDate');
    if (commitElement) {
      commitElement.textContent = fallbackDate;
    }
  }
}

// Initialize common functionality
function initializeCommonFeatures() {
  // Start London time display
  showLondonTime();
  setInterval(showLondonTime, 1000); // Update every second
  
  // Load GitHub commit date
  getLastCommitDate();
}

// Auto-initialize when page loads
window.addEventListener('load', function() {
  initializeCommonFeatures();
});
