import React, { FC } from "react";
import { Button } from "@material-ui/core";

import { useMatchMaker } from "../../../../hooks/useMatchMaker";
import { useMatchHistory } from "../../../../hooks/useMatchHistory";
import { useMatchData } from "../../../../data/MatchContext/useMatchContext";

const MatchButton: FC = () => {
  const { nameList, setMatches } = useMatchData();
  const { getMatches } = useMatchMaker(nameList);
  const { setMatchHistory } = useMatchHistory();

  const onMatchClick = () => {
    const matches = getMatches();
    setMatchHistory(nameList, matches);
    setMatches(matches);
  };

  return (
    <Button variant="contained" color="primary" size="large" onClick={onMatchClick}>
      Get new matches
    </Button>
  );
};

export { MatchButton };
