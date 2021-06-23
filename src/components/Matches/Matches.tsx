import React, { FC, useState } from "react";
import { shuffle } from "../../helpers/shuffle";

interface Props {
  nameList: string[];
}

const Matches: FC<Props> = ({ nameList }) => {
  const [matches, setMatches] = useState<string[][]>([]);

  const getNewMatches = matchCount => {
    if (matches.length > 0 && matchCount > matches.length * matches.length) {
      alert(
        "Couldn't find any more matches. Find more people or come back later. I think we're all tired."
      );
      return [];
    }

    const set = shuffle(nameList.filter(name => name !== ""));
    const matchArray = [];
    set.forEach((name, i) => {
      if (i % 2 !== 0) {
        matchArray[matchArray.length - 1].push(name);
        matchArray[matchArray.length - 1].sort();
      } else {
        matchArray[matchArray.length] = [name];
      }
    });
    matchArray.sort();
    matchArray.sort((a, b) => {
      if (a.length > b.length) return 1;
      return 0;
    });

    // this needs to be more robust to compare each set in each array
    const exists = matches.find(match => {
      if (JSON.stringify(match) === JSON.stringify(matchArray)) return true;
      return false;
    });

    if (exists) {
      console.log("found a dupe");
      matchCount++;
      return getNewMatches(matchCount);
    }
    return matchArray;
  };

  const getNewMatch = () => {
    if (nameList.length > 2) {
      setMatches([...matches, getNewMatches(0)]);
    } else {
      alert("You need at least two people to get matches");
    }
  };

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

  return (
    <div>
      <button onClick={getNewMatch}>Match!</button>
      <ol>{matches.map((matches, matchIndex) => renderMatches(matches, matchIndex))}</ol>
    </div>
  );
};

export { Matches };
