import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../styles/colors";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.background,
    minHeight: "100vh",
    paddingBottom: theme.spacing(4),
  },
  container: {
    padding: theme.spacing(3),
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: colors.white,
    borderRadius: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    margin: 0,
  },
  small: {
    fontSize: "0.9rem",
  },
}));

export { useStyles };
