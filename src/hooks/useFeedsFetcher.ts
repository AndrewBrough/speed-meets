import axios from "axios";
import { opmlToJsonResult } from "opml-to-json";
import { useEffect, useState } from "react";

import { useOPMLReader } from "./useOPMLReader";

const BASE_FEEDS_URL =
  "https://raw.githubusercontent.com/impressivewebs/frontend-feeds/master/frontend-feeds.opml";

export const useFeedsFetcher = (url: string = BASE_FEEDS_URL): opmlToJsonResult => {
  const [feeds, setFeeds] = useState<opmlToJsonResult>();

  useEffect(() => {
    axios.get(url).then(response => {
      const opml = response?.request?.response;
      useOPMLReader(opml).then(res => setFeeds(res));
    });
  }, []);

  return feeds;
};
