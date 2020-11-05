import React from 'react';
import {Component} from 'react'
import './BreathingRoom.scss';

import {inhaleExhale} from './BreathingRoomAnimation.js'

class BreathingRoom extends Component {
  constructor(props){
    super(props)
    this.state ={
      isBreathing: false
    }
  }

  clickHandler = () => {
    this.setState({isBreathing: true})
    inhaleExhale(this.props.mood.toLowerCase())
  }

  render(){
    let instructions = (
      <section className='directions' data-testid='instructions'>
      <h1>Take a moment to breathe</h1>
      <p>Follow the animation, breathe in as it expands
      and breathe out as it contracts.</p>
      <button onClick={this.clickHandler}> Start </button>
    </section>
  )
    return (
      <section className='BreathingRoom'>
      {!this.state.isBreathing && instructions}
        <div className='shape' id='one'></div>
        <div className='shape' id='two'></div>
        <div className='shape' id='three'></div>
        <div className='shape' id='four'></div>
        <div className='shape' id='five'></div>
      </section>
    )
  }
}

export default BreathingRoom
