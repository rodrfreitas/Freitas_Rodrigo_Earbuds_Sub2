(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#about-img", {
        scrollTrigger: {
            trigger: "#about-content",
            start: "top center", 
            end: "bottom center",
            scrub: true, // Smooth
        },
        opacity: 1, // Fade in 
        scale: 1.1,
        ease: "power2.out", // Easing
    });

    gsap.to("#about-text", {
        scrollTrigger: {
            trigger: "#about-content",
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
        opacity: 1,
        scale: 1.1,
        ease: "power2.out",
    });

    gsap.to("#about-icons", {
        scrollTrigger: {
            trigger: "#about-img",
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
        opacity: 1,
        x: 0,
        ease: "power2.out",
    });

    gsap.to("#partners-logo", {
        scrollTrigger: {
            trigger: "#partners-section",
            start: "top center", 
            end: "bottom center",
            scrub: true, // Smooth
        },
        opacity: 1, // Fade in 
        scale: 1,
        ease: "power2.out", // Easing
    });

})();