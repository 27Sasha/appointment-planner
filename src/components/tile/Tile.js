import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {description.forEach( descrip =>{
        <p> {Object.keys(descrip)} : {Object.values(descrip)}</p>
      })}
    </div>
  );
};
