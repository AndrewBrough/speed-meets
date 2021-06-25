import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../../styles/colors";

const useStyles = makeStyles(theme => ({
  clearBtn: {
    color: colors.red.lightFamily.darker,
  },
}));

export { useStyles };
