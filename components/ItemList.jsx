import React from "react";
import SingleItem from "./SingleItem";


const ItemList = () => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>Artista populares</h2>
        <a className="item-list__link" href="/">
          Mostrar mais
        </a>
      </div>
      <div className="item-list__container">
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
      </div>
    </div>
  );
};

export default ItemList;
