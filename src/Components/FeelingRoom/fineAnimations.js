import gsap from 'gsap'

export const fineBackgroundAnimation = () => {
  let fineTl = gsap.timeline({repeat: 25, yoyo: true});
  fineTl.to('.fineRoom', {
    duration: 8,
    background: 'linear-gradient(90deg, hsl(164, 73%, 80%) 0%, hsl(118, 32%, 64%) 50%, hsl(33, 29%, 68%) 100%)',
  })
  .to('.fineRoom', {
    duration: 8,
    background: 'linear-gradient(180deg, hsl(164, 73%, 80%) 0%, hsl(118, 32%, 64%) 50%, hsl(33, 29%, 68%) 100%)',
  })
}

export const floatAnimation = (element, scale) => {
  let floatTl = gsap.timeline({repeat: 200, });
  floatTl.to(element, {
    duration: 5,
    scale: scale,
    x: '+=random(-400, 400)',
    y: '+=random(-400, 400)',
    ease: 'slow',
  })
  .to(element, {
    duration: 5,
    scale: scale,
    x: '+=random(-400, 400)',
    y: '+=random(-400, 400)',
    ease: 'slow',
  })
  .to(element, {
    duration: 5,
    scale: scale,
    x: '+=random(-400, 400)',
    y: '+=random(-400, 400)',
    ease: 'slow',
  })
}
