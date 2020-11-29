import React, {useEffect} from 'react';
import './WelcomePage.scss'
import gsap from 'gsap';

const WelcomePage = () => {
  const animate = () => {
    gsap.to(".logo", {duration: 3, fontSize: "30vw", ease: "power2", opacity: 100})
  }
  useEffect(()=>{
    animate()
  })
  return (
    <section className="welcomeWrapper">
      <h1 className="logo" data-testid='appTitle'>Rume</h1>
      <h2 data-testid='appDirections'>Click the door below to enter the lobby</h2>
    </section>
  )
}

export default WelcomePage
