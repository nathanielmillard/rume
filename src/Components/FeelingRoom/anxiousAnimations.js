import gsap from 'gsap';
import hexoutline1 from '../../Assets/hexoutline1.png';
import hexoutline2 from '../../Assets/hexoutline2.png';
import hexoutline3 from '../../Assets/hexoutline3.png';
import hexoutlineblur1 from '../../Assets/hexoutlineblur1.png';
import hexoutlineblur2 from '../../Assets/hexoutlineblur2.png';
import hexoutlineblur3 from '../../Assets/hexoutlineblur3.png';

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
      <img alt='hexoutline' id='hex1' src={hexoutline1} />
      <img alt='hexoutline' id='hex2' src={hexoutlineblur2} />
      <img alt='hexoutline' id='hex3' src={hexoutlineblur1} />
      <img alt='hexoutline' id='hex4' src={hexoutline2} />
      <img alt='hexoutline' id='hex5' src={hexoutline3} />
      <img alt='hexoutline' id='hex6' src={hexoutlineblur1} />
      <img alt='hexoutline' id='hex7' src={hexoutlineblur2} />
      <img alt='hexoutline' id='hex8' src={hexoutlineblur3} />
      <img alt='hexoutline' id='hex9' src={hexoutline2} />
      <img alt='hexoutline' id='hex10' src={hexoutlineblur1} />
      <img alt='hexoutline' id='hex11' src={hexoutline3} />
    </section>
  )
}
