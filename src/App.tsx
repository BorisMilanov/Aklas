
import FlipCard from "./FlipCard";
import AvatarFlipCard from "./AvatarFlipCard";


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
     

      <FlipCard/>
      <AvatarFlipCard/>
   

 
    </div>
  );
}

export default App;
