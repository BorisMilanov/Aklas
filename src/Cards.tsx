import AvatarFlipCard from "./AvatarFlipCard"


const Cards = () => {return (<div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
      padding: "20px",
    }}><AvatarFlipCard/>
    <AvatarFlipCard/></div>)

}

export default Cards