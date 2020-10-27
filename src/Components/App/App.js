import './App.css';
import {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Lobby from '../Lobby/Lobby.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {

    }
  }
  render () {
    return (
      <div className="App">
        <h1>Test</h1>
        <Lobby />
      </div>
    );
  }
}

export default App;
