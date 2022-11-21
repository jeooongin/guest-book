import Head from "next/head";
import React from "react";
import "antd/dist/reset.css";

import App from "../components/App";
import wrapper from "../store/configureStore";

const _app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>방명록</title>
      </Head>
      <App>
        <Component />
      </App>
    </>
  );
};

export default wrapper.withRedux(_app);
