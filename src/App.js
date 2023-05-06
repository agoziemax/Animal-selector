// App.js

import React, { useState } from 'react';
import Animal from './Animal';
import './App.css'


function getRandomAnimal() {
  const animals = ['dog', 'cat', 'bird', 'gator', 'rat'];

  return animals[Math.floor(Math.random() * animals.length)];

}

function App() {

const [animals, setAnimal] = useState([])


  const handleClick= () => {
 setAnimal([...animals, getRandomAnimal()]);

  };

  const renderedAnimals = animals.map((animal, index)=>{
    return <Animal type={animal} key={index}/>;
  })



  console.log(renderedAnimals)

  return (
    <div className='App'>
      <button onClick={handleClick}>Choose animal</button>
      <div style={{display: 'flex'}}> {renderedAnimals}</div>
    </div>
  );
}

export default App;
