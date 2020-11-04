import gsap from 'gsap';

export const anxiousAnimation1 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
    background: 'hsl(48.7,42.7%,70.6%)',
  })
  .to(hex, {
    duration: .8,
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
    duration: .67,
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
    duration: .6,
    opacity: .7,
    scaleY: 3.4,
    scaleX: 3.4,
  })
  .delay(2)
}

export const anxiousAnimation4 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: .7,
    opacity: 1,
    scaleY: 2.5,
    scaleX: 2.5,
  })
  .delay(.25)
}

export const anxiousAnimation5 = (hex) => {
  let anxiousTl = gsap.timeline({repeat: 250, yoyo: true});
  anxiousTl.to(hex, {
    opacity: 0,
  })
  .to(hex, {
    duration: .5,
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
    duration: .78,
    opacity: .2,
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
    duration: .49,
    opacity: .5,
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
    duration: .86,
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
    duration: .74,
    opacity: 1,
    scaleY: 1.3,
    scaleX: 1.3,
  })
  .delay(.95)
}
