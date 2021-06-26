import { makeStyles } from "@material-ui/core/styles";
import { Autorenew } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  btn: {
    minWidth: 0,
    display: "inline-block",
    padding: 0,
    verticalAlign: "sub",
    marginLeft: theme.spacing(1),
  },
  inputWrapper: {
    "& button": {
      display: "none",
    },
    "&:hover button": {
      display: "inline-block",
    },
  },
  input: {
    minWidth: 0,
    width: "auto",
  },
}));

export { useStyles };
