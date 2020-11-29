import React from 'react';
import './anxiousAnimations.scss';
import './FeelingRoom.scss';

import { Component } from 'react'
import { MusicButton, NavButton } from '../../StyledComponents.js'

import { createSadRoom, sadBGAnimation, sadDropAnimation } from './sadAnimations.js'
import { createFineRoom, floatAnimation, fineBackgroundAnimation } from './fineAnimations.js'
import { createAnxiousRoom, anxiousAnimation } from './anxiousAnimations.js';
import { createAngryRoom, angryBGAnimation, angryBoxAnimation } from './angryAnimations.js'

import music from '../../Assets/music.svg'
import nature from '../../Assets/nature.svg'
import abstract from '../../Assets/abstract.svg'
import play from '../../Assets/play.svg'
import pause from '../../Assets/pause.svg'

// import angryNature from '../../Assets/angryNature.wav' ;

import angryNature from '../../Assets/angryNature.mp3' ;

import fineNature from '../../Assets/fineNature.wav' ;
import anxiousNature from '../../Assets/anxiousNature.wav';
import sadNature from '../../Assets/sadNature.wav' ;
import angryAbstract from '../../Assets/angryAbstract.mp3' ;
import anxiousAbstract from '../../Assets/anxiousAbstract.wav' ;
import sadAbstract from '../../Assets/sadAbstract.wav' ;
import fineAbstract from '../../Assets/fineAbstract.wav' ;
import angryMusic from '../../Assets/angryMusic.mp3'
import anxiousMusic from '../../Assets/anxiousMusic.mp3'
import sadMusic from '../../Assets/sadMusic.mp3'
import fineMusic from '../../Assets/fineMusic.mp3'

class FeelingRoom extends Component {
  constructor(props) {
    super(props)
    this.state= {
      isFeeling: false,
      hasAudio: false,
      audio: '',
      isPlaying: false
    }
  }
  moveFineRoom = () => {
    fineBackgroundAnimation()
    for(let i = 0; i < 13; i++){
      let target = `#fineCircle${i}`
      floatAnimation(target)
    }
  }
  moveAnxiousRoom = () => {
    anxiousAnimation('#hex1', .74, 1, 1.8, .90)
    anxiousAnimation('#hex2', .5, 1, .7, .45)
    anxiousAnimation('#hex3', .6, .7, 3.4, 2)
    anxiousAnimation('#hex4', .78, .2, .2, .75)
    anxiousAnimation('#hex5', .67, .1, .1, 0)
    anxiousAnimation('#hex6', .74, 1, 1.8, .90)
    anxiousAnimation('#hex7', .86, 1, 1.8, .55)
    anxiousAnimation('#hex8', .8, .5, 2, 1.5)
    anxiousAnimation('#hex9', .5, 1, .7, .45)
    anxiousAnimation('#hex10', .7, 1, 2.5, 2.5)
    anxiousAnimation('#hex11', .49, .5, .3, 2.5)
  }
  moveSadRoom = () => {
    sadBGAnimation()
    sadDropAnimation()
  }
  moveAngryRoom = () => {
    angryBGAnimation()
    angryBoxAnimation()
  }
  chooseRoomMood = () => {
    if(this.props.mood === 'Angry') {
      return createAngryRoom()
    } else if(this.props.mood === 'Sad') {
      return createSadRoom()
    } else if(this.props.mood === 'Anxious'){
      return createAnxiousRoom()
    } else {
      return createFineRoom()
    }
  }

  startAnimations = () => {
    if(this.props.mood === 'Angry') {
      return this.moveAngryRoom()
    } else if(this.props.mood === 'Sad') {
      return this.moveSadRoom()
    } else if(this.props.mood === 'Anxious'){
      return this.moveAnxiousRoom()
    } else {
      return this.moveFineRoom()
    }
  }

  startFeeling = () => {
    this.setState({isFeeling: true})
    this.startAnimations()
  }

