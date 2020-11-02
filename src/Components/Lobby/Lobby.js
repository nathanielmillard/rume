import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Lobby.scss';
import PropTypes from 'prop-types'
import { MoodButton } from '../../StyledComponents.js'
import styled from "styled-components";

class Lobby extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <section className='Lobby'>
        <h1 data-testid='welcomeMessage'>Welcome Back, it's {new Date().toDateString()}</h1>
        <h2 data-testid='checkInQuestion'>How are you feeling today?</h2>
        <section data-testid='moodButtonContainer' className='moodContainer'>
          <MoodButton mood='fine' onClick={this.props.setMood}>Fine</MoodButton>
          <MoodButton mood='anxious' onClick={this.props.setMood}>Anxious</MoodButton>
          <MoodButton mood='sad' onClick={this.props.setMood}>Sad</MoodButton>
          <MoodButton mood='angry' onClick={this.props.setMood}>Angry</MoodButton>
        </section>
        <h2 data-testid='actionPrompt'>What do you want do do about it?</h2>
        <nav>
          <Link to='/reflecting'>
            <button className='roomButton' data-testid='linkToReflecting'>Reflect</button>
          </Link>
          <Link to='/feeling' data-testid='linkToFeeling'>
            <button className='roomButton'>Feel</button>
          </Link>
          <Link to='/breathing' data-testid='linkToBreathing'>
            <button className='roomButton'>Breathe</button>
          </Link>
        </nav>
      </section>
    )
  }
}
export default Lobby;

Lobby.propTypes = {
  setMood: PropTypes.func.isRequired
}
