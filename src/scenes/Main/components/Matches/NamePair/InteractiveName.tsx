import React, { FC, useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";

import { useStyles } from "./NamePair.styles";
import { useMatchData } from "../../../../../data/MatchContext/useMatchContext";

interface Props {
  name: string;
}

const InteractiveName: FC<Props> = ({ name }) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  const { nameList, setNameList, matches, setMatches } = useMatchData();
  const [updatedName, setUpdatedName] = useState(name);
  const textFieldRef = useRef();

  const updateMatches = value => {
    const newMatches = [...matches];
    for (var i = 0; i < newMatches.length; i++) {
      for (var j = 0; j < newMatches[i].length; j++) {
        for (var k = 0; k < newMatches[i][j].length; k++) {
          if (newMatches[i][j][k] == updatedName) {
            newMatches[i][j][k] = value;
          }
        }
      }
    }
    setMatches(newMatches);
  };

  const updateNameList = value => {
    const newNameList = [...nameList];
    for (var i = 0; i < newNameList.length; i++) {
      if (newNameList[i] == updatedName) {
        newNameList[i] = value;
      }
    }
    setNameList(newNameList);
  };

  const updateMatchesName = value => {
    setUpdatedName(value);
  };

  const onBlur = value => {
    updateMatches(value);
    updateNameList(value);
    setEditMode(false);
  };

  const renderInputOrName = () => {
    if (editMode) {
      return (
        <TextField
          className={classes.input}
          onChange={e => updateMatchesName(e.currentTarget.value)}
          value={updatedName}
          onBlur={e => onBlur(e.currentTarget.value)}
          ref={textFieldRef}
        />
      );
    }
    return updatedName;
  };

  return (
    <div className={classes.inputWrapper}>
      {renderInputOrName()}
      {!editMode && (
        <Button size="small" className={classes.btn} onClick={() => setEditMode(!editMode)}>
          <Edit fontSize="small" />
        </Button>
      )}
    </div>
  );
};

export { InteractiveName };
