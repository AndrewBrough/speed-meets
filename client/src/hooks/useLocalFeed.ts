import { useEffect, useState } from "react";
import { opmlToJsonResult } from "opml-to-json";

import { useOPMLReader } from "./useOPMLReader";

import file from "../../demoData/frontend-rss-feeds.xml"; // if pulling from

export const useLocalFeed = (): opmlToJsonResult => {
  const [feeds, setFeeds] = useState<opmlToJsonResult>();

  useEffect(() => {
    useOPMLReader(file).then(res => setFeeds(res));
  }, []);

  return feeds;
};
