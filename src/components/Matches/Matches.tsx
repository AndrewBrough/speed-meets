import React, { FC, useState } from "react";
import { useMatchMaker } from "../../hooks/useMatchMaker";
import { Box, Button } from "@material-ui/core";

interface Props {
  nameList: string[];
}

const Matches: FC<Props> = ({ nameList }) => {
  nameList = nameList.filter(name => name !== "");
  const [matches, setMatches] = useState<string[][]>([]);
  const { getMatches } = useMatchMaker(nameList);

  const renderMatches = (matchSet, matchIndex) => {
    return (
      <li key={`match-${matchIndex}`}>
        <div>
          {matchSet.map(names => (
            <p key={names}>{names.join(" + ")}</p>
          ))}
        </div>
      </li>
    );
  };

  const onMatchClick = () => {
    const newMatches = getMatches();
    setMatches(newMatches);
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={onMatchClick}>
        Get Matches
      </Button>
      <ol>{matches.map((matches, matchIndex) => renderMatches(matches, matchIndex))}</ol>
    </Box>
  );
};

export { Matches };
