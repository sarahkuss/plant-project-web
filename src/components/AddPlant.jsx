import { useState } from "react";
// import { Button, Form } from "react-bootstrap";

export default function AddPlant ({setPlants}) {
  const [plantName, setPlantName] = useState('')
  const [waterFrequency, setWater] = useState('')
  const [humidity, setHumidity] = useState('')
  const [light, setLight] = useState('')
  
  const handleAddPlant = (e) => {
    e.preventDefault()
    fetch('https://plant-project-api.web.app/plants',{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({plantName, waterFrequency, light, humidity})
    })
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        alert(data.message) 
        return
      }
      setPlants(data) 
    })
    .catch(console.error)
  }

  return(
    <>
      <form onSubmit={handleAddPlant}>
        <h2>Add Plant</h2>
        <label htmlFor="plantName">Plant Name
          <input
            type="text"
            value={plantName}
            onChange={(e) => {setPlantName(e.target.value)}} />
        </label>
        <br />
        <label htmlFor="waterFrequency">Watering Frequency
          <input
            type="text"
            value={waterFrequency}
            onChange={(e) => {setWater(e.target.value)}} />
        </label>
        <br/>
        <label htmlFor="light">Light
          <input
            type="text"
            value={light}
            onChange={(e) => {setLight(e.target.value)}} />
        </label>
        <br />
        <label htmlFor="humidity">Humidity
          <input
            type="text"
            value={humidity}
            onChange={(e) => {setHumidity(e.target.value)}} />
        </label>


        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}