import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function scrollTriggerSub() {

/**▼ 下層ページのタイトル ▼*****************************************/
            let observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('js-active');
                }
            });
        });
        let btn = document.querySelector('.js-page-title');
        observer.observe(btn);
/**▲ 下層ページのタイトル ▲*****************************************/


/**▼ スクロールトリガーアニメーション ▼*****************************************/
        const animations = [
            {
                targets: ['.js-page-works__img01'],
                props: { y: 200 },
                trigger: '.js-page-works__detail-info',
                start: 'top bottom',
                scrub: true,
            },
            {
                targets: ['.js-page-works__img02'],
                props: { y: -200 },
                trigger: '.js-page-works__detail-info',
                start: 'top bottom',
                scrub: true,
            },
            {
                targets: ['.js-page-about__info-name'],
                props: { backgroundImage: "linear-gradient(0,#fff 100%,#858585 0)" },
                trigger: '.js-page-about__info-name',
                start: 'bottom bottom',
                end:'bottom center',
                once: true
            },
            {
                targets: ['.js-page-about__info-greeting'],
                props: { backgroundImage: "linear-gradient(0,#fff 100%,#858585 0)" },
                trigger: '.js-page-about__info-greeting',
                start: 'bottom bottom',
                end:'bottom center',
                once: true
            },
            // {
            //     targets: ['.js-page-title__another'],
            //     props: { backgroundImage: "linear-gradient(0,#fff 100%,#020926 0)" },
            //     trigger: '.js-page-title__another',
            //     start: 'bottom bottom',
            //     end:'bottom center',
            //     scrub: true,
            //     once: true
            // },
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
                once: animation.once,
            }
            });
        });

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
    }

/**▲ スクロールトリガーアニメーション ▲*****************************************/


