import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../styles/colors";

const useStyles = makeStyles(theme => ({
  box: {
    marginBottom: theme.spacing(4),
  },
  matchesButton: {
    marginBottom: theme.spacing(2),
  },
  paper: {
    width: "auto",
    padding: theme.spacing(2),
    backgroundColor: colors.backgroundWhite,
  },
}));

export { useStyles };
