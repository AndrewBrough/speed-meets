import React, { FC } from "react";

import { Grid, TextField } from "@material-ui/core";

import { ClearButton } from "../ClearButton";

import { useStyles } from "./NameList.styles";

interface Props {
  nameList: string[];
  setNameList: (values: string[]) => void;
}

const NameList: FC<Props> = ({ nameList, setNameList }) => {
  const classes = useStyles();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.dataset["id"];
    const newNameList = [...nameList];
    newNameList[id] = event.target.value;
    setNameList(newNameList);
  };

  const renderInput = i => (
    <TextField
      label={`Name ${i + 1}`}
      id={i.toString()}
      key={`name-in-list-${i}`}
      data-id={i}
      onChange={onInputChange}
      value={nameList[i]}
      autoFocus={i === 0}
      className={classes.input}
    />
  );

  const renderInputList = () => {
    const inputs = [];
    for (var i = 0; i < nameList.length; i++) {
      inputs.push(renderInput(i));
    }
    return inputs;
  };

  return (
    <Grid className={classes.grid}>
      {renderInputList()}
      <ClearButton setNameList={setNameList} />
    </Grid>
  );
};

export { NameList };
