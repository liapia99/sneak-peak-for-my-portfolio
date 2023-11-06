import React from "react";
import { Carrot } from "./Carrot";
import "./style.css";

export const Property = () => {
  return (
    <div className="property">
      <div className="overlap-group">
        <div className="text-wrapper">Julia Piascik</div>
        <Carrot className="carrot-instance" property1="default" />
      </div>
    </div>
  );
};
