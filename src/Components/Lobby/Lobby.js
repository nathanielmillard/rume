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
    hasAMood: false,
    }
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
          <MoodButton mood='fine' onClick={this.props.setMood}>Fine</MoodButton>
          <MoodButton mood='anxious' onClick={this.props.setMood}>Anxious</MoodButton>
          <MoodButton mood='sad' onClick={this.props.setMood}>Sad</MoodButton>
          <MoodButton mood='angry' onClick={this.props.setMood}>Angry</MoodButton>
        </section>
        <h2 data-testid='actionPrompt'>What do you want do do about it?</h2>
        <nav>
          <Link to={`/reflecting/${this.props.mood}`}>
            <button disabled={!this.state.hasAMood}
            className='roomButton'>
            Reflect
            </button>
          </Link>
          <Link to={`/feeling/${this.props.mood}`}>
            <button disabled={!this.state.hasAMood}
            className='roomButton'>
            Feel
            </button>
          </Link>
          <Link to={`/breathing/${this.props.mood}`}>
            <button disabled={!this.state.hasAMood}
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
