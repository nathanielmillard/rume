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
