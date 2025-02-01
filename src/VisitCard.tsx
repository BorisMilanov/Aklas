
import React from "react";
import { Card } from "antd";
import styled from "styled-components";

// VisitCard Component
interface VisitCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  instagram: string;
}

const VisitCard: React.FC<VisitCardProps> = ({ name, title, email, phone, linkedin, instagram }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{title}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <p>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </p>
    </div>
  );
};

// Styled Card using Ant Design
const StyledCard = styled(Card)`
  font-weight: bold;
  position: relative;
  width: 300px;
  height: 400px;
  border: 2px solid black;
  background: white;
  transition: 0.25s ease;
  overflow: hidden;
  padding: 20px;

  &:hover {
    transform: translate(-10px, -10px);
    border-color: #ff5722;
  }

  .card--border {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 2px dashed black;
    z-index: -1;
  }
`;
// const dummyVisitCard: VisitCardProps = {
//     name: "John Doe",
//     title: "Software Engineer",
//     email: "john.doe@gmail.com",
//     phone: "+123456789",
//     linkedin: "https://www.linkedin.com/in/john-doe/",
//     instagram: "https://www.instagram.com/john.doe"
//   };
  
  // Parent Component (Renders One VisitCard)
  // const SingleVisitCard: React.FC = () => {
  //   return (
  //     <StyledCard>
  //       <VisitCard {...dummyVisitCard} />
  //     </StyledCard>
  //   );
  // };
const CustomCard: React.FC = () => {
  return (
    <StyledCard>
      <VisitCard
        name="Gosho"
        title="A klas"
        email="gmail@gmail.com"
        phone="+23444444"
        linkedin="https://www.linkedin.com/in/boris-milanov-611b611b4/"
        instagram="https://www.instagram.com/boris"
      />
      <div className="card--border"></div>
    </StyledCard>
  );
};

export default CustomCard;
