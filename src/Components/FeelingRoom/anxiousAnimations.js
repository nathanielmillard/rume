import gsap from 'gsap';

export const anxiousAnimation1 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: 1,
    opacity: 1,
    scaleY: 2,
    scaleX: 2,
    opacity: .5,
  })
  .delay(1.5)
}

export const anxiousAnimation2 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: 1,
    opacity: 1,
    scaleY: .1,
    scaleX: .1,
    opacity: .1,
  })
}

export const anxiousAnimation3 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: .9,
    opacity: 1,
    scaleY: 3.4,
    scaleX: 3.4,
    opacity: .2,
  })
  .delay(2)
}

export const anxiousAnimation4 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: 1,
    opacity: 1,
    scaleY: 3,
    scaleX: 3,
  })
  .delay(.25)
}

export const anxiousAnimation5 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: 1,
    opacity: 1,
    scaleY: .7,
    scaleX: .7,
  })
  .delay(.45)
}

export const anxiousAnimation6 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: 1,
    opacity: 1,
    scaleY: .2,
    scaleX: .2,
  })
  .delay(.75)
}

export const anxiousAnimation7 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: 1,
    opacity: 1,
    scaleY: .3,
    scaleX: .3,
  })
  .delay(2.5)
}

export const anxiousAnimation8 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: 1,
    opacity: 1,
    scaleY: 1.8,
    scaleX: 1.8,
  })
  .delay(.55)
}

export const anxiousAnimation9 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: 1,
    opacity: 1,
    scaleY: 1.3,
    scaleX: 1.3,
  })
  .delay(.95)
}
