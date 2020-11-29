import gsap from 'gsap'
import {FineBubble} from './FeelingRoom-SC.js'

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
  let floatTl = gsap.timeline({repeat: 200, yoyo:true});
  floatTl.to(element, {
    duration: 10,
    scale: scale,
    x: '+=random(-400, 400)',
    y: '+=random(-400, 400)',
    ease: 'slow',
  })
  .to(element, {
    duration: 10,
    scale: scale,
    x: '+=random(-400, 400)',
    y: '+=random(-400, 400)',
    ease: 'slow',
  })
  .to(element, {
    duration: 10,
    scale: scale,
    x: '+=random(-400, 400)',
    y: '+=random(-400, 400)',
    ease: 'slow',
  })
}

export const createFineRoom = () => {
  let bubbles = []
  for (let i=0; i < 13; i++ ){
    let randomNum = Math.random() * (40 - 5) + 5
    let color
    if (randomNum % 2 > 1) {
      color = 'hsla(119, 38%, 72%, .8)'
    } else if (randomNum % 2 > .6) {
      color = 'hsla(62, 69%, 90%, .7)'
    } else if (randomNum % 2 > 1.2) {
      color = 'hsla(62, 69%, 90%, .2)'
    } else {
      color = 'hsla(119, 38%, 72%, .2)'
    }
    bubbles.push(
      <FineBubble id={`fineCircle${i}`}
      size={`${randomNum}vh`}
      color= {color}
      zIndex={i}
      key={i}
      />
    )
  }
  return (
    <section className='fineRoom'>
      {bubbles}
    </section>
  )
}
