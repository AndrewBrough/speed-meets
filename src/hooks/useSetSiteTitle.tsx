import { format } from "date-fns";

const SITE_TITLE = "FEDFeed";
const useSetSiteTitle = () => {
  document.title = SITE_TITLE + " | " + format(new Date(), "MM/dd/yyyy");
};

export { useSetSiteTitle };
