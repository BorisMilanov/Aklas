import React from 'react';
import { Avatar, Button, Card } from 'antd';
import './FlipCard.css';
import styled from "styled-components";
import { AntDesignOutlined, InstagramOutlined, LinkedinOutlined, UserOutlined } from '@ant-design/icons';

const AvatarFlipCard = () => {
    const linkedin = "https://www.linkedin.com/in/boris-milanov-611b611b4/";
    const instagram = "https://www.instagram.com/boris";

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card>
        
                    <Avatar
    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 110 }}
     src="./profileBoris.jpg"
  />
             
                        <h2>Boris Milanov</h2>
                        <p>Web Developer</p>
                        <p>Email: boris.mil@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    
                    </Card>
 
                </div>
                <div className="flip-card-back">
                    <Card bordered={true} style={{ width: 300, backgroundColor: '#2C3E50', color: 'white' }}>
                        <h3>About Me</h3>
                        <p>Passionate about building responsive and user-friendly websites.</p>
                        <p>Experience in HTML, CSS, JavaScript, and React.</p>
                        <div>   <Button 
                           
                            type="link"
                            href="https://www.linkedin.com/in/boris-milanov-611b611b4/"
                            target="_blank"
                            icon={<LinkedinOutlined />}
                        >Boris
                        </Button>
                        <Button
        type="link"
        href="https://www.instagram.com/boris"
        target="_blank"
        icon={<InstagramOutlined />} // Using react-icons for Instagram
      >
        Boris
      </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AvatarFlipCard;