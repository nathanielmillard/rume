import React from 'react';
import { Link } from 'react-router-dom';
import './ReflectionForm.scss';

const ReflectionForm = () => {

  return (
    <section>
      <h1>Reflection Form</h1>
      <Link to='/myreflections' data-testid='linkToAllReflections'>
        <button>When Will My Reflection Show Who I Am Inside?</button>
      </Link>
    </section>
  )
}

export default ReflectionForm
