import React from "react";
import { Col, Layout, Row, Typography } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const App = ({ children }) => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Title level={3} style={{ color: "white", marginTop: "10px" }}>
          방명록
        </Title>
      </Header>
      <Layout>
        <Sider theme="light">Sider</Sider>
        <Content style={{ margin: "20px" }}>
          <Row>
            <Col xs={24} md={4}></Col>
            <Col xs={24} md={16}>
              {children}
            </Col>
            <Col xs={24} md={4}></Col>
          </Row>
        </Content>
      </Layout>
      <Footer style={{ display: "flex", justifyContent: "center" }}>
        Copyright 2022. JeongIn All rights reserved.
      </Footer>
    </Layout>
  );
};

export default App;
