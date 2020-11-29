import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { postAReflection } from '../../apiCalls.js'
import './ReflectionForm.scss';
import { NavButton, FormWrap, RefPrompt } from '../../StyledComponents.js'

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
          <h2 className='reflectionPrompt' data-testid='reflectionPrompt'>
          You're feeling
          <RefPrompt mood={this.props.mood}>{this.props.mood.toLowerCase()}</RefPrompt></h2>
          <FormWrap mood={this.props.mood}>
            <label className="formLabel">
              {this.props.mood === 'Fine' && 'What went well today?'}
              {this.props.mood === 'Angry' && `What has been frustrating about today?`}
              {this.props.mood === 'Anxious' && `What is keeping up space in your mind? Let your thoughts go.`}
              {this.props.mood === 'Sad' && 'Let your thoughts pour out onto the page.'}
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
          <NavButton onClick={this.submitReflection}>Save This Reflection</NavButton>
          <Link to='/myreflections'>
            <NavButton data-testid='linkToAllReflections'>Show All Reflections</NavButton>
          </Link>
        </section>
      </section>
    )
  }
}

export default ReflectionForm

ReflectionForm.propTypes = {
  mood: PropTypes.string,
}
