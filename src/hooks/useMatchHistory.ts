import { LocalStorageKeys } from "../types/localStorageKeys";
import { useLocalStorage } from "./useLocalStorage";

const useMatchHistory = () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

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
    const keys = getLocalStorage(LocalStorageKeys.namesHistory) || [];
    setLocalStorage(LocalStorageKeys.namesHistory, [...keys, condensedNameList]);
  };

  return { setMatchHistory, getMatchHistory };
};

export { useMatchHistory };
