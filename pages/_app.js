import Head from "next/head";
import React from "react";

const _app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>방명록</title>
      </Head>
      <Component />
    </>
  );
};

export default _app;
