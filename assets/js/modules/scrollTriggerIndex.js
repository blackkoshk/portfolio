import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/**▼ スクロールトリガーアニメーション ▼*****************************************/
export function scrollTriggerIndex() {

    const triggerSection = document.querySelector(".js-works");
    const listContainer = document.querySelector(".js-works__container");
    const listElement = document.querySelector(".js-works__container-list");
    const scrollValue = listElement.clientWidth - listContainer.clientWidth;

let currentWidth = window.innerWidth;
function onResize(){
const newWidth = window.innerWidth;
if(
    (newWidth < 768 && currentWidth >= 768) ||
    (newWidth >= 768 && currentWidth < 768)
) {
    location.reload();
}
currentWidth = newWidth;
}
window.addEventListener('resize', onResize);

if(currentWidth >= 768){
    gsap.to(".js-main__mv-earth", {
        scale: 4,
        opacity: 0,
        scrollTrigger: {
        trigger: ".js-main__mv",
        start: "top top",
        end: 'bottom top',
        scrub: true,
        pin: true
        }
    });
}

    gsap.to(".js-about__info-pic", {
        scrollTrigger: {
        trigger: ".js-about__info-pic",
        start: "top center",
        once: true,
        toggleClass: {
        targets: ".js-about__info-pic",
        className: "js-about__info-mosaic",
            },
        },
    });

    const animations = [

    {
        targets: ['.js-title__about span'],
        props: { y: 0, opacity: 1 },
        trigger: '.js-title__about',
        start: 'bottom bottom',
        once: true
    },
    {
        targets: ['.js-about__info-name'],
        props: { backgroundImage: "linear-gradient(0,#fff 100%,#858585 0)" },
        trigger: '.js-about__info-name',
        start: 'bottom bottom',
        end:'bottom center',
        once: true
    },
    {
        targets: ['.js-about__info-greeting'],
        props: { backgroundImage: "linear-gradient(0,#fff 100%,#858585 0)" },
        trigger: '.js-about__info-greeting',
        start: 'bottom bottom',
        end:'bottom bottom',
        once: true
    },
    {
        targets: ['.js-title__skills span'],
        props: { y: 0, opacity: 1 },
        trigger: '.js-title__skills',
        start: 'bottom bottom',
        once: true
    },
    {
        targets: ['.js-title__works span'],
        props: { y: 0, opacity: 1 },
        trigger: '.js-title__works',
        start: 'bottom bottom',
        once: true
    },
    {
        targets: ['.js-skills__list'],
        props: { y: 0 },
        trigger: '.js-skills__list',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        once: true
    },
    ];

    animations.forEach(animation => {
        gsap.to(animation.targets, {
        ...animation.props,
        scrollTrigger: {
            trigger: animation.trigger,
            start: animation.start,
            end: animation.end,
            scrub: animation.scrub,
            pin: animation.pin || null,
            anticipatePin: animation.anticipatePin,
            invalidateOnRefresh: animation.invalidateOnRefresh,
            once: animation.once,
        }
        });
    });

    if(currentWidth >= 768){
    gsap.to(listElement, {
        x: -scrollValue,
        ease: 'none',
        scrollTrigger: {
        trigger: triggerSection,
        start: 'top 100',
        end: `+=${scrollValue}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        }
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('js-active');
        }
    });
});

const btns = document.querySelectorAll('.js-btn__link-animation');
btns.forEach((btn) => {
    observer.observe(btn);
});
/**▲ スクロールトリガーアニメーション ▲*****************************************/

}



