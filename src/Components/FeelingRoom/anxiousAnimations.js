import gsap from 'gsap';

export const anxiousAnimation = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 25, yoyo: true});
  anxiousTl.to(hex, {
    duration: 5,
    scale: 1,
    ease: 'slow',
  })
}
