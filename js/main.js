document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the tab to activate
            const tabToActivate = button.getAttribute('data-tab');
            
            // Find the corresponding panel and activate it
            const panelToActivate = document.getElementById(`${tabToActivate}-panel`);
            if (panelToActivate) {
                panelToActivate.classList.add('active');
            }
        });
    });
    
    // Mobile navigation toggle (if needed)
    // This can be expanded later if a mobile menu is added
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
