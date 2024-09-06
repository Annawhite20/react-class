import React from "react";

const ShoesCard = ({name, image, price, type}) => {
    return ( 
        <>
        <div>

        </div>
        <div className="card">
            <img src={image} alt="name" />
            <div className= 'text'><h1>{name}</h1> <h6>{type}</h6><h3>${price}</h3></div>
           <button className='btn'>Add to cart</button>  
        </div>
        </>
     );
}
 
export default ShoesCard;