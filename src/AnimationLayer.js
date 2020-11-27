import React, {useState, useEffect} from 'react';
import Sprite from './Sprite';
import {sprites} from './SpriteImport'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default ({num,unlimited,rendered,setRendered}) => {
  const [list, setList] = useState([]);

  useEffect(()=>{

    
    let count = unlimited ? num : Math.min(num, 30);
    if(!rendered){
    const temp =[];
    for(let i =0; i<count;i++){
      let src = sprites[Math.floor(Math.random()*sprites.length)]
      
      temp.push(
        <Sprite 
          key={i}
          top= {getRandomArbitrary(10,91)}
          left= {getRandomArbitrary(-20-(count/3),0)}
          src = {src}
          />
      )

    }
  
    setList(temp);
    setRendered(true);
    }
  }, [num,unlimited,rendered,setRendered])
  
  
  return (
  <div style={{width:'100vw', height: '100%', padding:0 , margin:0}}>
 
    {list.map(sprite => {return sprite})}
    
  </div>
  )
}
