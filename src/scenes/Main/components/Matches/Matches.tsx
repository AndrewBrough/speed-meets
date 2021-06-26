import React, { FC } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { NamePair } from "./NamePair";
import { useStyles } from "./Matches.styles";
import { useMatchData } from "../../../../data/MatchContext/useMatchContext";

const Matches: FC = () => {
  const classes = useStyles();
  const { matches } = useMatchData();

  const renderSet = (matchSet, matchIndex) => {
    const setNames = () => {};

    return (
      <Grid item xs={12} md={4}>
        <Accordion defaultExpanded className={classes.accordion}>
          <AccordionSummary className={classes.accordionSummary} expandIcon={<ExpandMoreIcon />}>
            <h3>Match #{matchIndex + 1}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {matchSet.map(names => (
                <div>
                  <NamePair names={names} />
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
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
