import React from 'react'
import './ReflectionCard.scss'
import { RefCard } from '../../StyledComponents.js'

const ReflectionCard = (props) => {
  return (
    <RefCard mood={props.mood} id={props.id}>
      <h1>{new Date(props.date).toDateString()}</h1>
      <h2>{props.mood}</h2>
      <p>{props.reflection}</p>
    </RefCard>
  )
}
export default ReflectionCard;
