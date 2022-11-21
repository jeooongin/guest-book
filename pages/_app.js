import Head from "next/head";
import React from "react";
<<<<<<< HEAD
import "antd/dist/reset.css";

import App from "../components/App";
import wrapper from "../store/configureStore";
=======
import App from "../components/App";
>>>>>>> 1b49230188ddc17abc5d46f54e3794999b19361b

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

<<<<<<< HEAD
export default wrapper.withRedux(_app);
=======
export default _app;
>>>>>>> 1b49230188ddc17abc5d46f54e3794999b19361b
