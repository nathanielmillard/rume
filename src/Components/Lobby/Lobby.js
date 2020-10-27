import { Component } from 'react';
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
      <section>
        <h1>Welcome Back, it's TODAY!</h1>
        <h2>How are you feeling today?</h2>
        <section>
          <button className='moodButton'>Sad</button>
          <button className='moodButton'>Angry</button>
          <button className='moodButton'>Anxious</button>
          <button className='moodButton'>Fine</button>
        </section>
        <h2>What do you want do do about it?</h2>
        <nav>
          <button className='roomButton'>Reflect</button>
          <button className='roomButton'>Feel</button>
          <button className='roomButton'>Breathe</button>
        </nav>
      </section>
    )
  }
}
export default Lobby;
