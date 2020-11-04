export const getQuote = () => {
 return fetch("https://api.quotable.io/random")
  .then(response => {
    if (response.ok){
      return response.json()
    } else {
      throw Error
    }
  })
  .catch(error => {
    return "Your limitation is only your imagination."
  })
}

export const postAReflection = (reflection, date, mood) => {
  fetch("https://rume-microservice.herokuapp.com/api/v1/reflections", {
    method: 'POST',
    headers: {
			'Content-Type': 'application/json',
		},
    body: JSON.stringify({
      "reflection": reflection,
      "date": date,
      "mood": mood
    })
  })
  .then(response => {
    if(response.ok){
      console.log(response)
      return response
    } else {
      throw Error
    }
  })
  .catch(error => {
    console.log(error)
  })
}
export const getReflections = () => {
  return fetch("https://rume-microservice.herokuapp.com/api/v1/reflections")
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw Error
    }
  })
  .then(response => {
    console.log(response.reflections)
    return response.reflections
  })
  .catch(error => {
    console.log(error);
    return { errorMessage:'We encountered an error, please reload' }
  })
}
