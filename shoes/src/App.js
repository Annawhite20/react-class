import Navbar from "./Navbar";
import Home from "./Home";
const App = () => {
   
  const name = "Anna";
  const age = 20;
  const activities = [1,2,3,4,5];
  const person = {
    name: "Anna",
    age:20,
    ocupation: "web dev",
    desc: "Kind and lovely"
  }
  const canva = "https://canva.com"
  return (
    <div className="header">
      <Navbar></Navbar>
      <Home></Home>
        
    </div>
  );

}
 
export default App;
