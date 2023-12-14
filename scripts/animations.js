const heroText = new SplitType(document.querySelector('.hero-content p'), { types: 'chars' });

const heroSectionTimeline = gsap.timeline();
heroSectionTimeline
    .to('.hero-section', {
        backgroundPosition: 'center 0%'
    })
    .from('.hero-bust', {
        opacity: 0,
        duration: 1
    }, 0)
    .from('.header-art', {
        x: -50,
        duration: .5
    }, 0)
    .from('.hero-content h1', {
        x: 50,
        duration: .5
    }, 0)
    .from(heroText.chars, {
        opacity: .4,
        stagger: .006
    }, 0)
    .from('.hero-content button', {
        opacity: 0,
        y: 100
    }, .5)
    .from('.hero-content .button-art', {
        opacity: 0,
        y:100
    }, .5)



const aboutContent_images = gsap.utils.toArray('.about-image');
aboutContent_images.forEach(image => {
    gsap.to(image, {
        backgroundPosition: '50% 50%',

        scrollTrigger: {
            trigger: image,
            start: 'top 100%',
            end: 'bottom, 40%',
            scrub: 1,
        }
    });
});

const aboutContent_h3s = gsap.utils.toArray('.about-content h3');
aboutContent_h3s.forEach(h3 => {
    gsap.from(h3, {
        opacity: 0,
        y: 100,

        scrollTrigger: {
            trigger: h3,
            start: 'top 100%',
            end: 'bottom, 70%',
            scrub: 1,
        }
    })
});

const aboutContent_ps = gsap.utils.toArray('.about-content p');
aboutContent_ps.forEach((p, idx) => {
    gsap.from(p, {
        opacity: 0,
        x: idx !== 1 ? 100 : - 100,

        scrollTrigger: {
            trigger: p,
            start: 'top 85%',
            end: 'bottom, 55%',
            scrub: 1,
        }
    });
});



const ctaImages = gsap.utils.toArray('.cta-image');
ctaImages.forEach(image => {
    gsap.to(image, {
        backgroundPosition: 'center 0%',
    
        scrollTrigger: {
            trigger: image,
            start: 'top 100%',
            end: 'top 40%',
            scrub: 1
        }
    }); 
});

gsap.from('.cta', {
    opacity: 0,
    scale: .5,

    scrollTrigger:{
        trigger: '.cta',
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1
    }
})



const dots = gsap.utils.toArray('.dots');
const attendSectionTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.attend-section',
        start: 'top 0%',
        end: 'top 0%'
    }
});
attendSectionTimeline
    .from(dots[0], {
        opacity: 0,
        x: -50,
        y: -50
    }, 0)
    .from(dots[1], {
        opacity: 0,
        x: 50,
        y: -50
    }, 0)
    .from(dots[2], {
        opacity: 0,
        x: -50,
        y: 50
    }, 0)
    .from(dots[3], {
        opacity: 0,
        x: 50,
        y: 50
    }, 0)

const attendWords = gsap.utils.toArray('.words-attend span');
gsap.from(attendWords, {
    opacity: 0,
    stagger: .1,

    scrollTrigger: {
        trigger: '.attend-section',
        start: 'top 0%',
        end: 'top 0%'
    }
});