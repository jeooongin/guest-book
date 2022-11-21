import Head from "next/head";
import React from "react";
import App from "../components/App";

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

export default _app;
