import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './ReflectionForm.scss';

class ReflectionForm extends Component {
 constructor(props){
   super(props)
   this.state={
     reflection: '',
   }
 }
 keepReflection = (e) => {
   this.setState({reflection: e.target.value})
 }
  render() {
    return (
      <section className='RelfectionForm'>
      <form data-testid='reflectionForm'>
      <h2  className='relfectionPrompt' data-testid='reflectionPrompt'> You're feeling fine, what went well today? </h2>
      <label>
      Write your reflection here:
      <textarea
      data-testid='reflectionArea'
      rows='150'
      cols='45'
      onChange={this.keepReflection}
      >
      </textarea>
      <button>Save This Relfection</button>
      </label>
      </form>
      <Link to='/myreflections'>
      <button>Show All Reflections</button>
      </Link>
      </section>
    )
  }
}

export default ReflectionForm

ReflectionForm.propTypes = {
  mood: PropTypes.string.isRequired,
}
