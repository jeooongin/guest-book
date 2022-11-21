import React from "react";
<<<<<<< HEAD
import { Col, Layout, Row, Typography } from "antd";
=======
import { Layout, Typography } from "antd";
import styled from "styled-components";
>>>>>>> 1b49230188ddc17abc5d46f54e3794999b19361b

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

<<<<<<< HEAD
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
=======
const TitleWrapper = styled(Title)`
  color: white;
`;

const App = ({ children }) => {
  return (
    <Layout>
      <Header>
        <TitleWrapper level={3}>방명록</TitleWrapper>
      </Header>
      <Layout>
        <Sider theme="light">Sider</Sider>
        <Content>{children}</Content>
      </Layout>
      <Footer>Footer</Footer>
>>>>>>> 1b49230188ddc17abc5d46f54e3794999b19361b
    </Layout>
  );
};

export default App;
