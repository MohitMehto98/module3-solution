let toggle = document.getElementsByClassName('toggle')[0];
let navbarLink = document.getElementsByClassName('navbar-link')[0];


toggle.addEventListener('click', () => {
    navbarLink.classList.toggle('active');
});

