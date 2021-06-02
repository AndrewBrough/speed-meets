import { useEffect, useState } from "react";
import { opmlToJsonResult } from "opml-to-json";

import { useOPMLReader } from "./useOPMLReader";

import feedsOPML from "../../frontend-feeds/frontend-feeds.xml";

export const useLocalFeed = (): opmlToJsonResult => {
  const [feeds, setFeeds] = useState<opmlToJsonResult>();

  useEffect(() => {
    useOPMLReader(feedsOPML).then(res => setFeeds(res));
  }, []);

  return feeds;
};
