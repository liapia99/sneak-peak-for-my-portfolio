import React from "react";
import { Property } from "./Property";
import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="name-wrapper">
        <Property className="name" />
      </div>
    </div>
  );
};
