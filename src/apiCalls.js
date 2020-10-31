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
    return "Advice didn't load, maybe maybe go drink some water?"
  })
}

export const postAReflection = (reflection, date, mood) => {
  fetch("http://localhost:3001/api/v1/reflections", {
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
  return fetch("http://localhost:3001/api/v1/reflections")
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw Error
    }
  })
  .then(response => {
    return {reflections: response.reflections}
  })
  .catch(error => {
    console.log(error);
    return { errorMessage:'We encountered an error, please reload' }
  })
}
