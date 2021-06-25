import React, { FC, useState } from "react";
import { useMatchMaker } from "../../hooks/useMatchMaker";

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
    <div style={{ columnCount: 3 }}>
      <button onClick={onMatchClick}>Get Matches</button>
      <ol>{matches.map((matches, matchIndex) => renderMatches(matches, matchIndex))}</ol>
    </div>
  );
};

export { Matches };
