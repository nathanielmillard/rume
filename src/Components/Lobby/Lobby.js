import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Lobby.scss';


class Lobby extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: '',
    }
  }
  render() {
    return (
      <section className='Lobby'>
        <h1 data-testid='welcomeMessage'>Welcome Back, it's TODAY!</h1>
        <h2 data-testid='checkInQuestion'>How are you feeling today?</h2>
        <section className='moodContainer' data-testid='moodButtonContainer'>
          <button className='moodButton'>Sad</button>
          <button className='moodButton'>Angry</button>
          <button className='moodButton'>Anxious</button>
          <button className='moodButton'>Fine</button>
        </section>
        <h2 data-testid='actionPrompt'>What do you want do do about it?</h2>
        <nav>
          <Link to='/reflecting' data-testid='linkToReflecting'>
            <button className='roomButton'>Reflect</button>
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
