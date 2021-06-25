import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { Card, Container } from "@material-ui/core";

import { Matches } from "../../components/Matches";
import { NameList } from "../../components/NameList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LocalStorageKeys } from "../../types/localStorageKeys";
import { useStyles } from "./Main.styles";

const Main: FC = () => {
  const classes = useStyles();
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const loadedNames = getLocalStorage(LocalStorageKeys.nameList);
  const [nameList, setNameList] = useState<string[]>(loadedNames || [""]);

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
  }, [nameList]);

  return (
    <main className={classes.main}>
      <Card className={classes.header}>
        <Container>
          <h2 className={classes.title}>Speed meets</h2>
        </Container>
      </Card>
      <Container className={classes.container}>
        <p>Enter names into fields below, then click the `Match!` button below.</p>
        <p>Each click gives a new unique match set.</p>
        <p>Don't worry, UI update coming soon.</p>
        <NameList nameList={nameList} setNameList={setNameList} />
        <Matches nameList={nameList} key={JSON.stringify(nameList)} />
      </Container>
    </main>
  );
};

export { Main };
