import gsap from 'gsap';

export const anxiousBackgroundAnimation = () => {
  let anxiousTl = gsap.timeline({repeat: 25, yoyo: true});
  anxiousTl.to('.anxiousRoom', {
    duration: 1,
    background: 'linear-gradient(90deg, hsl(164, 73%, 80%) 0%, hsl(118, 32%, 64%) 50%, hsl(33, 29%, 68%) 100%)',
  })
  .to('.anxiousRoom', {
    duration: 8,
    background: 'linear-gradient(180deg, hsl(164, 73%, 80%) 0%, hsl(118, 32%, 64%) 50%, hsl(33, 29%, 68%) 100%)',
  })
}

export const popAnimation = (element) => {
  let popTl = gsap.timeline({repeat: 10});
  popTl.set(element, {autoAlpha:0});
  popTl.to(element, 10, { bezier: {
            type: 'soft',
            values: 1,
            smoothOrigin: true,
            timeResolution: 12
          }, });
popTl.to(element, 5, {autoAlpha:1, repeat:1, yoyo:true}, 0)
}
  // .to(element, {
  //   duration: 5,
  //   scale: scale,
  //   x: '+=random(-400, 400)',
  //   y: '+=random(-400, 400)',
  //   ease: 'slow',
  // })
  // .to(element, {
  //   duration: 5,
  //   scale: scale,
  //   x: '+=random(-400, 400)',
  //   y: '+=random(-400, 400)',
  //   ease: 'slow',
  // })
