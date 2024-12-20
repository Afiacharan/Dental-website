// Counter function
function animateCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let current = start;
    let timer = setInterval(() => {
        current += increment;
        element.textContent = current + "+";
        if (current == end) {
            clearInterval(timer);
        }
    }, step);
}

// Triggering the counter when the section is in view
window.addEventListener("scroll", function() {
    let section = document.querySelector('.col-md-6');
    let sectionPosition = section.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        // Start the counters when the section is visible
        animateCounter("counter1", 0, 15, 2000);  // Years of Operations
        animateCounter("counter2", 0, 500, 2000); // Happy Clients
        animateCounter("counter3", 0, 120, 2000); // Completed Projects
        animateCounter("counter4", 0, 20, 2000);  // Awards Won
    }
});
