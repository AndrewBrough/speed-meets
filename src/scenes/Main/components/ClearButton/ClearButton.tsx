import React, { FC } from "react";
import { Button } from "@material-ui/core";

import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { LocalStorageKeys } from "../../../../types/localStorageKeys";

interface Props {
  setNameList: (values: string[]) => void;
}

const ClearButton: FC<Props> = ({ setNameList }) => {
  const { removeLocalStorage } = useLocalStorage();

  const onClick = () => {
    setNameList([""]);
    removeLocalStorage(LocalStorageKeys.nameList);
  };

  return (
    <Button variant="outlined" color="secondary" onClick={onClick}>
      Clear all
    </Button>
  );
};

export { ClearButton };
