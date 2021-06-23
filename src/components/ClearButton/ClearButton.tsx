import React, { FC } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LocalStorageKeys } from "../../types/localStorageKeys";

interface Props {
  setNameList: (values: string[]) => void;
}

const ClearButton: FC<Props> = ({ setNameList }) => {
  const { removeLocalStorage } = useLocalStorage();

  const onClick = () => {
    setNameList([""]);
    removeLocalStorage(LocalStorageKeys.nameList);
  };

  return <button onClick={onClick}>Clear</button>;
};

export { ClearButton };
