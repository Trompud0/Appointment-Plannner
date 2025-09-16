import React from "react";
import { AppointmentTile } from "../AppointmentTile/AppointmentTile";

export const AppointmentTileList = (props) => {
  return (
    <div>
      {props.tiles.map((obj, index) => {
        const {title, ...description} = obj;
        return <AppointmentTile title={title} description={description} key={index}/>
      })}
    </div>
  );
};