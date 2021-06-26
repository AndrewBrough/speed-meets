import React, { FC } from "react";

import { Card, Grid, TextField } from "@material-ui/core";

import { ClearButton } from "../ClearButton";
import { MatchButton } from "../MatchButton";

import { useStyles } from "./NameList.styles";
import { HistoryMenu } from "../HistoryMenu";
import { useMatchData } from "../../../../data/MatchContext/useMatchContext";

const NameList: FC = () => {
  const classes = useStyles();
  const { nameList, setNameList } = useMatchData();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
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
      <Card className={classes.card}>
        <div className={classes.titleRow}>
          <h2>
            Enter names
            <HistoryMenu />
          </h2>
        </div>
        <div className={classes.inputWrapper}>
          {renderInputList()}
          <ClearButton />
        </div>
        <div className={classes.actionRow}>
          <MatchButton />
        </div>
      </Card>
    </Grid>
  );
};

export { NameList };
