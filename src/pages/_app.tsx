/**
 * Copyright (c) 2020 - Jackk <jack@mechagaming.com>, All rights reserved.
 */

import React from "react";
import { GlobalStyles } from "twin.macro";

import "../styles/index.css";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
