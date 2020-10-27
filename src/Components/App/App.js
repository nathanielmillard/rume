import './App.scss';
import {Component} from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import Lobby from '../Lobby/Lobby.js';
import ReflectionForm from '../ReflectionForm/ReflectionForm.js';
import ReflectionList from '../ReflectionList/ReflectionList.js';
import FeelingRoom from '../FeelingRoom/FeelingRoom.js';
import BreathingRoom from '../BreathingRoom/BreathingRoom.js';
import fullLogo from '../../Assets/emptyLogo.svg';

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
          <Route path='/myreflections'>
            <ReflectionList />
          </Route>
          <Route path='/feeling'>
            <FeelingRoom />
          </Route>
          <Route path='/breathing'>
            <BreathingRoom />
          </Route>
          <Route path='/home'>
          <Lobby />
          </Route>
          <Route path='/'>
           <WelcomePage />
          </Route>
          </Switch>
          <footer>
            <NavLink activeClassName="activeHomeButton" to='/home'>
              <img
                className="homeButton"
                data-test="homeButton"
                title="Return To Lobby"
                src={fullLogo}
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
