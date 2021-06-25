import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grid: {
    marginBottom: theme.spacing(2),
  },
  input: {
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: 0,
      width: "25ch",
    },
  },
}));

export { useStyles };
