import axios from "axios";
import { opmlToJsonResult } from "opml-to-json";
import { useEffect, useState } from "react";

import { useOPMLReader } from "./useOPMLReader";

const FEEDS_URL =
  "https://raw.githubusercontent.com/impressivewebs/frontend-feeds/master/frontend-feeds.opml";

export const useFeedsFetcher = (): opmlToJsonResult => {
  const [feeds, setFeeds] = useState<opmlToJsonResult>();

  useEffect(() => {
    axios.get(FEEDS_URL).then(response => {
      const opml = response?.request?.response;
      useOPMLReader(opml).then(res => setFeeds(res));
    });
  }, []);

  return feeds;
};
