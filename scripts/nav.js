const scrollToAbout = () => gsap.to(document.body, {duration: .5, scrollTo: '#about-section'});
const scrollToAttend = () => gsap.to(document.body, {duration: .5, scrollTo: '#attend-section'});



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
const openMobileMenu = () => {
    btnOpenNav.classList.add('opened');
    gsap.to('#full-page-fade', {
        display: 'block',
        opacity: .5,
        duration: .2
    });
    gsap.to('.nav-buttons', {
        height: 'auto',
        duration: .2
    });
    
    mobileMenuOpen = true;
}
const closeMobileMenu = () => {
    btnOpenNav.classList.remove('opened');
    gsap.to('#full-page-fade', {
        display: 'none',
        opacity: 0,
        duration: .2
    });
    gsap.to('.nav-buttons', {
        height: 0,
        duration: .2
    });
    
    mobileMenuOpen = false;
}

const btnOpenNav = document.querySelector('#btn-open-nav');
let mobileMenuOpen = false;

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