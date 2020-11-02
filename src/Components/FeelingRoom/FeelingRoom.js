import React from 'react';
import './FeelingRoom.scss';
import {Component} from 'react'
import music from '../../Assets/music.svg'
import nature from '../../Assets/nature.svg'
import abstract from '../../Assets/abstract.svg'
import play from '../../Assets/play.svg'
import pause from '../../Assets/pause.svg'
import {MusicButton} from '../../StyledComponents.js'

import angryNature from '../../Assets/angryNature.wav' ;
import anxiousNature from '../../Assets/anxiousNature.wav';
 import fineNature from '../../Assets/fineNature.wav' ;
import sadNature from '../../Assets/sadNature.wav' ;

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
      <section className='directions'>
        <h1> Welcome to the feeling room </h1>
        <p>
          First pick a kind of sound you want to listen to.
          Then feel free to pause and play sound as you see fit.
          Enjoy the sights and sounds of your feeling space.
        </p>
        <button onClick={this.startFeeling} className='getStarted'> Get Started </button>
      </section>
    )
    return (
      <section className='FeelingRoom'>
        {!this.state.isFeeling && instructions}
        <audio> 
          <source src={fineNature} type="audio/wav"/> 
          Your Browser Doesn't Support This Audio 
        </audio>
        <section className="soundControlPanel">
          <div className='chooseSound'>
            <MusicButton><img src={music}/></MusicButton>
            <MusicButton><img src={nature}/></MusicButton>
            <MusicButton><img src={abstract}/></MusicButton>
          </div>
          <div className='controlsound'>
            <MusicButton><img src={play}/></MusicButton>
            <MusicButton><img src={pause}/></MusicButton>
          </div>
        </section>
        {this.chooseRoomMood()}
      </section>
    )
  }
}

export default FeelingRoom
