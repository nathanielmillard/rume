import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.scss'

const WelcomePage = () => {
  return (
    <section className="welcomeWrapper">
      <h1 className="logo" data-testid='appTitle'>Rume</h1>
      <h2 data-testid='appDirections'>Click the door below to enter the lobby</h2>
    </section>
  )
}

export default WelcomePage
