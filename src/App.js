import React, { useState } from "react";
import "./styles.css";

const foodGallery = {
  Mughlai: [
    { name: "Dum Biriyani", rating: "5/5" },
    { name: "Tandoori Chicken", rating: "4.5/5" },
    { name: "Mughlai Paratha", rating: "4/5" }
  ],
  Chinese: [
    { name: "Kung Pao Chicken", rating: "4/5" },
    { name: "Dumplings", rating: "3.5/5" },
    { name: "Spring Roll", rating: "3.5/5" }
  ],
  Italian: [
    { name: "Pizza", rating: "4.5/5" },
    { name: "Lasagna", rating: "4/5" },
    { name: "Truffles", rating: "4/5" }
  ],
  Mexican: [
    { name: "Burritos", rating: "4.5/5" },
    { name: "Takos", rating: "4/5" },
    { name: "Tomato Salsa", rating: "3.5/5" }
  ]
};

let arrfoodGallery = Object.keys(foodGallery);

export default function App() {
  const [dishSelcted, setfoodDishes] = useState("Mughlai");

  function foodClickHandler(foodCategories) {
    setfoodDishes(foodCategories);
  }

  return (
    <div className="App">
      <h1>🍔🍕 Foodopedia</h1>
      <p>Checkout my favorite foods. Select a dish to kill your craving.</p>
      {arrfoodGallery.map(function (foodCategories) {
        return (
          <button
            key={foodCategories}
            onClick={() => foodClickHandler(foodCategories)}
            className="btn"
          >
            {foodCategories}
          </button>
        );
      })}
      <hr></hr>
      <div>
        <ul style={{ padding: "0" }}>
          {foodGallery[dishSelcted].map(function (foodList) {
            return (
              <li
                key={foodList.name}
                style={{
                  textAlign: "left",
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #bfc3c9",
                  width: "60%",
                  margin: "1rem 0rem",
                  borderRadius: "9px"
                }}
              >
                <div style={{ fontSize: "large" }}> {foodList.name} </div>
                <div style={{ fontSize: "small" }}> {foodList.rating} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
