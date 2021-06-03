export type OPMLItem = {
  [index in string]: object;
};
export type OPMLParent = {
  title: string;
  children: (OPMLParent | OPMLItem)[];
};
export type OPMLListing = {
  "#type": string;
  folder: string;
  htmlurl: string;
  text: string;
  title: string;
  type: string;
  xmlurl: string;
};
