import React from "react";
import Instructions from "../components/Registration/Instructions/Instruction";
import background from "../src/assets/Register/regBackground.png";

export default function Register() {
  return (
    <>
      <div
        style={{
          background: `radial-gradient(40.9% 58.96% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.88) 100%), url(${background})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      ><Instructions/></div>
    </>
  );
}
