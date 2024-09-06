// import { useState } from "react";
import shoe from "./phone.png";
import ShoeCard from "./Shoes";
const Home = () => {
  //  const [color, setcolor] = useState("red");

  const shoeCollection = [
    {
      id: 1,
      name: "Nike",
      image: shoe,
      type: "Air force",
      price: "29",
    },
    {
      id: 1,
      name: "Nike",
      image: shoe,
      type: "Air force",
      price: "29",
    },
    {
      id: 1,
      name: "Nike",
      image: shoe,
      type: "Air force",
      price: "29",
    },
  ];
  return (
    <div>
      <div className="step">
        <h1>
          Step up your game <br>with our premium</br>collection
        </h1>
      </div>

      <div>
        {shoeCollection.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            name={shoe.name}
            image={shoe.image}
            price={shoe.price}
            type={shoe.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
