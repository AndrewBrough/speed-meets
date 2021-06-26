import React, { FC } from "react";

import { useStyles } from "./NamePair.styles";
import { InteractiveName } from "./InteractiveName";

const NamePair: FC<{ names: string[] }> = ({ names }) => {
  // replace all names in matches and nameList onNameChange
  const pair = names.map(name => <InteractiveName name={name} />);
  return (
    <p>
      {pair[0]} + {pair[1]}
    </p>
  );
};

export { NamePair };
