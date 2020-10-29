import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { postAReflection } from '../../apiCalls.js'
import './ReflectionForm.scss';
import { FormWrap } from '../../StyledComponents.js'

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

 submitReflection = (e) => {
   e.preventDefault()
   postAReflection(this.state.reflection, new Date(), this.props.mood)
   document.getElementById("textArea").value = ''
 }
  render() {

    return (
      <section className='ReflectionForm'>
        <form data-testid='reflectionForm'>
          <h2  className='reflectionPrompt' data-testid='reflectionPrompt'> You're feeling fine, what went well today? </h2>
          <FormWrap mood={this.props.mood}>
            <label className="formLabel">
              Write your reflection here:
              <textarea
              id='textArea'
              data-testid='reflectionArea'
              rows='150'
              cols='45'
              onChange={this.keepReflection}
              >
              </textarea>
            </label>
          </FormWrap>
        </form>
        <section className="buttons">
          <button className="actionButton" onClick={this.submitReflection}>Save This Reflection</button>
          <Link to='/myreflections'>
            <button className="actionButton">Show All Reflections</button>
          </Link>
        </section>
      </section>
    )
  }
}

export default ReflectionForm

ReflectionForm.propTypes = {
  mood: PropTypes.string.isRequired,
}
