import React from 'react';
import { useState } from 'react';
import './animal.css'
import bird from './assets/bird.svg'
import cat from './assets/cat.svg';
import cow from './assets/cow.svg';
import dog from './assets/dog.svg';
import gator from './assets/gator.svg';
import horse from './assets/horse.svg';
import heart from './assets/heart.svg';

function Animals({ type }) {
  const [clicks, setClicks] = useState(0)

  const handle = () => {
  setClicks(clicks + 1)
  }

  const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
  }
  return (
    <div onClick={handle}>
      <img src={svgMap[type]} alt="animal" style={{height: 100, width: 100}}/>
      <img src={heart} alt="heart" style={{width: 10 + 10 * clicks + 'px'}} />
    </div>
  );
}

export default Animals;
