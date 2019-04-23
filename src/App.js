import React from "react";
import "./App.css";
import { data } from "./data";
/**
 * understand JSON structure
 * how to use it in a reusable component
 * {
    name: "Cheese sandwich",
    price: "2.30",
    description: "A tasty treat"
  }
 */

const MenuItem = props => {
  return (
    <div className='menuItem'>
      <p>{props.foo.name}</p>
      <p>{props.foo.description}</p>
      <p>{props.foo.price}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className='App'>
      <h1>Menu</h1>
      {data.map((item, index) => (
        <MenuItem key={item.id} foo={item} />
      ))}
    </div>
  );
};

export default App;
