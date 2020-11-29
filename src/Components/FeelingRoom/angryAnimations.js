import gsap from 'gsap'
import {AngryBox, AngryChild} from './FeelingRoom-SC.js'

export const angryBGAnimation = () => {
  const angryBGTL = gsap.timeline({repeat: 100, yoyo: true})
  angryBGTL.from('.angryRoom', {
    duration: .1,
    background: 'linear-gradient(45deg, hsla(327, 25%, 39%, 100%), hsl(320, 30%, 12%))',
  })
  angryBGTL.to('.angryRoom', {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(327, 25%, 35%),  hsl(324, 27%, 20%))',
  })
  angryBGTL.to('.angryRoom', {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(327, 25%, 31%), hsl(325, 26%, 24%))',
  })
  angryBGTL.to('.angryRoom', {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(327, 26%, 27%), hsl(327, 26%, 27%))',
  })
  angryBGTL.to('.angryRoom', {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(325, 26%, 24%), hsl(327, 25%, 31%))',
  })
  angryBGTL.to('.angryRoom', {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(324, 27%, 20%), hsl(327, 25%, 35%) )',
  })
  angryBGTL.to('.angryRoom', {
    duration: 2,
    background: 'linear-gradient(45deg, hsl(320, 30%, 12%), hsl(327, 25%, 39%) )',
  })
}

export const angryBoxAnimation = () => {
  let angryTimeline = gsap.timeline({repeat: 20})
  for(let i = 0; i < 13; i++) {
    let square = `#angryBox${i}`
    angryTimeline.to(`${square} .angryBoxChild`, {
      x:0,
      y:0
    })
    .to(square, {
      duration: .75,
      y: '100vh',
      ease: 'none'
    })
    .add('explode')
    .to(square, {
      duration: .2,
      background: 'none'
    }, 'explode')
    .to(`${square} .angryBoxChild`, {
      rotate: 'random(-45, 45, 2)'
    }, 'explode')
    .to(`${square}Child0`, {
      duration:.5,
      y: '-=50vh',
      x: '-=30vh',
    }, 'explode')
    .to(`${square}Child1`, {
      duration:.5,
      y: '-=50vh',
      x: '+=10vh',
    }, 'explode')
    .to(`${square}Child2`, {
      duration:.5,
      y: '-=50vh',
      x: '-=60vh',
    }, 'explode')
    .to(`${square}Child3`, {
      duration:.5,
      y: '-=50vh',
      x: '+=30vh',
    }, 'explode')
    .to(`${square}Child4`, {
      duration:.5,
      height: '10%',
      width: '10%',
      y: '-=90vh',
      x: '+=20vh',
    }, 'explode')
    .to(`${square}Child5`, {
      duration:.5,
      height: '15%',
      width: '15%',
      y: '-=80vh',
      x: '-=50vh',
    }, 'explode')
    .to(`${square}Child6`, {
      duration:.5,
      height: '20%',
      width: '20%',
      y: '-=70vh',
      x: '+=0vh',
    }, 'explode')
    .to(`${square}Child7`, {
      duration:.5,
      height: '30%',
      width: '30%',
      y: '-=60vh',
      x: '-=20vh',
    }, 'explode')
    .to(`${square} .angryBoxChild`, {
      duration: .5,
      opacity: 0
    }, 'explode')
  }
}

export const createAngryRoom = () => {
  const squareNums = Array.from(Array(13).keys())
  const angrySquares = squareNums.map((num, index) => {
    let randomSize = Math.random() * (30 - 10) + 10
    let randomPosition = Math.random() * (90 - 10) + 10
    let color
    if(index % 3 === 0) {
      color = 'hsl(225, 10%, 8%)'
    } else if(index % 2 === 0) {
      color = 'hsl(340, 100%, 17%)'
    } else {
      color = 'hsl(200, 14%, 96%)'
    }
    let childArray = []
    for (let i = 0; i < 8; i++) {
      childArray.push(
        <AngryChild
          color={color}
          id={`angryBox${index}Child${i}`}
          className={`angryBoxChild`}
          size={`${randomSize/2}vh`}
          key={i}
        />
      )
    }
    return (
      <AngryBox
        size={`${randomSize}vh`}
        position={`${randomPosition}vw`}
        color={color}
        id={`angryBox${index}`}
        key={index}
      >
        {childArray}
      </AngryBox>
    )
  })
  return (
    <section className='angryRoom'>
      {angrySquares}
    </section>
  )
}
