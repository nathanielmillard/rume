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
        <h1>LOBBY GOES HERE</h1>
      </section>
    )
  }
}
export default Lobby;
