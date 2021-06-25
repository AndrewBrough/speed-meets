import { createMuiTheme } from "@material-ui/core/styles";
import * as colors from "./colors/colors";

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.green.base,
    },
    secondary: {
      main: colors.blue.darkFamily.normal,
    },
    warning: {
      main: colors.orange.base,
    },
    error: {
      main: colors.red.base,
    },
  },
});

export { materialTheme };
