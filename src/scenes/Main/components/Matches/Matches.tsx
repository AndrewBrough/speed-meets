import React, { FC, useState } from "react";
import { Box, Card, Grid } from "@material-ui/core";

import { useMatchMaker } from "../../../../hooks/useMatchMaker";

import { useStyles } from "./Matches.styles";

interface Props {
  nameList: string[];
  matches: string[][];
}

const Matches: FC<Props> = ({ nameList, matches }) => {
  const classes = useStyles();

  const renderSet = (matchSet, matchIndex) => {
    return (
      <Grid item xs={12} md={4}>
        <Card className={classes.card}>
          <h3>Match #{matchIndex + 1}</h3>
          {matchSet.map(names => (
            <p key={names}>{names.join(" + ")}</p>
          ))}
        </Card>
      </Grid>
    );
  };

  const renderMatches = () => matches.map((matches, matchIndex) => renderSet(matches, matchIndex));

  return (
    <Box className={classes.box}>
      <Grid container spacing={2}>
        {renderMatches()}
      </Grid>
    </Box>
  );
};

export { Matches };
