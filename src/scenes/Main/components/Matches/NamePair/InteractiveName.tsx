import React, { FC, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";

import { useStyles } from "./NamePair.styles";

interface Props {
  name: string;
  onNameChange: (e) => void;
}

const InteractiveName: FC<Props> = ({ name, onNameChange }) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);

  const onChange = e => {};
  const renderInputOrName = () => {
    if (editMode) {
      return (
        <TextField
          className={classes.input}
          onChange={onNameChange}
          value={name}
          onBlur={() => setEditMode(false)}
        />
      );
    }
    return name;
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
