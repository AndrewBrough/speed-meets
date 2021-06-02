import { useEffect, useState } from "react";
import { useOPMLReader } from "./useOPMLReader";

import { OPMLItem, OPMLParent } from "../types/OPML";

import feedsOPML from "../../frontend-feeds/frontend-feeds.xml";

export type FeedType = null | (OPMLParent | OPMLItem)[];
export const useLocalFeed = (): FeedType => {
  const [feeds, setFeeds] = useState<FeedType>();

  useEffect(() => {
    useOPMLReader(feedsOPML).then(res => setFeeds(res.children));
  }, []);

  return feeds;
};
