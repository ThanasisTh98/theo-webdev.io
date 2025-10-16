const cursor = document.querySelector('.bg__gradient');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let speed = 0.01;
let isPaused = false;
let animationId;

// Add error checking
if (!cursor) {
    console.warn('Gradient element not found');
    // Exit gracefully if element doesn't exist
}

function animate() {
    if (!isPaused && cursor) { // Add cursor check
        let distX = mouseX - cursorX;
        let distY = mouseY - cursorY;

        cursorX = cursorX + (distX * speed);
        cursorY = cursorY + (distY * speed);

        // Clamp values to prevent overflow
        const maxX = window.innerWidth;
        const maxY = window.innerHeight;
        
        cursorX = Math.max(0, Math.min(cursorX, maxX));
        cursorY = Math.max(0, Math.min(cursorY, maxY));

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
    }
    
    animationId = requestAnimationFrame(animate);
}

// Only start if element exists
if (cursor) {
    animate();
}

document.addEventListener('mousemove', (event) => {
    if (!isPaused) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
});

// Pause/Play functionality with error checking
const pauseBtn = document.getElementById('pauseBtn');
const body = document.body;

if (pauseBtn) { // Add null check
    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        
        if (isPaused) {
            body.classList.add('paused');
            pauseBtn.innerHTML = '▶️ Play';
            
            // Center the gradient when paused
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            cursorX = centerX;
            cursorY = centerY;
            
            if (cursor) {
                cursor.style.left = centerX + 'px';
                cursor.style.top = centerY + 'px';
            }
            
        } else {
            body.classList.remove('paused');
            pauseBtn.innerHTML = '⏸️ Pause';
        }
    });
}

// Clean up on page unload
window.addEventListener('beforeunload', () => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
});