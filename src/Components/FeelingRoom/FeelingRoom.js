import React from 'react';
import './FeelingRoom.scss';
import './angryAnimations.scss';
import {Component} from 'react'
import {angryFeelingAnimation} from './angryAnimations.js'

class FeelingRoom extends Component {
  constructor(props){
    super(props)
    this.state= {
      isFeeling: false
    }
  }
  createFineRoom = () => {
    //functions to animate go here
    return (
      console.log('Fine')
      //elements to animate go here
    )
  }
  createAnxiousRoom = () => {
    //functions to animate go here
    return (
      console.log('ANXIOUS')
      //elements to animate go here
    )
  }
  createSadRoom = () => {
    //functions to animate go here
    return (
      console.log('SAD')
      //elements to animate go here
    )
  }
  createAngryRoom = () => {
    const squareNums = Array.from(Array(10).keys())
      angryFeelingAnimation()
    const angrySquares = squareNums.map(num => {
        return (
          <div className={`square${num}`}>
            <div className='childSquare' id='part1'></div>
            <div className='childSquare' id='part3'></div>
            <div className='childSquare' id='part2'></div>
            <div className='childSquare' id='part4'></div>
          </div>
        )
      })
      return (
        <section>
          {angrySquares}
        </section>
    )
  }
  chooseRoomMood = () => {
    if(this.props.mood === 'Angry') {
      return this.createAngryRoom()
    } else if(this.props.mood === 'Sad') {
      return this.createSadRoom()
    } else if(this.props.mood === 'Anxious'){
      return this.createAnxiousRoom()
    } else {
      return this.createFineRoom()
    }
  }
  startFeeling = () => {
    this.setState({isFeeling: true})
  }
  render(){
    let instructions = (
      <section className='Directions'>
        <h1> Welcome to the feeling room </h1>
        <p>
          First pick a kind of sound you want to listen to.
          Then feel free to pause and play sound as you see fit.
          Enjoy the sights and sounds of your feeling space.
        </p>
        <button onClick={this.startFeeling}> Get Started </button>
      </section>
    )
    return (
      <section className='FeelingRoom'>
        {!this.state.isFeeling && instructions}
        <section className="soundControlPanel">
          <button>Nature Sound Svg</button>
          <button>Ambient Sound Svg</button>
          <button>Music Sound Svg</button>
          <button> Play </button>
          <button> Pause </button>
        </section>
        {this.chooseRoomMood()}
      </section>
    )
  }
}

export default FeelingRoom
