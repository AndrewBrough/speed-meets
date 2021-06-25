import { makeStyles } from "@material-ui/core/styles";

import { colors } from "../../../../styles/colors";

const useStyles = makeStyles(theme => ({
  box: {
    marginBottom: theme.spacing(4),
  },
  card: {
    width: "auto",
    padding: theme.spacing(4),
    backgroundColor: colors.backgroundWhite,
  },
}));

export { useStyles };
