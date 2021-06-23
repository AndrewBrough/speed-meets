import React, { FC, useState } from "react";
import { shuffle } from "../../helpers/shuffle";

interface Props {
  nameList: string[];
}

const Matches: FC<Props> = ({ nameList }) => {
  const [shuffledNames, setShuffledNames] = useState<string[]>([]);

  const getMatch1 = () => {
    if (nameList.length > 2) {
      setShuffledNames(shuffle(nameList));
    } else {
      alert("You need at least two people to get matches");
    }
  };

  const renderMatches = () => {
    if (!nameList) return null;
    const matchArray = [];
    shuffledNames
      .filter(name => name !== "")
      .forEach((name, i) => {
        if (i % 2 !== 0) {
          matchArray[matchArray.length - 1] += ` + ${name}`;
        } else {
          matchArray[matchArray.length] = name;
        }
      });
    return matchArray.map(names => <p>{names}</p>);
  };

  return (
    <div>
      <button onClick={getMatch1}>Match!</button>
      {renderMatches()}
    </div>
  );
};

export { Matches };
