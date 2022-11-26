import React from "react";
import { Col, Layout, Row, Typography } from "antd";
import styled from "styled-components";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const HeaderWrapper = styled(Header)`
  display: flex;
  align-items: center;
`;

const TitleWrapper = styled(Title)`
  &.ant-typography {
    color: white;
  }
  margin-top: 10px;
`;

const ContentWrapper = styled(Content)`
  margin: 10px;
`;

const FooterWrapper = styled(Footer)`
  display: flex;
  justify-content: center;
`;

const App = ({ children }) => {
  return (
    <Layout>
      <HeaderWrapper>
        <TitleWrapper level={3}>방명록</TitleWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <Row>
          <Col xs={24} md={6}></Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}></Col>
        </Row>
      </ContentWrapper>
      <FooterWrapper>
        Copyright 2022. JeongIn All rights reserved.
      </FooterWrapper>
    </Layout>
  );
};

export default App;
