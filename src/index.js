import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting title="Hola FlipGamer" name="Bonn"/>
    <UserCard
      name="Mari"
      amount={3000}
      married={true}
      points={[99, 33, 22.1]}
      address={{ street: "123 Main Street", city: "San Francisco" }}
    />
  </>
);
