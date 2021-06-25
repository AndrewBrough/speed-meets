import { makeStyles } from "@material-ui/core/styles";

import { colors } from "../../../../styles/colors";

const useStyles = makeStyles(theme => ({
  grid: {
    marginBottom: theme.spacing(2),
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    "& > h2": {
      margin: 0,
    },
  },
  card: {
    background: colors.white,
    padding: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(2),
    marginLeft: 0,
    width: "20ch",
  },
}));

export { useStyles };
