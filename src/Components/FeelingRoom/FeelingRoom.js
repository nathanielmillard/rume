import React from 'react';
import './anxiousAnimations.scss';
import './FeelingRoom.scss';
import { Component } from 'react';
import './fineAnimations.scss';
import { fineBackgroundAnimation, floatAnimation } from './fineAnimations.js'

class FeelingRoom extends Component {
  constructor(props){
    super(props)
    this.state= {
      isFeeling: false
    }
  }
  createFineRoom = () => {
    fineBackgroundAnimation()
    floatAnimation('#fineCircle1', 1)
    floatAnimation('#fineCircle2', 1)
    floatAnimation('#fineCircle3', 1)
    floatAnimation('#fineCircle4', 1)
    floatAnimation('#fineCircle5', 1)
    floatAnimation('#fineCircle6', 1)
    floatAnimation('#fineCircle7', 1)
    floatAnimation('#fineCircle8', 1)
    floatAnimation('#fineCircle9', 1)
    floatAnimation('#fineCircle10', 1)
    floatAnimation('#fineCircle11', 1)
    floatAnimation('#fineCircle12', 1)
    return (
      // console.log('Fine')
      <section className='fineRoom'>
        <div className='fineCircles' id='fineCircle1'></div>
        <div className='fineCircles' id='fineCircle2'></div>
        <div className='fineCircles' id='fineCircle3'></div>
        <div className='fineCircles' id='fineCircle4'></div>
        <div className='fineCircles' id='fineCircle5'></div>
        <div className='fineCircles' id='fineCircle6'></div>
        <div className='fineCircles' id='fineCircle7'></div>
        <div className='fineCircles' id='fineCircle8'></div>
        <div className='fineCircles' id='fineCircle9'></div>
        <div className='fineCircles' id='fineCircle10'></div>
        <div className='fineCircles' id='fineCircle11'></div>
        <div className='fineCircles' id='fineCircle12'></div>
      </section>
    )
  }
  createAnxiousRoom = () => {
    console.log('frick')
    // anxiousFeeling()
    return (
      <section>
        <div className='anxiousHexagon' id='anxiousHexagon1'></div>
        <div className='anxiousCircle' id='anxiousCircle2'></div>
        <div className='anxiousCircle' id='anxiousCircle3'></div>
        <div className='anxiousCircle' id='anxiousCircle4'></div>
        <div className='anxiousCircle' id='anxiousCircle5'></div>
      </section>
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
