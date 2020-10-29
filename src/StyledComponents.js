import angryJournal from './Assets/AngryJournal.jpg'
import fineJournal from './Assets/FineJournal.jpg'
import anxiousJournal from './Assets/AnxiousJournal.jpg'
import sadJournal from './Assets/SadJournal.jpg'
import styled from "styled-components";

export const MoodButton = styled.button`
  border-radius: 100px;
  margin:1vh;
  width: 15vh;
  height: 15vh;
  font-size: 1.5rem;
  color: #121316;
  border: .5px solid #121316;
  background-color: ${props => {
    if (props.mood === 'fine') {
      return `rgb(157, 211, 156, .25);`
    } else if (props.mood === 'anxious') {
      return `rgb(180, 154, 49, .25);`
    } else if (props.mood === 'sad') {
      return `rgb(132, 173, 189, .25);`
    } else {
      return `rgb(100, 27, 65, .25);`
    }
  } };
  &:focus {
    background-color: ${props => {
      if (props.mood === 'fine') {
        return `rgb(157, 211, 156);`
      } else if (props.mood === 'anxious') {
        return `rgb(180, 154, 49);`
      } else if (props.mood === 'sad') {
        return `rgb(132, 173, 189);`
      } else {
        return `rgb(100, 27, 65);
                color: #f3f5f6;`
      }
    } }
  }
`;

export const FormWrap = styled.section`
  height: 70vh;
  width: 100vw;
  background-size: cover;
  background-position: center fixed;
  padding-top: 5%;
  overflow: scroll;
  background-image: ${props => {
    if(props.mood === 'Sad') {
      return `url(${sadJournal})`
    } else if(props.mood === 'Angry') {
      return `url(${angryJournal})`
    } else if(props.mood === 'Anxious') {
      return `url(${anxiousJournal})`
    } else {
      return `url(${fineJournal})`
    }
  } };
  .formLabel {
    font-size: 1.25em;
    color: ${props => {
      if(props.mood === 'Angry') {
        return `#f3f5f6`
      } else {
        return `#121316`
      }
    }};
  }
`;
