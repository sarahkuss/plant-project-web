import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddPlant from './components/AddPlant';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  const [plants, setPlants] = useState("")

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home plants={plants} setPlants={setPlants}/>} />
        <Route path='/addplant' element={<AddPlant setPlants={setPlants}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
