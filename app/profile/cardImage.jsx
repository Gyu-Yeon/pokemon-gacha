import Image from "next/image";

export default function CardImage(props) {
  const onMouseHandler = (e) => {
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    let rotateY = -(1 / 8) * x + 20;
    let rotateX = (40 / 410) * y - 20;
    e.target.parentElement.style = `transform: perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const outMouseHandler = (e) => {
    e.target.parentElement.style =
      "transform: perspective(350px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      onMouseMove={(e) => {
        onMouseHandler(e);
      }}
      onMouseLeave={(e) => {
        outMouseHandler(e);
      }}
      className="container"
    >
      <Image src={props.imgSource} width={320} height={410} />
    </div>
  );
}
