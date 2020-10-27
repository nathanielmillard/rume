import './App.scss';
import {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Lobby from '../Lobby/Lobby.js'
import emptyLogo from '../../Assets/emptyLogo.svg'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {

    }
  }
  render () {
    return (
      <main className="App">
        <Lobby />
        <footer>
          <img
            className="homeButton"
            data-test="homeButton"
            title="Return To Lobby"
            src={emptyLogo}
            alt="Navigate back to home page"
          />
          <p>Quote of the day</p>
        </footer>
      </main>
    );
  }
}

export default App;
