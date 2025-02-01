import { useMemo, useState } from "react";
import { Popover, Button } from "antd"; // Ensure these are installed via npm/yarn
import VisitCard from "./VisitCard"; // Ensure this component exists
import CustomCard from "./CustomCard";
import FlipCard from "./FlipCard";
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

function App() {


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}>
        <VisitCard/>

      <FlipCard/>

   

 
    </div>
  );
}

export default App;
