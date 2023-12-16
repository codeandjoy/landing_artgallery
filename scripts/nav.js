document.querySelector('#btn-about').addEventListener('click', () => {
    gsap.to(document.body, {duration: .5, scrollTo: '#about-section'});
});

document.querySelector('#btn-attend').addEventListener('click', () => {
    gsap.to(document.body, {duration: .5, scrollTo: '#attend-section'});
});
document.querySelector('#btn-visit').addEventListener('click', () => {
    gsap.to(document.body, {duration: .5, scrollTo: "#attend-section"})
});

