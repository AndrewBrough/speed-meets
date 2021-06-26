import React, { FC } from "react";
import { Button } from "@material-ui/core";

import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { LocalStorageKeys } from "../../../../types/localStorageKeys";
import { useMatchData } from "../../../../data/MatchContext/useMatchContext";

const ClearButton: FC = () => {
  const { setNameList } = useMatchData();
  const { removeLocalStorage } = useLocalStorage();

  const onClick = () => {
    setNameList([""]);
    removeLocalStorage(LocalStorageKeys.nameList);
  };

  return (
    <Button variant="outlined" color="secondary" onClick={onClick}>
      Clear list
    </Button>
  );
};

export { ClearButton };
