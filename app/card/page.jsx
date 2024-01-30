'use client'
import { useEffect, useState } from "react";

const Card = () => {
    const mouseHandler = (e) => {
        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;
        // console.log(x, y);
        let rotateY = -(1 / 8) * x + 20;
        let rotateX = (40 / 410) * y - 20;
        e.target.parentElement.style = `transform: perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
    
      const mouseOutHandler = (e) => {
        e.target.parentElement.style =
          "transform: perspective(350px) rotateX(0deg) rotateY(0deg)";
      };
  const [randomCard, setrandomCard] = useState([])
  const getRandomCard = async () => {
    try {
        const response = await fetch('/api/randomcard');
        const data = await response.json();
        console.log(...data)
        setrandomCard(
            [...data]
        )
        console.log(randomCard)
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div>
        <button onClick={getRandomCard}>Get A Random Card</button>
    {randomCard.map(c => (
        <div>
            <div>
                {c.name}
            </div>
            <div onMouseMove={(e) => {
          mouseHandler(e);
        }}
        onMouseLeave={(e) => {
          mouseOutHandler(e);
        }}className="container">
            <img src={c.imgSource} alt="asdf" className="card"/>
            </div>
            <p>{c.rarity}</p>
            <p>{c.id}</p>
            <p>types: {c.types.map(t => <span>{t}</span>)}</p>
        </div>
    ))}
    </div>
  )
}

export default Card