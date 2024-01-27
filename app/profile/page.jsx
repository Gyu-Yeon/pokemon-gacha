"use client";

import { useEffect, useState } from "react";

import pokemon from 'pokemontcgsdk'



const Profile = () => {
  pokemon.configure({apiKey: 'c69e32f4-9b43-40b0-8676-559b115f8439'})



  const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`/api/cards`)
          const data = await response.json();

          setCards([...data])
        };
    
        fetchData();

        pokemon.card.all({pageSize:250, page:34})
        .then((cards) => {
        })
      }, []);
  return (
    <div>
    <h1>this is mock data</h1>
    {/* {allcards2.data.map((c,id)=> (
      <img key={id} src={c.images.small}/>
      // <div>{c.id}</div>
    ))} */}
    </div>
  )
}

export default Profile