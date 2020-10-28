

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
