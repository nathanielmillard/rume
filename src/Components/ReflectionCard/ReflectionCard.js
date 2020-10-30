import React from 'react'
import './ReflectionCard.scss'

const ReflectionCard = (props) => {
  console.log(props)
  return (
    <section id={props.id} className="refCard">
      <h1>{new Date(props.date).toDateString()}</h1>
      <h2>{props.mood}</h2>
      <p>{props.reflection}</p>
    </section>
  )
}
export default ReflectionCard;
