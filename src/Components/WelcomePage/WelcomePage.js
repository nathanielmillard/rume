import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <section>
      <h1>Hewwo</h1>
      <Link to='/lobby'>
        <button>Door To Lobby</button>
      </Link>
    </section>
  )
}

export default WelcomePage
