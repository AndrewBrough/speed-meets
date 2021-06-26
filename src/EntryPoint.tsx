import React from "react";
import type { FC } from "react";
import { ThemeProvider } from "@material-ui/core";

import { materialTheme } from "./styles/materialTheme";
import { Main } from "./scenes/Main";
import { MatchProvider } from "./data/MatchContext/MatchProvider";

const EntryPoint: FC = () => {
  return (
    <ThemeProvider theme={materialTheme}>
      <MatchProvider>
        <Main />
      </MatchProvider>
    </ThemeProvider>
  );
};

export { EntryPoint };
