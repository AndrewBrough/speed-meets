import { format } from "date-fns";

const useTitleUpdate = () => {
  document.title += " " + format(new Date(), "MM/dd/yyyy");
};

export { useTitleUpdate };
