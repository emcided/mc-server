import React from "react";
import ReactDOM from "react-dom/client";
import ItemBuilder from "./builder/item-builder";
import Entities from "./builder/Entities";
import EntitiesLocations from "./builder/EntitiesLocations";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ItemBuilder />
    <Entities />
    <EntitiesLocations />
  </React.StrictMode>
);
