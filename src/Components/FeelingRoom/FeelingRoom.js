import React from 'react';
import './FeelingRoom.scss';
import {Component} from 'react'
import {DropIcon} from './FeelingRoom-SC'
import './SadAnimation.scss'
import {sadBGAnimation, sadDropAnimation} from './sadAnimations.js'
import {floatAnimation, fineBackgroundAnimation} from './fineAnimations.js'
import './angryAnimations.scss';
import {angryFeelingAnimation} from './angryAnimations.js'
import './fineAnimations.scss';

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


class FeelingRoom extends Component {
  constructor(props){
    super(props)
    this.state= {
      isFeeling: false
    }
  }
  createFineRoom = () => {
    console.log('Made it here')
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
    //functions to animate go here
    return (
      console.log('ANXIOUS')
      //elements to animate go here
    )
  }
  createSadRoom = () => {
    //functions to animate go here
    console.log('sad')
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
  playSound(e) {
    let audio = e.target.parentNode.parentNode.firstChild
    audio.play()
  }
  pauseSound(e) {
    let audio = e.target.parentNode.parentNode.firstChild
    audio.pause()
  }
  changeAudio(e){
    let audio = e.target.parentNode.parentNode.nextSibling.firstChild
    if (this.props.mood === 'Sad'){
      if(e.target.id === 'nature'){
        audio.src = {sadNature}
      } else if (e.target.id === 'abstract'){
        audio.src = {abstract}
      } else if (e.target.id === 'music'){
        audio.src = {music}
      }
    } else if (this.props.mood === 'Anxious'){
      if(e.target.id === 'nature'){
        audio.src = {anxiousNature}
      } else if (e.target.id === 'abstract'){
        audio.src = {abstract}
      } else if (e.target.id === 'music'){
        audio.src = {music}
      }
    } else if (this.props.mood === 'Angry'){
      if(e.target.id === 'nature'){
        audio.src = {angryNature}
      } else if (e.target.id === 'abstract'){
        audio.src = {abstract}
      } else if (e.target.id === 'music'){
        audio.src = {music}
      }
    } else {
      if(e.target.id === 'nature'){
        audio.src = {fineNature}
      } else if (e.target.id === 'abstract'){
        audio.src = {abstract}
      } else if (e.target.id === 'music'){
        audio.src = {music}
      }
    }

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
        <section className="soundControlPanel">
          <div className='chooseSound'>
            <MusicButton onClick={this.changeAudio} id='music'><img src={music}/></MusicButton>
            <MusicButton onClick={this.changeAudio} id='nature'><img src={nature}/></MusicButton>
            <MusicButton onClick={this.changeAudio} id='abstract'><img src={abstract}/></MusicButton>
          </div>
          <div className='controlsound'>
            <audio> 
            <source src={fineNature} type="audio/wav" className="audio"/> 
            Your Browser Doesn't Support This Audio 
            </audio>
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
