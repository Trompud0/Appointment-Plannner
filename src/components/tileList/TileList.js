import React from "react";
import { Tile } from "../tile/Tile.js";

export const TileList = (props) => {
  return (
    <div>
      {props.tiles.map((obj, index) => {
        const {name, ...description} = obj;
        return <Tile name={name} description={description} key={index}/>
      })}
    </div>
  );
};
