import React, { FC } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
        <Accordion defaultExpanded className={classes.accordion}>
          <AccordionSummary className={classes.accordionSummary} expandIcon={<ExpandMoreIcon />}>
            <h3>Match #{matchIndex + 1}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {matchSet.map(names => (
                <p key={names} className={classes.pair}>
                  {names.join(" + ")}
                </p>
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
