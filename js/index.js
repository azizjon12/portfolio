const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// We will toggle a class we haven't created yet called nav-open
// By doing that it's gonna mean every time we click on the button 
//     it should add that class.
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Now we want to close a nav bar after going to
//     any section of the website. 
// We need to get individual links here
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});