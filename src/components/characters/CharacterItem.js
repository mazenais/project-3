import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.name}
            </li>
            <li>
              <strong>Species:</strong> {item.species}
            </li>
            <li>
              <strong>Origin:</strong> {item.origin.name}
            </li>
            <li>
              <strong>Location:</strong> {item.location.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
