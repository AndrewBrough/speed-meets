import React, { FC, useEffect } from "react";
import { useState } from "react";

const NameList: FC = () => {
  const [nameList, setNameList] = useState<string[]>([""]);

  useEffect(() => {
    if (nameList[nameList.length - 1] !== "") {
      setNameList([...nameList, ""]);
    } else if (nameList.length > 1) {
      const lastTwo = nameList.slice(nameList.length - 2, nameList.length);
      console.log(lastTwo);
      if (lastTwo.every(name => name === "")) {
        const newList = [...nameList];
        newList.pop();
        setNameList(newList);
      }
    }
  }, [nameList]);

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
