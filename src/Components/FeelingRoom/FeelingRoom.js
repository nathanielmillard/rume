import React from 'react';
import './FeelingRoom.scss';
import { Component } from 'react';
import './fineAnimations.scss';
import { fineBackgroundAnimation } from './fineAnimations.js'

class FeelingRoom extends Component {
  constructor(props){
    super(props)
    this.state= {
      isFeeling: false
    }
  }
  createFineRoom = () => {
    fineBackgroundAnimation()
    return (
      // console.log('Fine')
      <section className='fineRoom'>
        <div className='fineCircles' id='fineCircle2'></div>
        <div className='fineCircles' id='fineCircle1'></div>


      </section>
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
    //functions to animate go here
    return (
      console.log('ANGRY')
      //elements to animate go here
    )
  }
  chooseRoomMood = () => {
    if(this.props.mood === 'angry') {
      return this.createAngryRoom()
    } else if(this.props.mood === 'sad') {
      return this.createSadRoom()
    } else if(this.props.mood === 'anxious'){
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
