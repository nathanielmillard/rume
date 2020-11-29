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

export const createAnxiousRoom = () => {
  return (
    <section className='anxiousRoom'>
      <div class='hexagon' id='hex1'></div>
      <div class='hexagon' id='hex2'></div>
      <div class='hexagon' id='hex3'></div>
      <div class='hexagon' id='hex4'></div>
      <div class='hexagon' id='hex5'></div>
      <div class='hexagon' id='hex6'></div>
      <div class='hexagon' id='hex7'></div>
      <div class='hexagon' id='hex8'></div>
      <div class='hexagon' id='hex9'></div>
      <div class='hexagon' id='hex10'></div>
      <div class='hexagon' id='hex11'></div>
    </section>
  )
}
