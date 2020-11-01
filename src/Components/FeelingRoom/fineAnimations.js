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

export const floatAnimation = (element) => {
  let floatTl = gsap.timeline({repeat: 1, });
  floatTl.to(element, {
    duration: 5,
    scale: 2,
    x: '+=random(-100, 100)',
    y: '+=random(-100, 100)',
    ease: 'bounce',
  })
}
