import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 
const jsLoaderBg = '.js-loader-bg';
const jsDot = '.js-loader-dot-wrap > span';
const jsLogo = '.js-moveItem';
const jsMoveBg = '.js-moveBg';
const tl = gsap.timeline();

export const TimeLine = () => {
  if (jsLoaderBg == null) {
    return;
  }
  gsap.set(jsDot, {
    opacity: 0,
    y: -60
  });
  gsap.set(jsLogo, {
    filter:"blur(8px)",
    scale: 0.98,
  });
  gsap.set(jsMoveBg, {
    opacity: 0
  });
  tl.to(
    jsDot, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0,
    stagger: {
      amount: 0.4,
      from: "start",
      ease: 'power4.inOut'
    }
  },
  ).to(
    jsDot, {
      opacity: 0,
      duration: 1,
    }
  ).to(
    jsLoaderBg, {
      opacity: '0',
      duration: 0.4
    }
  ).to(
    jsLogo, {
      filter:"blur(0px)",
      scale: 1,
      duration: 1,
      stagger: {
        amount: 0.4,
        from: "start",
        ease: 'power4.inOut'
      }
    }
  ).to(
    jsMoveBg, {
      opacity: 1,
      duration: 3
    }
  )
}