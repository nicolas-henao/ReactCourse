

import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const user = [
  {
    id: 1,
    name: "Javier",
    image: "https://robohash.org/user2"
  },
  {
    id: 2,
    name: "Bonnteylor",
    image: "https://robohash.org/kk"
  },
    {
    id: 3,
    name: "Santi",
    image: "https://robohash.org/negro"
  }
]

root.render(
  <>
    {user.map((user, i) => {
      return <div key = { i}>
        <h1>{user.name}</h1>
        <img src={user.image} />
      </div>
    })}
  </>
);
