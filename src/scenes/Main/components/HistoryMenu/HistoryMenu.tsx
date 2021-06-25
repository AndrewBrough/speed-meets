import React, { FC, useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useMatchHistory } from "../../../../hooks/useMatchHistory";

interface Props {
  setNameList: (values: string[]) => void;
}

const HistoryMenu: FC<Props> = ({ setNameList }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const { getNamesHistory } = useMatchHistory(); // get names history
  const namesHistory = getNamesHistory();

  const renderHistory = () =>
    namesHistory.map((names, i) => (
      <MenuItem key={`name${i}`} onClick={e => onClick(e, names)}>
        {names}
      </MenuItem>
    ));

  const onClick = (e, item) => {
    console.log(e, item);
    setNameList(item.split(","));
    setMenuAnchorEl(null);
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
      </Menu>
    </div>
  );
};

export { HistoryMenu };
