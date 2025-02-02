import React, { useState } from "react";
import { Menu, Layout, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Header style={{ backgroundColor: "#1890ff", padding: "0 20px" }}>
      <div className="logo" style={{ float: "left", color: "white", fontSize: "20px", fontWeight: "bold" }}>
        🎓 School Reunion
      </div>

      {/* Desktop Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        style={{ float: "right", minWidth: "400px" }}
      >
        <Menu.Item key="/" >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/cards">
          <Link to="/cards">Cards</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="/events">
          <Link to="/events">Events</Link>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key="/rsvp">
          <Button type="primary">
            <Link to="/rsvp">RSVP</Link>
          </Button>
        </Menu.Item>
      </Menu>

      {/* Mobile Menu Button */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{ float: "right", marginTop: "15px", display: "none" }}
        className="menu-button"
      />

      {/* Mobile Dropdown Menu */}
      {collapsed && (
        <Menu theme="dark" mode="vertical" selectedKeys={[location.pathname]} style={{ marginTop: "60px" }}>
          <Menu.Item key="/" onClick={() => setCollapsed(false)}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/about" onClick={() => setCollapsed(false)}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="/events" onClick={() => setCollapsed(false)}>
            <Link to="/events">Events</Link>
          </Menu.Item>
          <Menu.Item key="/contact" onClick={() => setCollapsed(false)}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="/rsvp" onClick={() => setCollapsed(false)}>
            <Button type="primary">
              <Link to="/rsvp">RSVP</Link>
            </Button>
          </Menu.Item>
        </Menu>
      )}
    </Header>
  );
};

export default Navbar;
