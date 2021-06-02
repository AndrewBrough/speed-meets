import React from "react";
import type { FC } from "react";

import { useFeedsFetcher, useSetSiteTitle } from "./hooks";

import { Feeds } from "./scenes/Feeds/Feeds";

const EntryPoint: FC = () => {
  useSetSiteTitle();
  const feeds = useFeedsFetcher();

  if (!feeds) return null;

  console.log(feeds);

  return (
    <main>
      <h1>Feeds!</h1>
      <Feeds feeds={feeds} />
    </main>
  );
};

export { EntryPoint };
