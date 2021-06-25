import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../styles/colors";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.background,
    height: "100vh",
    paddingBottom: theme.spacing(4),
  },
  container: {},
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
}));

export { useStyles };