  playSound = (e) => {
    if(!this.state.hasAudio){
      alert('Select a kind of audio')
    } else if (e.target.id === 'svg'){
      let audio = e.target.parentNode.parentNode.firstChild
      audio.play()
      this.setState({isPlaying: true})
    } else if (e.target.id === 'playButton'){
      let audio = e.target.parentNode.firstChild
      audio.play()
      this.setState({isPlaying: true})
    }
  }

  pauseSound = (e) => {
    if(!this.state.hasAudio){
        alert('No audio to pause')
    } else if (e.target.id === 'svg'){
      let audio = e.target.parentNode.parentNode.firstChild
      audio.pause()
      this.setState({hasAudio: false, audio:'', isPlaying: false})
    } else if (e.target.id === 'pauseButton'){
      let audio = e.target.parentNode.firstChild
      audio.pause()
      this.setState({hasAudio: false, audio:'', isPlaying: false})
    }
  }
  changeAudio = (e) => {
    let specificAudio
    if (this.props.mood === 'Sad'){
      if (e.target.id === 'nature'){
        specificAudio = sadNature
      } else if (e.target.id === 'music'){
        specificAudio = sadMusic
      } else {
        specificAudio = sadAbstract
      }
    }
    if (this.props.mood === 'Anxious'){
      if (e.target.id === 'nature'){
        specificAudio = anxiousNature
      } else if (e.target.id === 'music'){
        specificAudio = anxiousMusic
      } else {
        specificAudio = anxiousAbstract
      }
    }
    if (this.props.mood === 'Angry'){
      if (e.target.id === 'nature'){
        specificAudio = angryNature
      } else if (e.target.id === 'music'){
        specificAudio = angryMusic
      } else {
        specificAudio = angryAbstract
      }
    }
    if (this.props.mood === 'Fine') {
      if (e.target.id.includes('nature')){
        specificAudio = fineNature
      } else if (e.target.id.includes('music')){
        specificAudio = fineMusic
      } else {
        specificAudio = fineAbstract
      }
    }
    if (this.state.isPlaying) {
      let audio = document.querySelector('.audio').parentNode
      audio.load()
      audio.play()
    }
    this.setState({hasAudio: true, audio:specificAudio})
  }
  render(){
    let instructions = (
      <section className='directions'>
        <h1> Welcome to the feeling room </h1>
        <p>
          This is a safe space to ruminate in your feelings.
          <br/>
          Click the start button to begin.
          <br/>
          Once the animation begins, select your audio of choice and click the play button.
          <br/>
          Then feel free to pause, play, and change audio as you see fit.
        </p>
        <NavButton data-testid="startButton" onClick={this.startFeeling}> Get Started </NavButton>
      </section>
    )
    let audio;
    if(this.state.audio.includes('.wav')){
      audio = (
        <audio> 
        <source src={this.state.audio} type="audio/wav" className="audio"/> 
        Your Browser Doesn't Support This Audio 
        </audio>
      )
    }
    if(this.state.audio.includes('.mp3')){
      audio = (
        <audio> 
        <source src={this.state.audio} type="audio/mp3" className="audio"/> 
        Your Browser Doesn't Support This Audio 
        </audio>
      )
    }
    return (
      <section className='FeelingRoom'>
        {!this.state.isFeeling && instructions}
        <section className="soundControlPanel">
            {this.state.hasAudio && audio}
            <MusicButton onClick={this.changeAudio} id='music'><img title="music" alt="music-based audio" id='music' src={music}/></MusicButton>
            <MusicButton onClick={this.changeAudio} id='nature'><img title="nature" alt="nature-based audio" id='nature' src={nature}/></MusicButton>
            <MusicButton onClick={this.changeAudio} id='abstract'><img title="abstract" alt="abstract-based audio" id='abstract' src={abstract}/></MusicButton>
            <MusicButton onClick={this.playSound} id='playButton'><img title="play audio" alt="play audio button" id='svg' src={play}/></MusicButton>
            <MusicButton onClick={this.pauseSound} id='pauseButton'><img title="stop audio" alt="stop audio button" id='svg' src={pause}/></MusicButton>
        </section>
        {this.chooseRoomMood()}
      </section>
    )
  }
}


export default FeelingRoom
