import React, { createContext, FC, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useMatchHistory } from "../../hooks/useMatchHistory";
import { LocalStorageKeys } from "../../types/localStorageKeys";

interface MatchData {
  nameList: string[];
  setNameList: (values: string[]) => void;
  matches: string[][][];
  setMatches: (value: string[][][]) => void;
}

const MatchContext = createContext<MatchData>(null);

const MatchProvider: FC = ({ children }) => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const loadedNames = getLocalStorage(LocalStorageKeys.nameList);
  const [nameList, setNameList] = useState<string[]>(loadedNames || [""]);
  const { getMatchHistory } = useMatchHistory();
  const loadedMatches = loadedNames ? getMatchHistory(loadedNames) : [];
  const [matches, setMatches] = useState<string[][][]>(loadedMatches || []);

  const debouncedLoadMatches = useDebounce(nameList => {
    setMatches(getMatchHistory(nameList) || []);
  }, 200);

  // optimisation - debounce this - make it not run right after every single input change when entering names
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
    debouncedLoadMatches(nameList);
  }, [nameList]);

  const value: MatchData = {
    nameList,
    setNameList,
    matches,
    setMatches,
  };

  return <MatchContext.Provider value={value}>{children}</MatchContext.Provider>;
};

export { MatchProvider, MatchContext, MatchData };
