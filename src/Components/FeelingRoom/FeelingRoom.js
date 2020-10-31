import React from 'react';
import './FeelingRoom.scss';

const FeelingRoom = (props) => {
  const createFineRoom = () => {
    //functions to animate go here
    return (
      //elements to animate go here
    )
  }
  const createAnxiousRoom = () => {
    //functions to animate go here
    return (
      //elements to animate go here
    )
  }
  const createSadRoom = () => {
    //functions to animate go here
    return (
      //elements to animate go here
    )
  }
  const createAngryRoom = () => {
    //functions to animate go here
    return (
      //elements to animate go here
    )
  }

  const chooseRoomMood = () => {
    if(props.mood === angry) {
      createAngryRoom()
    } else if(props.mood === sad) {
      createSadRoom()
    } else if(props.mood === anxious){
      createAnxiousRoom()
    } else {
      createFineRoom()
    }
  }

  return (
    chooseRoomMood()
  )
}

export default FeelingRoom
