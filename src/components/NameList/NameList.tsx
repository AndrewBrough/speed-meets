import React, { FC, useEffect } from "react";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LocalStorageKeys } from "../../types/localStorageKeys";

interface Props {
  nameList: string[];
  setNameList: (values: string[]) => void;
}

const NameList: FC<Props> = ({ nameList, setNameList }) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.dataset["id"];
    const newNameList = [...nameList];
    newNameList[id] = event.target.value;
    setNameList(newNameList);
  };

  const renderInput = i => (
    <input
      type="text"
      id={i.toString()}
      key={`name-in-list-${i}`}
      data-id={i}
      onChange={onInputChange}
      value={nameList[i]}
      autoFocus={i === 0}
    />
  );

  const renderInputList = () => {
    const inputs = [];
    for (var i = 0; i < nameList.length; i++) {
      inputs.push(renderInput(i));
    }
    return inputs;
  };

  return <>{renderInputList()}</>;
};

export { NameList };
