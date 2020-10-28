

export const postAReflection = (reflection, date, mood) => {
  fetch("http://localhost:3001/api/v1/reflections", {
    method: POST,
    headers: {
			'Content-Type': 'application/json',
		},
    body: JSONStrinify({
      "reflection": reflection,
      "date": date,
      "mood": mood
    })
  })
  .then(response => {
    if(response.ok){
      return response.json()
    } else {
      throw Error
    }
  })
  .catch(error => {
    console.log(error)
  })
}
