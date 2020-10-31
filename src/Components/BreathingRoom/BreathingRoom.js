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
    // var tl1 = gsap.timeline({repeat: 5, yoyo: true});
    // tl.to(".1", {
    //     duration: 5,
    //     scale: 12,
    //     backgroundColor:'grey',
    // })
    // .to(".1", {
    //     duration: 5,
    //     scale: 1,
    //     backgroundColor:'grey',
    // })
    // var tl2 = gsap.timeline({repeat: 5, yoyo: true});
    // tl.to(".2", {
    //     duration: 5,
    //     scale: 22,
    //     backgroundColor:'light-grey',
    // })
    // .to(".2", {
    //     duration: 5,
    //     scale: 1,
    //     backgroundColor:'light-grey',
    // })
    // var tl3 = gsap.timeline({repeat: 5, yoyo: true});
    // tl.to(".3", {
    //     duration: 5,
    //     scale: 32,
    //     backgroundColor:'grey',
    // })
    // .to(".3", {
    //     duration: 5,
    //     scale: 1,
    //     backgroundColor:'grey',
    // })
  }

  componentDidMount(){
    this.inhaleExhale()
  }
  render(){
    return (
      <section>
        <div className="shape 1"></div>
        <div className="shape 2"></div>
        <div className="shape 3"></div>
      </section>
    )
  }
}

export default BreathingRoom
