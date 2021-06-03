import React from "react";
import type { FC } from "react";

import { useFeedsFetcher, useSetSiteTitle } from "./hooks";

import { Feeds } from "./scenes/Feeds/Feeds";
import axios from "axios";

const EntryPoint: FC = () => {
  useSetSiteTitle();
  // const feeds = useFeedsFetcher();

  // if (!feeds) return null;

  // console.log(feeds);

  axios
    .get("https://northamerica-northeast1-sage-tribute-315703.cloudfunctions.net/function-2")
    .then(response => {
      console.log(response);
    })
    .catch(reason => console.log(reason));

  return null;

  // return (
  //   <main style={{ background: "lightgrey", padding: "1rem" }}>
  //     <h1>FED Feed</h1>
  //     <Feeds feeds={feeds} />
  //   </main>
  // );
};

export { EntryPoint };
