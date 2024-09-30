// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.getElementById('skills');
    const toggleButton = document.getElementById('toggle-skills');
    
    // Add an event listener to the button
    toggleButton.addEventListener('click', function() {
        // Toggle visibility of the skills section
        const skillsList = skillsSection.querySelector('ul');
        
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsList.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });
    
    // Initially hide the skills section
    const skillsList = skillsSection.querySelector('ul');
    skillsList.style.display = 'none';  // Skills hidden at the beginning
    toggleButton.textContent = 'Show Skills';  // Set button text
});
