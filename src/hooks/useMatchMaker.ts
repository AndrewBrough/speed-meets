import { shuffle } from "../helpers/shuffle";

const useMatchMaker = (nameList: string[]) => {
  const reduceToPairs = (values: string[]) => {
    const set = [];
    values.forEach((value, i) => {
      if (i % 2 !== 0) {
        set[set.length - 1].push(value);
        set[set.length - 1].sort();
      } else {
        set.push([value]);
      }
    });
    return set;
  };

  const matchExists = (list: string[], matches: [string[]]) => {
    return matches.some(set => {
      return set.some(pair => {
        return list.some(newPair => {
          // console.log(pair, newPair);
          return JSON.stringify(pair) == JSON.stringify(newPair);
        });
      });
    });
  };

  const getUniqueMatch = matches => {
    let newList = shuffle(nameList);
    newList = reduceToPairs(newList);
    newList.sort();

    if (matchExists(newList, matches)) {
      return getUniqueMatch(matches);
    }

    return newList;
  };

  const doMatching = () => {
    const matches = [];
    try {
      while (true) {
        matches.push(getUniqueMatch(matches));
      }
    } catch (e) {
      return matches;
    }
  };

  const getMatches = () => {
    const matches = doMatching();
    return matches;
  };

  return { getMatches };
};

export { useMatchMaker };
