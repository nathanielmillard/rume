import React from 'react';
import { Link } from 'react-router-dom';
import './ReflectionForm.scss';

const ReflectionForm = () => {

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

export default ReflectionForm
