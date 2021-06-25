import React, { FC } from "react";

import { Card, Grid, TextField } from "@material-ui/core";

import { ClearButton } from "../ClearButton";
import { MatchButton } from "../MatchButton";

import { useStyles } from "./NameList.styles";
import { HistoryMenu } from "../HistoryMenu";

interface Props {
  nameList: string[];
  setNameList: (values: string[]) => void;
  setMatches: (values: string[][]) => void;
}

const NameList: FC<Props> = ({ nameList, setNameList, setMatches }) => {
  const classes = useStyles();

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
            <HistoryMenu setNameList={setNameList} />
          </h2>
          <ClearButton setNameList={setNameList} />
        </div>
        {renderInputList()}
        <div className={classes.titleRow}>
          <h2></h2>
          <MatchButton nameList={nameList} setMatches={setMatches} />
        </div>
      </Card>
    </Grid>
  );
};

export { NameList };
