import React from 'react';
import './anxiousAnimations.scss';
import './FeelingRoom.scss';
import {Component} from 'react'
import {DropIcon} from './FeelingRoom-SC'
import './SadAnimation.scss'
import {sadBGAnimation, sadDropAnimation} from './sadAnimations.js'
import {floatAnimation, fineBackgroundAnimation} from './fineAnimations.js'
import { anxiousAnimation } from './anxiousAnimations.js';
import './angryAnimations.scss';
import {angryFeelingAnimation} from './angryAnimations.js'
import './fineAnimations.scss';
import {DropIcon} from './FeelingRoom-SC'
import music from '../../Assets/music.svg'
import nature from '../../Assets/nature.svg'
import abstract from '../../Assets/abstract.svg'
import play from '../../Assets/play.svg'
import pause from '../../Assets/pause.svg'

import {MusicButton} from '../../StyledComponents.js'

import angryNature from '../../Assets/angryNature.wav' ;
import fineNature from '../../Assets/fineNature.wav' ;
import anxiousNature from '../../Assets/anxiousNature.wav';
import sadNature from '../../Assets/sadNature.wav' ;
import angryAbstract from '../../Assets/angryAbstract.wav' ;
import anxiousAbstract from '../../Assets/anxiousAbstract.wav' ;
import sadAbstract from '../../Assets/sadAbstract.wav' ;
import fineAbstract from '../../Assets/fineAbstract.wav' ;

class FeelingRoom extends Component {
  constructor(props){
    super(props)
    this.state= {
      isFeeling: false,
      hasAudio: false,
      audio: '',
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

    return (
      <section className='anxiousRoom'>
        <div class='hexagon' id='hex1'></div>
        <div class='hexagon' id='hex2'></div>
        <div class='hexagon' id='hex3'></div>
        <div class='hexagon' id='hex4'></div>
        <div class='hexagon' id='hex5'></div>
        <div class='hexagon' id='hex6'></div>
        <div class='hexagon' id='hex7'></div>
        <div class='hexagon' id='hex8'></div>
        <div class='hexagon' id='hex9'></div>
        <div class='hexagon' id='hex10'></div>
        <div class='hexagon' id='hex11'></div>
      </section>
    )
  }
  createSadRoom = () => {
    //functions to animate go here
    sadBGAnimation()
    sadDropAnimation()
    let drops = []
    for(let i=0; i<400; i++){
      drops.push(i)
    }
    drops = drops.map(drop => {
      if(!(drop % 2)){
        return <DropIcon className='drop' />
      } else {
        return <DropIcon className='drop2' />
      }
    }
    )

    return (
      <section className='sadRoom'>
        {drops}
      </section>
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

  playSound = (e) => {
    if(this.state.hasAudio){
      let audio = e.target.parentNode.parentNode.firstChild
      audio.play()
    } else {
      alert('Select a kind of audio')
    }
  }
  pauseSound = (e) => {
    if(this.state.hasAudio){
    let audio = e.target.parentNode.parentNode.firstChild
    audio.pause()
  } else {
    alert('No audio to pause')
  }
  }

  changeAudio = (e) => {
    let specificAudio
    if (this.props.mood === 'Sad'){
      if (e.target.id === 'nature'){
        specificAudio = sadNature
      } else if (e.target.id === 'music'){
        specificAudio = sadNature
      } else {
        specificAudio = sadAbstract
      }
    }
    if (this.props.mood === 'Anxious'){
      if (e.target.id === 'nature'){
        specificAudio = anxiousNature
      } else if (e.target.id === 'music'){
        specificAudio = sadNature
      } else {
        specificAudio = anxiousAbstract
      }
    }
    if (this.props.mood === 'Angry'){
      if (e.target.id === 'nature'){
        specificAudio = angryNature
      } else if (e.target.id === 'music'){
        specificAudio = sadNature
      } else {
        specificAudio = angryAbstract
      }
    }
    if (this.props.mood === 'Fine') {
      if (e.target.id === 'nature'){
        specificAudio = fineNature
      } else if (e.target.id === 'music'){
        specificAudio = sadNature
      } else {
        specificAudio = fineAbstract
      }
    }
    console.log(specificAudio)
    this.setState({hasAudio: true, audio:specificAudio})
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
    let audio = (
      <audio> 
        <source src={this.state.audio} type="audio/wav" className="audio"/> 
        Your Browser Doesn't Support This Audio 
      </audio>
    )
    return (
      <section className='FeelingRoom'>
        {!this.state.isFeeling && instructions}
        <section className="soundControlPanel">
          <div className='chooseSound'>
            <MusicButton onClick={this.changeAudio} id='music'><img id='music' src={music}/></MusicButton>
            <MusicButton onClick={this.changeAudio} id='nature'><img id='nature' src={nature}/></MusicButton>
            <MusicButton onClick={this.changeAudio} id='abstract'><img id='abstract' src={abstract}/></MusicButton>
          </div>
          <div className='controlsound'>
            {this.state.hasAudio && audio}
            <MusicButton onClick={this.playSound}><img src={play}/></MusicButton>
            <MusicButton onClick={this.pauseSound}><img src={pause}/></MusicButton>
          </div>
        </section>
        {this.chooseRoomMood()}
      </section>
    )
  }
}


export default FeelingRoom
