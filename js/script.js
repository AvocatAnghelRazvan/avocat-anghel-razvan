let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector("header nav a[href*='" + id + "']").classList.add('active');
            });
        }
    });

    navbar.classList.remove('active');
    menu.classList.remove('bx-x');

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    const links = document.querySelectorAll('.navbar a');
    
    // Add click event to each link
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        // Only process links that point to an ID on the page
        if(this.getAttribute('href').startsWith('#')) {
          e.preventDefault(); // Prevent default jump behavior
          
          // Get the target element
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          // If target exists, scroll to it
          if(targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 1, // Adjust offset as needed
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });
