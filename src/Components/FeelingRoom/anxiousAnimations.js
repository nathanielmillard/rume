import gsap from 'gsap';

export const anxiousAnimation = (hex, duration, opacity, scale, delay) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: duration,
    opacity: opacity,
    scaleY: scale,
    scaleX: scale,
  })
  .delay(delay)
}
