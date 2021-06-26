import { useContext } from "react";

import type { MatchData } from "./MatchProvider";
import { MatchContext } from "./MatchProvider";

const useMatchData = (): MatchData => {
  const data: MatchData = useContext(MatchContext);
  return data;
};

export { useMatchData };
