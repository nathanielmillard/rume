import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Lobby.scss';
import PropTypes from 'prop-types'
import { MoodButton } from '../../StyledComponents.js'
import styled from "styled-components";
import gsap from 'gsap';

class Lobby extends Component {
  constructor(props) {
    super(props)
    this.state = {
    hasAMood: false,
    }
  }
  componentDidMount() {
    gsap.to(".moodContainer", {duration: 1.5, height: "18vh", ease: "back"})
  }
  clickHandler = (e) => {
    this.props.setMood(e)
    this.setState({hasAMood: true})
  }

  render() {
    return (
      <section className='Lobby'>
        <h1 data-testid='welcomeMessage'>Welcome Back, it's {new Date().toDateString()}</h1>
        <h2 data-testid='checkInQuestion'>How are you feeling today?</h2>
        <section data-testid='moodButtonContainer' className='moodContainer'>
          <MoodButton mood='fine' onClick={this.clickHandler}>Fine</MoodButton>
          <MoodButton mood='anxious' onClick={this.clickHandler}>Anxious</MoodButton>
          <MoodButton mood='sad' onClick={this.clickHandler}>Sad</MoodButton>
          <MoodButton mood='angry' onClick={this.clickHandler}>Angry</MoodButton>
        </section>
        <h2 data-testid='actionPrompt'>What do you want to do about it?</h2>
        <nav>
          <Link to={`/reflecting/${this.props.mood}`}>
            <button disabled={!this.state.hasAMood}
            data-testid='reflect'
            className='roomButton'>
            Reflect
            </button>
          </Link>
          <Link to={`/feeling/${this.props.mood}`}>
            <button disabled={!this.state.hasAMood}
            data-testid='feel'
            className='roomButton'>
            Feel
            </button>
          </Link>
          <Link to={`/breathing/${this.props.mood}`}>
            <button disabled={!this.state.hasAMood}
            data-testid='breathe'
            className='roomButton'>
            Breathe
            </button>
          </Link>
        </nav>
      </section>
    )
  }
}
export default Lobby;

Lobby.propTypes = {
  mood: PropTypes.string,
  setMood: PropTypes.func.isRequired
}
