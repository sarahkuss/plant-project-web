import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Home ({plants, setPlants}) {
  useEffect(() => {
    fetch('https://plant-project-api.web.app/plants')
      .then(resp => resp.json())
      .then(setPlants)
      .catch(alert)
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col>
            {
              !plants
                ? "Loading..."
                : plants.map(
                  (plant) => (
                    <div key={plant.id}>
                      <h2>{plant.plantName}</h2>
                      <p>Water: {plant.waterFrequency}</p>
                      <p>Light: {plant.light}</p>
                      <p>Humidity: {plant.humidity}</p>
                    </div>
                  )
                )
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}