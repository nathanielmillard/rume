import React from 'react';
import {Component} from 'react'
import './BreathingRoom.scss';
import gsap from 'gsap'

class BreathingRoom extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  inhaleExhale() {
    var tl1 = gsap.timeline({repeat: 5, yoyo: true});
    tl1.to("#one", {
        duration: 5,
        scale: 2,
        backgroundColor:'hsl(128, 29%, 90%)',
    })
    .to("#one", {
        duration: 5,
        scale: 1,
        backgroundColor:'hsl(200, 14%, 96%)',
    })
    var tl2 = gsap.timeline({repeat: 5, yoyo: true});
    tl2.to("#two", {
        duration: 5,
        scale: 4,
        backgroundColor:'hsl(119, 38%, 72%)',
    })
    .to("#two", {
        duration: 5,
        scale: 1,
        backgroundColor:'hsl(200, 14%, 96%)',
    })
    var tl3 = gsap.timeline({repeat: 5, yoyo: true});
    tl3.to("#three", {
        duration: 5,
        scale: 6,
        backgroundColor:'hsl(120, 18%, 56%)',
    })
    .to("#three", {
        duration: 5,
        scale: 1,
        backgroundColor:'hsl(200, 14%, 96%)',
    })
    var tl4 = gsap.timeline({repeat: 5, yoyo: true});
    tl4.to("#four", {
        duration: 5,
        scale: 9,
        backgroundColor:'hsl(124, 11%, 24%)',
    })
    .to("#four", {
        duration: 5,
        scale: 1,
        backgroundColor:'hsl(200, 14%, 96%)',
    })
    var tl5 = gsap.timeline({repeat: 5, yoyo: true});
    tl5.to("#five", {
        duration: 5,
        scale: 12,
        backgroundColor:'hsl(0, 0%, 8%)',
    })
    .to("#five", {
        duration: 5,
        scale: 1,
        backgroundColor:'hsl(200, 14%, 96%)',
    })
  }

  componentDidMount(){
    this.inhaleExhale()
  }
  render(){
    return (
      <section>
        <div className="shape" id="one"></div>
        <div className="shape" id="two"></div>
        <div className="shape" id="three"></div>
        <div className="shape" id="four"></div>
        <div className="shape" id="five"></div>
      </section>
    )
  }
}

export default BreathingRoom
