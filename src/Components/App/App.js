import './App.scss';
import {Component} from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Lobby from '../Lobby/Lobby.js';
import ReflectionForm from '../ReflectionForm/ReflectionForm.js';
import FeelingRoom from '../FeelingRoom/FeelingRoom.js';
import BreathingRoom from '../BreathingRoom/BreathingRoom.js';
import emptyLogo from '../../Assets/emptyLogo.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {

    }
  }
  render () {
    return (
      <BrowserRouter >
        <main className="App">
          <Switch >
          <Route path='/reflecting'>
            <ReflectionForm />
          </Route>
          <Route path='/feeling'>
            <FeelingRoom />
          </Route>
          <Route path='/breathing'>
            <BreathingRoom />
          </Route>
          <Route path='/'>
          <Lobby />
          </Route>
          </Switch>
          <footer>
            <NavLink to='/'>
              <img
                className="homeButton"
                data-test="homeButton"
                title="Return To Lobby"
                src={emptyLogo}
                alt="Navigate back to home page"
              />
            </NavLink>
            <p>Quote of the day</p>
          </footer>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
