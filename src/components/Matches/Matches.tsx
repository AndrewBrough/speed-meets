import React, { FC, useState } from "react";
import { useMatchMaker } from "../../hooks/useMatchMaker";
import { Box, Button, Card, Grid } from "@material-ui/core";
import { useStyles } from "./Matches.styles";

interface Props {
  nameList: string[];
}

const Matches: FC<Props> = ({ nameList }) => {
  const classes = useStyles();
  nameList = nameList.filter(name => name !== "");
  const [matches, setMatches] = useState<string[][]>([]);
  const { getMatches } = useMatchMaker(nameList);

  const renderSet = (matchSet, matchIndex) => {
    return (
      <Grid item xs={12} md={4}>
        <Card className={classes.paper}>
          <h3>Match #{matchIndex + 1}</h3>
          {matchSet.map(names => (
            <p key={names}>{names.join(" + ")}</p>
          ))}
        </Card>
      </Grid>
    );
  };

  const onMatchClick = () => {
    const newMatches = getMatches();
    setMatches(newMatches);
  };

  const renderMatches = () => matches.map((matches, matchIndex) => renderSet(matches, matchIndex));

  return (
    <Box className={classes.box}>
      <Button
        className={classes.matchesButton}
        variant="contained"
        color="primary"
        onClick={onMatchClick}
      >
        Get Matches
      </Button>
      <Grid container spacing={2}>
        {renderMatches()}
      </Grid>
    </Box>
  );
};

export { Matches };
