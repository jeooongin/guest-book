import React from "react";
import { Layout, Typography } from "antd";
import styled from "styled-components";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

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
    </Layout>
  );
};

export default App;
