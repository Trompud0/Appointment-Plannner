import React from "react";

export const AppointmentTile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{props.title}</p>
      {Object.values(props.description).map((value, index) => <p className="tile" key={index}>{value}</p>)}
    </div>
  );
};