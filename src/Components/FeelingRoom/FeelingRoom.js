import React from 'react';
import './FeelingRoom.scss';
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
  playSound(e) {
    let audio = e.target.parentNode.parentNode.firstChild
    audio.play()
  }
  pauseSound(e) {
    let audio = e.target.parentNode.parentNode.firstChild
    audio.pause()
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
            <MusicButton><img src={music}/></MusicButton>
            <MusicButton><img src={nature}/></MusicButton>
            <MusicButton><img src={abstract}/></MusicButton>
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
