import React, { useEffect, useState } from "react";
import type { FC } from "react";

import { useFeedsFetcher, useTitleUpdate } from "./hooks";
import { useLocalFeed } from "./hooks/useLocalFeed";

import { Feeds } from "./scenes/Feeds/Feeds";

const EntryPoint: FC = () => {
  useTitleUpdate();
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
