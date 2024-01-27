"use client";

import { useEffect, useState } from "react";

const Profile = () => {
  const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`/api/cards`)
          const data = await response.json();

          setCards([...data])
        };
    
        fetchData();
      }, []);
      console.log(cards)
  return (
    <div>
    <h1>this is mock data</h1>
    {cards.map((c,id)=> (
      <img key={id} src={c.imgSource}/>
    ))}
    </div>
  )
}

export default Profile