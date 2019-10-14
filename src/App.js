import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import state from "./state";
import container from "./container";
import Content from "./components/Content";
import * as colors from "./theme/colors";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.grey40};
    color: white;
  }
`;

const ConnectedContent = container(Content);

export default () => (
  <Provider store={state}>
    <ThemeProvider theme={{ colors: colors }}>
      <GlobalStyle />
      <ConnectedContent />
    </ThemeProvider>
  </Provider>
);
