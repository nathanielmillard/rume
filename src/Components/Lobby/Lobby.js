import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Lobby.scss';
import PropTypes from 'prop-types'
import styled from "styled-components";

const MoodButton = styled.button`
  border-radius: 100px;
  margin:1vh;
  width: 15vh;
  height: 15vh;
  font-size: 1.5rem;
  color: #121316;
  border: .5px solid #121316;
  background-color: ${props => {
    if (props.mood === 'fine') {
      return `rgb(157, 211, 156, .25);`
    } else if (props.mood === 'anxious') {
      return `rgb(180, 154, 49, .25);`
    } else if (props.mood === 'sad') {
      return `rgb(132, 173, 189, .25);`
    } else {
      return `rgb(100, 27, 65, .25);`
    }
  } }
`

class Lobby extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <section className='Lobby'>
        <h1>Welcome Back, it's {new Date().toDateString()}</h1>
        <h2>How are you feeling today?</h2>
        <section className='moodContainer'>
          <MoodButton mood='fine' onClick={this.props.setMood}>Fine</MoodButton>
          <MoodButton mood='anxious' onClick={this.props.setMood}>Anxious</MoodButton>
          <MoodButton mood='sad' onClick={this.props.setMood}>Sad</MoodButton>
          <MoodButton mood='angry' onClick={this.props.setMood}>Angry</MoodButton>
        </section>
        <h2>What do you want do do about it?</h2>
        <nav>
          <Link to='/reflecting'>
            <button className='roomButton'>Reflect</button>
          </Link>
          <Link to='/feeling'>
            <button className='roomButton'>Feel</button>
          </Link>
          <Link to='/breathing'>
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
