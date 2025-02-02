
// import FlipCard from "./FlipCard";

import Home from "./Home";
import { Layout } from "antd";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Cards";

const { Content } = Layout;

function App() {


  return (
  

      <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            
          </Routes>
        </Content>
      </Layout>
    </Router>

 
 
  );
}

export default App;
