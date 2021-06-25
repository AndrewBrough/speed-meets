import React, { FC } from "react";
import { Button } from "@material-ui/core";

import { useMatchMaker } from "../../../../hooks/useMatchMaker";

interface Props {
  nameList: string[];
  setMatches: (values: string[][]) => void;
}

const MatchButton: FC<Props> = ({ nameList, setMatches }) => {
  const { getMatches } = useMatchMaker(nameList);

  const onMatchClick = () => {
    const newMatches = getMatches();
    setMatches(newMatches);
  };

  return (
    <Button variant="contained" color="primary" size="large" onClick={onMatchClick}>
      Get Matches
    </Button>
  );
};

export { MatchButton };
