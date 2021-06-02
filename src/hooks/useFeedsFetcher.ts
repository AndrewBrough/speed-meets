import axios from "axios";

const FEEDS_URL =
  "https://raw.githubusercontent.com/impressivewebs/frontend-feeds/master/frontend-feeds.opml";

export const useFeedsFetcher = () => {
  axios.get(FEEDS_URL).then(response => {
    console.log(response);
  });
};
