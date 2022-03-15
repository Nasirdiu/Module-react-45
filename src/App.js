import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <External></External>
      {/* <Country></Country> */}

      {/* const produts=[
    {name:'laptop',price:53000},
    {name:'Phone',price:5300},
    {name:'Watch',price:1000},
    {name:'Bike',price:25000},
  ] */}
      {/* {
        produts.map(product=><Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="laptop" price='25000'></Product>
      <Product name="Phone" price='15000'></Product>
      <Product name="Watch" price='1500'></Product> */}
    </div>
  );
}

function External() {
  const [users, setUsers] = useState([]);
  // useEffect(()=>{},[])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>External User:</h2>
      <p>{users.length}</p>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}
function User(pops){
  return(
    <div style={{border:'2px solid red', margin:'10px'}}>
      <h3>Name:{pops.name}</h3>
      <p>Email:{pops.email}</p>
    </div>
  )
}
/* function Product(pops) {
  return (
    <div className="product">
      <h3>Name:{pops.name}</h3>
      <p>Price:{pops.price}</p>
    </div>
  );
} */

function Country() {
  const [Count, setCount] = useState(0);

  const increaseCount = () => setCount(Count + 1);
  const DecreaseCount = () => setCount(Count - 1);

  /* const increaseCount = () => {
    const newCount = Count + 1;
    setCount(newCount);
  }; */
  return (
    <div>
      <h1>Count:{Count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  );
}
export default App;
