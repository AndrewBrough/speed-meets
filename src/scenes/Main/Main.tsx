import React from "react";
import type { FC } from "react";
import { Card, Container } from "@material-ui/core";

import { Matches } from "./components/Matches";
import { NameList } from "./components/NameList";
import { useStyles } from "./Main.styles";
import { useMatchData } from "../../data/MatchContext/useMatchContext";

const Main: FC = () => {
  const classes = useStyles();
  const { nameList } = useMatchData();

  return (
    <main className={classes.main}>
      <Card className={classes.header}>
        <Container>
          <h2 className={classes.title}>
            Speed Meets <small className={classes.small}>People matcher</small>
          </h2>
        </Container>
      </Card>
      <Container className={classes.container}>
        <NameList />
        <Matches key={JSON.stringify(nameList)} />
      </Container>
    </main>
  );
};

export { Main };
