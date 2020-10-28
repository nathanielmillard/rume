import { Component } from 'react';
import './ReflectionLibrary.scss';
import { getReflections } from '../../apiCalls.js';
import ReflectionCard from '../ReflectionCard/ReflectionCard.js'

class ReflectionLibrary extends Component {
  constructor() {
    super()
    this.state = {
      reflections: [],
      loadingMessage: 'Gathering Your Library',
      errorMessage: ''
    }
  }
  createCards = () => {
    const reflectionCards = this.state.reflections.map(reflection => {
      return (
        <ReflectionCard
          key={reflection.id}
          id={reflection.id}
          date={reflection.date}
          mood={reflection.mood}
          reflection={reflection.reflection}
        />
      )
    })
    return reflectionCards
  }
  async componentDidMount() {
    const reflections = await getReflections()
    this.setState( reflections )
    this.setState( {loadingMessage: ''})
  }
  render() {
    return (
      <section>
        { !this.state.reflections.length ? <h1>{this.state.loadingMessage}</h1> : <h1>{this.createCards()}</h1> }
      </section>
    )
  }
}

export default ReflectionLibrary
