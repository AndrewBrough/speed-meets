import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { Card, Container } from "@material-ui/core";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LocalStorageKeys } from "../../types/localStorageKeys";

import { Matches } from "./components/Matches";
import { NameList } from "./components/NameList";
import { useStyles } from "./Main.styles";
import { useMatchHistory } from "../../hooks/useMatchHistory";

const Main: FC = () => {
  const classes = useStyles();
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const loadedNames = getLocalStorage(LocalStorageKeys.nameList);
  const [nameList, setNameList] = useState<string[]>(loadedNames || [""]);
  const { getMatchHistory } = useMatchHistory();
  const loadedMatches = loadedNames ? getMatchHistory(loadedNames) : [];
  const [matches, setMatches] = useState<string[][]>(loadedMatches || []);

  useEffect(() => {
    if (!nameList) return null;
    if (nameList[nameList.length - 1] !== "") {
      setNameList([...nameList, ""]);
    } else if (nameList.length > 1) {
      const lastTwo = nameList.slice(nameList.length - 2, nameList.length);
      if (lastTwo.every(name => name === "")) {
        const newList = [...nameList];
        newList.pop();
        setNameList(newList);
      }
    }
    setLocalStorage(LocalStorageKeys.nameList, nameList);
    setMatches(getMatchHistory(nameList) || []);
  }, [nameList]);

  return (
    <main className={classes.main}>
      <Card className={classes.header}>
        <Container>
          <h2 className={classes.title}>Speed meets</h2>
        </Container>
      </Card>
      <Container className={classes.container}>
        <NameList nameList={nameList} setNameList={setNameList} setMatches={setMatches} />
        <Matches nameList={nameList} matches={matches} key={JSON.stringify(nameList)} />
      </Container>
    </main>
  );
};

export { Main };
