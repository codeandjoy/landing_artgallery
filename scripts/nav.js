// const scrollToAbout = () => gsap.to(document.body, {duration: .5, scrollTo: '#about-section'});
// const scrollToAttend = () => gsap.to(document.body, {duration: .5, scrollTo: '#attend-section'});
const scrollToAbout = () => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
const scrollToAttend = () => document.getElementById('attend-section').scrollIntoView({ behavior: 'smooth' });



// Desktop
document.querySelector('#btn-about').addEventListener('click', () => {
    scrollToAbout();
})
document.querySelector('#btn-attend').addEventListener('click', () => {
    scrollToAttend();
});
document.querySelector('#btn-visit').addEventListener('click', () => {
    scrollToAttend();
});
// 



// Mobile
const btnOpenNav = document.getElementById('btn-open-nav');
const pageFade = document.getElementById('full-page-fade');
const navButtons = document.querySelector('.nav-buttons');
let mobileMenuOpen = false;

// Setup
pageFade.style.display = 'none';
navButtons.style.display = 'none';
//

const openMobileMenu = () => {
    btnOpenNav.classList.add('opened');

    pageFade.style.display = 'block';
    navButtons.style.display = 'flex';
    setTimeout(() => {
        pageFade.classList.add('anim-page-fade-active');
        navButtons.classList.add('anim-nav-buttons-active');
    }, 0); // brings slight delay and thus order of execution (display -> transition)
    
    mobileMenuOpen = true;
}
const closeMobileMenu = () => {
    btnOpenNav.classList.remove('opened');

    pageFade.classList.remove('anim-page-fade-active');
    navButtons.classList.remove('anim-nav-buttons-active');
    pageFade.style.display = 'none';
    navButtons.style.display = 'none';

    mobileMenuOpen = false;
}



btnOpenNav.addEventListener('click', () => {
    if(!mobileMenuOpen) openMobileMenu();
    else if (mobileMenuOpen) closeMobileMenu();
});

document.querySelector('#btn-mobile-about').addEventListener('click', () => {
    closeMobileMenu();
    scrollToAbout();
});

document.querySelector('#btn-mobile-visit').addEventListener('click', () => {
    closeMobileMenu();
    scrollToAttend();
});
// 