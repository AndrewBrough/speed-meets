import React, { FC } from "react";
import { Button } from "@material-ui/core";

import { useMatchMaker } from "../../../../hooks/useMatchMaker";
import { useMatchHistory } from "../../../../hooks/useMatchHistory";

interface Props {
  nameList: string[];
  setMatches: (values: string[][]) => void;
}

const MatchButton: FC<Props> = ({ nameList, setMatches }) => {
  const { getMatches } = useMatchMaker(nameList);
  const { setHistory } = useMatchHistory();

  const onMatchClick = () => {
    const matches = getMatches();
    setHistory(nameList, matches);
    setMatches(matches);
  };

  return (
    <Button variant="contained" color="primary" size="large" onClick={onMatchClick}>
      Get Matches
    </Button>
  );
};

export { MatchButton };
