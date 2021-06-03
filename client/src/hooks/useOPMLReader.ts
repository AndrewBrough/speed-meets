import { opmlToJSON } from "opml-to-json";

export const useOPMLReader = rawOpml => {
  const readFeeds = async () => {
    const feedJson = await opmlToJSON(rawOpml);
    return feedJson;
  };

  return readFeeds();
};
