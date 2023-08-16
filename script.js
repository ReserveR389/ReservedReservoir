// Get the toggle button and social icons container
const toggle = document.getElementById('toggle');
const socialIcons = document.getElementById('socialIcons');

// Add a click event listener to the toggle button
toggle.addEventListener('click', () => {
    // Toggle the 'active' class on the social icons container
    socialIcons.classList.toggle('active');

    // Rotate the toggle button
    toggle.classList.toggle('active');
});
