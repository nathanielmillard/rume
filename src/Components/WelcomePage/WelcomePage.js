import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.scss'

const WelcomePage = () => {
  return (
    <section className="welcomeWrapper">
      <h1 className="logo">Rume</h1>
      <h2>Click the door below to enter the lobby</h2>
    </section>
  )
}

export default WelcomePage
