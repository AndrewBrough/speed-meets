import { useLocalStorage } from "./useLocalStorage";

const useMatchHistory = () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  const getHistoryKeyName = nameList => `history.${nameList.join(",")}`;

  const setHistory = (nameList, matches) => {
    const data = JSON.stringify(matches);
    setLocalStorage(getHistoryKeyName(nameList), data);
  };

  const getHistory = nameList => {
    const key = getHistoryKeyName(nameList);
    const json = getLocalStorage(key);
    const data = JSON.parse(json);
    return data;
  };

  return { setHistory, getHistory };
};

export { useMatchHistory };
