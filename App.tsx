import React from "react";
import Model from "react-3dmodelx";

export default () => (
  <div style={{ maxWidth: 800, width: "100%", height: 400, margin: "auto" }}>
    <Model.OBJ
      backgroundColor="#FFFFFF"
      src="https://waygate.s3.amazonaws.com/6459da949efc6613ed2ed4ed/3DModel.obj"
    />
  </div>
);
