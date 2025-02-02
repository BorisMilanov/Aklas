// import React from "react";
// import { Card } from "antd";
// import styled from "styled-components";

// const StyledCard = styled(Card)`
//   font-weight: bold;
//   position: relative;
//   width: 300px;
//   height: 900px;
//   border: 2px solid black;
//   background: white;
//   transition: 0.25s ease;
//   overflow: hidden;

//   &:hover {
//     transform: translate(-10px, -10px);
//     border-color: #ff5722; /* Example highlight color */
//   }

//   .card--display {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 100%;

//     i {
//       font-size: 60px;
//       margin-bottom: 20px;
//     }

//     h2 {
//       margin: 10px 0;
//     }
//   }

//   .card--hover {
//     display: none;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: white;
//     padding: 20px;
//     transition: 0.3s ease-in-out;
//   }

//   &:hover .card--display {
//     display: none;
//   }

//   &:hover .card--hover {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }

//   .card--border {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     left: 0;
//     top: 0;
//     border: 2px dashed black;
//     z-index: -1;
//   }
// `;

// const CustomCard: React.FC = () => {
//   return (
//     <StyledCard>
//       <div className="card--display">
//         <i className="fas fa-user"></i>
//         <h2>Title</h2>
//       </div>
//       <div className="card--hover">
//         <h2>More Info</h2>
//         <p>Some additional details about this card.</p>
//         <p className="link">Learn More →</p>
//       </div>
//       <div className="card--border"></div>
//     </StyledCard>
//   );
// };

// export default CustomCard;
