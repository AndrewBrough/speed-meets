import React from "react";
import type { FC } from "react";
import { ThemeProvider } from "@material-ui/core";

import { materialTheme } from "./styles/materialTheme";
import { Main } from "./scenes/Main";

const EntryPoint: FC = () => {
  return (
    <ThemeProvider theme={materialTheme}>
      <Main />
    </ThemeProvider>
  );
};

export { EntryPoint };
