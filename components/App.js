import React from "react";
import { Col, Layout, Row, Typography } from "antd";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const App = ({ children }) => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Title level={3} style={{ color: "white", marginTop: "10px" }}>
          방명록
        </Title>
      </Header>
      <Content style={{ margin: "10px" }}>
        <Row>
          <Col xs={24} md={6}></Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6} å></Col>
        </Row>
      </Content>
      <Footer style={{ display: "flex", justifyContent: "center" }}>
        Copyright 2022. JeongIn All rights reserved.
      </Footer>
    </Layout>
  );
};

export default App;
