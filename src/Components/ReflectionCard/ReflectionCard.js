import React from 'react'
import { RefCard } from '../../StyledComponents.js'

const ReflectionCard = (props) => {
  return (
    <RefCard mood={props.mood} id={props.id}>
      <h1 data-testid='cardDate'>{new Date(props.date).toDateString()}</h1>
      <h2 data-testid='reflectionMood'>{props.mood}</h2>
      <p data-testid='reflectionEntry'>{props.reflection}</p>
    </RefCard>
  )
}
export default ReflectionCard;
