import ShoeCard from "./Shoes";
import Shoe from "./phone.png"

const Products = () => {
    
    const shoeCollection = [
        {
           id: 1,
           name:"Nike",
           image: Shoe,
           type:"Air force",
           price:"29",
           
        },
        {
           id: 1,
           name:"Nike",
           image: Shoe,
           type:"Air force",
           price:"29",
           
        },
        {
           id: 1,
           name:"Nike",
           image: Shoe,
           type:"Air force",
           price:"29",
           
        },
      ]
    return ( 
        <div>
        {
         shoeCollection.map((shoe) =>(
           <ShoeCard 
           key={shoe.id}
           name={shoe.name}
           image={shoe.image}
           price={shoe.price}
           type={shoe.type}
           />
         ))
        }
     </div>
  
     );
}
 
export default Products;