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
      return response
    } else {
      throw Error
    }
  })
  .catch(error => {
    alert('Something went wrong posting your reflection')
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
    if (response.reflections.length) {
      return response.reflections
    } else {
      return {
        errorMessage: 'Your library is empty. :('
      }
    }
  })
  .catch(error => {
    return { errorMessage:'We encountered an error, please reload' }
  })
}
