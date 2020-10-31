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
    hasAMood: false
    }
  }

  clickHandler = (e) => {
    this.props.setMood(e)
    this.setState({hasAMood: true})
  }

  render() {

    return (
      <section className='Lobby'>
        <h1>Welcome Back, it's {new Date().toDateString()}</h1>
        <h2>How are you feeling today?</h2>
        <section className='moodContainer'>
          <MoodButton mood='fine' onClick={this.clickHandler}>Fine</MoodButton>
          <MoodButton mood='anxious' onClick={this.clickHandler}>Anxious</MoodButton>
          <MoodButton mood='sad' onClick={this.clickHandler}>Sad</MoodButton>
          <MoodButton mood='angry' onClick={this.clickHandler}>Angry</MoodButton>
        </section>
        <h2>What do you want do do about it?</h2>
        <nav>
          <Link to='/reflecting'>
            <button disabled={!this.state.hasAMood}
            className='roomButton'>
            Reflect
            </button>
          </Link>
          <Link to='/feeling'>
            <button disabled={!this.state.hasAMood}
            className='roomButton'>
            Feel
            </button>
          </Link>
          <Link to='/breathing'>
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
  setMood: PropTypes.func.isRequired
}
