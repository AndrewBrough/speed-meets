import React, { useEffect, useState } from "react";
import type { FC } from "react";

import { Matches } from "./components/Matches";
import { NameList } from "./components/NameList";
import { ClearButton } from "./components/ClearButton";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { LocalStorageKeys } from "./types/localStorageKeys";

const EntryPoint: FC = () => {
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
    <main>
      <p>Enter names into fields below, then click the `Match!` button below.</p>
      <p>Each click gives a new unique match set.</p>
      <p>Don't worry, UI update coming soon.</p>
      <NameList nameList={nameList} setNameList={setNameList} />
      <ClearButton setNameList={setNameList} />
      <Matches nameList={nameList} />
    </main>
  );
};

export { EntryPoint };
