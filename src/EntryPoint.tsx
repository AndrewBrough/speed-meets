import React from "react";
import type { FC } from "react";

import { NameList } from "./NameList";

const EntryPoint: FC = () => {
  return (
    <main>
      <NameList />
    </main>
  );
};

export { EntryPoint };
