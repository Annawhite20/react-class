import { useState } from "react";            
const  Home= () => {
 
    const [color, setcolor] = useState("red");
    return (  
       <div>
        <h1>My favorite color is {color}!</h1>
     <button type="button"
        onClick={() => setcolor("blue")}
      >
      blue
     </button>

     <form action="">
        <div>
        <input type="text"id="formGet"required></input>
        </div>
     </form>
       </div>   
 );}
 
export default Home;