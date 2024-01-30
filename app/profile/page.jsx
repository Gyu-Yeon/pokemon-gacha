"use client";

import { useEffect, useState } from "react";
import pic from "../../public/mockdata/17_hires.png";
import CardImage from "./cardImage";

const Profile = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/cards`);
      const data = await response.json();

      setCards([...data]);
    };

    fetchData();
  }, []);

  const onMouseHandler = (e) => {
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

  return (
    <div>
      <div
        onMouseMove={(e) => {
          onMouseHandler(e);
        }}
        onMouseLeave={(e) => {
          mouseOutHandler(e);
        }}
        className="container"
      >
        <img className="card" src="/mockdata/17_hires.png" alt="" />
      </div>
      <CardImage imgSource={"/mockdata/17_hires.png"} />
    </div>
  );
};

export default Profile;
