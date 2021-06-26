import React, { FC, useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";

import { useMatchHistory } from "../../../../hooks/useMatchHistory";

import { useStyles } from "./HistoryMenu.styles";
import { useMatchData } from "../../../../data/MatchContext/useMatchContext";

const HistoryMenu: FC = () => {
  const classes = useStyles();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const { getNamesHistory, clearNamesHistory } = useMatchHistory(); // get names history
  const namesHistory = getNamesHistory();
  const { setNameList } = useMatchData();

  if (!namesHistory) return null;

  const renderHistory = () =>
    namesHistory.map((names, i) => (
      <MenuItem key={`name${i}`} onClick={e => onClick(e, names)}>
        {names}
      </MenuItem>
    ));

  const onClick = (e, item) => {
    setNameList(item.split(","));
    setMenuAnchorEl(null);
  };

  const onClearClick = () => {
    if (confirm("Are you sure? You'll forever lose your match history.")) {
      clearNamesHistory();
      setMenuAnchorEl(null);
    }
  };

  return (
    <div>
      <Button
        aria-controls="history-menu"
        aria-haspopup="true"
        onClick={e => setMenuAnchorEl(e.currentTarget)}
      >
        or use a previous list
      </Button>
      <Menu
        id="history-menu"
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={() => setMenuAnchorEl(null)}
      >
        {renderHistory()}
        <MenuItem onClick={onClearClick} className={classes.clearBtn}>
          Clear history
        </MenuItem>
      </Menu>
    </div>
  );
};

export { HistoryMenu };
