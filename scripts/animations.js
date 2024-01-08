const observeAnimation = (anim, rootMargin, threshold) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add(anim+'-active');
            }
            else{
                entry.target.classList.remove(anim+'-active');
            }
        });
    },
    {
        rootMargin,
        threshold
    }
    );
    document.querySelectorAll('.'+anim).forEach(el => observer.observe(el));
}



observeAnimation('anim-fade-in');
observeAnimation('anim-fade-in--mg-500', '0px 0px -500px 0px');
observeAnimation('anim-slide-in-left');
observeAnimation('anim-slide-in-right');
observeAnimation('anim-slide-in-bottom');