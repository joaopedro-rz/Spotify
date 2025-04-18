import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* Componente de Artistas Populares */}
      <ItemList title="Artistas Populares" items={8}/>
      {/* Componente de Musicas Populares */}
      <ItemList title="Musicas Populares" items={16}/>
    </div>
  );
};

export default Main;
