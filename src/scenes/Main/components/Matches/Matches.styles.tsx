import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    marginBottom: theme.spacing(4),
  },
  accordion: {
    padding: theme.spacing(1),
  },
  accordionSummary: {
    "& div": {
      margin: "0!important",
    },
    "& h3": {
      margin: "0",
    },
  },
  pair: {
    "&:first-of-type": {
      marginTop: 0,
    },
    "&:last-of-type": {
      marginBottom: 0,
    },
  },
}));

export { useStyles };
