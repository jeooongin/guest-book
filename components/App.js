import React from "react";
import { Col, Layout, Row, Typography } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const App = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Title level={3}>방명록</Title>
      </Header>
      <Layout>
        <Sider theme="light">Sider</Sider>
        <Content style={{ margin: "10px" }}>
          <Row>
            <Col xs={24} md={4}></Col>
            <Col xs={24} md={16}>
              {children}
            </Col>
            <Col xs={24} md={4}></Col>
          </Row>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
