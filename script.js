function showResources() {
    const resourceList = document.getElementById('resource-list');
    if (resourceList.classList.contains('hidden')) {
        resourceList.classList.remove('hidden');
    } else {
        resourceList.classList.add('hidden');
    }
}

// Example for form submission (add backend functionality as needed)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
});
