/**
 * Animation utilities for smooth load-in effects
 */

class AnimationObserver {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                root: null,
                rootMargin: '0px 0px -100px 0px', // Trigger 100px before element comes into view
                threshold: 0.1
            }
        );
        
        this.init();
    }
    
    init() {
        // Auto-observe elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-children'
        );
        
        animatedElements.forEach(element => {
            this.observer.observe(element);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once animated
                this.observer.unobserve(entry.target);
            }
        });
    }
    
    // Method to manually trigger animations
    animateElement(element, animationType = 'fade-in', delay = 0) {
        element.classList.add(animationType);
        
        setTimeout(() => {
            element.classList.add('visible');
        }, delay);
    }
    
    // Method to animate a group of elements with stagger
    animateGroup(elements, animationType = 'fade-in', staggerDelay = 100) {
        elements.forEach((element, index) => {
            this.animateElement(element, animationType, index * staggerDelay);
        });
    }
}

// Initialize animations when DOM is loaded
let animationObserver;

function initializeAnimations() {
    animationObserver = new AnimationObserver();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AnimationObserver, initializeAnimations };
}