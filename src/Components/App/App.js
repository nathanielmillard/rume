import './App.scss';
import { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import Lobby from '../Lobby/Lobby.js';
import ReflectionForm from '../ReflectionForm/ReflectionForm.js';
import ReflectionLibrary from '../ReflectionLibrary/ReflectionLibrary.js';
import FeelingRoom from '../FeelingRoom/FeelingRoom.js';
import BreathingRoom from '../BreathingRoom/BreathingRoom.js';
import openLogo from '../../Assets/openLogo.svg';
import { getQuote } from '../../apiCalls.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      mood: ''
    }
  }
  async componentDidMount() {
    let quote = await getQuote()
    this.setState({quote: quote.content})
  }
  setMood = (e) => {
    let mood = e.target.innerText
    this.setState({mood: mood})
  }
  render() {
    return (
      <BrowserRouter >
        <main className="App">
          <Switch >
            <Route
              path='/reflecting/:feeling'
              render={({match})=>{
                const feeling = match.params.feeling
                return (
                  <ReflectionForm mood={feeling} />
                )
            }}/>
            <Route
              path='/feeling/:feeling'
              render={({match})=>{
                const feeling = match.params.feeling
                return (
                  <FeelingRoom  mood={feeling}/>
                )
            }}/>
            <Route path='/myreflections'>
              <ReflectionLibrary />
            </Route>
            <Route
              path='/breathing/:feeling'
              render={({match}) => {
                const feeling = match.params.feeling
                return (
                  <BreathingRoom mood={feeling} />
                )
            }}/>
            <Route path='/lobby'>
              <Lobby
                setMood={this.setMood}
                mood={this.state.mood}
              />
            </Route>
            <Route path='/'>
             <WelcomePage />
            </Route>
            </Switch>
          <footer>
            <NavLink activeClassName="activeHomeButton" to='/lobby'>
              <img
                className="homeButton"
                data-testid="homeButton"
                title="Return To Lobby"
                src={openLogo}
                alt="Navigate back to home page"
              />
            </NavLink>
            <p data-testid='randomQuote'>{this.state.quote}</p>
          </footer>
        </main>
      </BrowserRouter>
    )
  }
}

export default App;
