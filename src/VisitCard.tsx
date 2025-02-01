// import React from "react";
// import { Card, Avatar, Typography, Button } from "antd";
// import { MailOutlined, PhoneOutlined, GlobalOutlined, LinkedinOutlined, InstagramOutlined } from "@ant-design/icons";

// const { Title, Text } = Typography;

// interface VisitCardProps {
//   name: string;
//   title: string;
//   email: string;
//   phone: string;
//   website?: string;
//   linkedin?: string;
//   instagram?: string;
//   avatarUrl?: string;
// }

// const VisitCard: React.FC<VisitCardProps> = ({ name, title, email, phone, website, linkedin, instagram, avatarUrl }) => {
//   return (
//     <Card style={{ width: 300, textAlign: "center", borderRadius: 10 }}>
         
//       <Avatar size={80} src={avatarUrl} style={{ marginBottom: 10 }} />
//       <Title level={4}>{name}</Title>
//       <Text type="secondary">{title}</Text>
//       <div style={{ marginTop: 15, textAlign: "center" }}>
//         <p><MailOutlined /> <Text>{email}</Text></p>
//         <p><PhoneOutlined /> <Text>{phone}</Text></p>
//         {website && (
//           <p><GlobalOutlined /> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
//         )}
//         {linkedin && (
//           <p><LinkedinOutlined /> <a href={linkedin} target="_blank" rel="noopener noreferrer">Boris M</a></p>
//         )}
//         {instagram && (
//           <p><InstagramOutlined /> <a href={instagram} target="_blank" rel="noopener noreferrer">Boris M</a></p>
//         )}
//       </div>
      
//     </Card>
//   );
// };

// export default VisitCard;
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
const dummyVisitCard: VisitCardProps = {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@gmail.com",
    phone: "+123456789",
    linkedin: "https://www.linkedin.com/in/john-doe/",
    instagram: "https://www.instagram.com/john.doe"
  };
  
  // Parent Component (Renders One VisitCard)
  const SingleVisitCard: React.FC = () => {
    return (
      <StyledCard>
        <VisitCard {...dummyVisitCard} />
      </StyledCard>
    );
  };
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
