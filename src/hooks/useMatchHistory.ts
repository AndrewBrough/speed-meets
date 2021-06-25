import { LocalStorageKeys } from "../types/localStorageKeys";
import { useLocalStorage } from "./useLocalStorage";

const useMatchHistory = () => {
  const { getLocalStorage, setLocalStorage, removeLocalStorage } = useLocalStorage();

  const getCondensedNameList = nameList => nameList.join(",");

  const getMatchHistoryKeyName = nameList =>
    `${LocalStorageKeys.matchHistory}.${getCondensedNameList(nameList)}`;

  const setMatchHistory = (nameList, matches) => {
    const data = JSON.stringify(matches);
    const key = getMatchHistoryKeyName(nameList);
    setLocalStorage(key, data);
    saveKey(getCondensedNameList(nameList));
  };

  const getMatchHistory = nameList => {
    const key = getMatchHistoryKeyName(nameList);
    const json = getLocalStorage(key);
    const data = JSON.parse(json);
    return data;
  };

  const saveKey = condensedNameList => {
    const keys: string[] = getLocalStorage(LocalStorageKeys.namesHistory) || [];
    if (keys.includes(condensedNameList) == false) {
      setLocalStorage(LocalStorageKeys.namesHistory, [...keys, condensedNameList]);
    }
  };

  const getNamesHistory = () => getLocalStorage(LocalStorageKeys.namesHistory) as string[];

  const clearNamesHistory = () => {
    getNamesHistory().forEach(key => removeLocalStorage(key));
    removeLocalStorage(LocalStorageKeys.namesHistory);
  };

  return { setMatchHistory, getMatchHistory, getNamesHistory, clearNamesHistory };
};

export { useMatchHistory };
