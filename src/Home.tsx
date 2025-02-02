import React from "react";
import { Layout, Typography, Card, Row, Col, Space } from "antd";
import { ClockCircleOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import Countdown from "antd/es/statistic/Countdown";

const { Header, Content, } = Layout;
const { Title, Paragraph } = Typography;

const eventDate = dayjs("2025-05-10T18:00:00"); // Set your event date

const Home: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      
      {/* Header Section */}
      <Header style={{ backgroundColor: "#1890ff", textAlign: "center", padding: "20px" }}>
        <Title level={2} style={{ color: "white" }}>🎉 Welcome to Our School Reunion 🎓</Title>
      </Header>

      <Content style={{ padding: "20px" }}>
        
        {/* Hero Section */}
        <Card style={{ textAlign: "center", marginBottom: "30px", background: "#1890ff", color: "white" }}>
          <Title level={2} style={{ color: "white" }}>Join Us for an Unforgettable Night!</Title>
          <Paragraph style={{ fontSize: "16px", color: "white" }}>
            Reconnect with old friends, relive amazing memories, and create new ones.
          </Paragraph>
         
        </Card>

        {/* Countdown Timer */}
        <Row justify="center">
          <Col>
            <Card style={{ textAlign: "center" }}>
              <ClockCircleOutlined style={{ fontSize: "30px", color: "#1890ff" }} />
              <Title level={3}>Time Until the Reunion</Title>
              <Countdown value={eventDate.valueOf()} format="D [days] HH:mm:ss" />
            </Card>
          </Col>
        </Row>

        {/* Event Details */}
        <Row gutter={[16, 16]} style={{ marginTop: "40px" }} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card>
              <HomeOutlined style={{ fontSize: "30px", color: "#1890ff" }} />
              <Title level={4}>Location</Title>
              <Paragraph>XYZ High School Auditorium</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <ClockCircleOutlined style={{ fontSize: "30px", color: "#1890ff" }} />
              <Title level={4}>Date & Time</Title>
              <Paragraph>May 10, 2025 | 6:00 PM - 11:00 PM</Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Gallery Section */}
        {/* <Title level={3} style={{ textAlign: "center", marginTop: "40px" }}>📸 Memories from the Past</Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card cover={<img src="https://via.placeholder.com/300" alt="Reunion" />} />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card cover={<img src="https://via.placeholder.com/300" alt="Friends" />} />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card cover={<img src="https://via.placeholder.com/300" alt="Memories" />} />
          </Col>
        </Row>

       */}

      </Content>

      {/* Footer
      <Footer style={{ textAlign: "center", backgroundColor: "#001529", color: "white", marginTop: "40px" }}>
        <Space direction="vertical">
          <Paragraph>📍 XYZ High School, City, Country</Paragraph>
          <Paragraph><PhoneOutlined /> Contact: +123 456 7890</Paragraph>
          <Paragraph>© 2025 School Reunion. All Rights Reserved.</Paragraph>
        </Space>
      </Footer> */}

    </Layout>
  );
};

export default Home;
