import debounce from "lodash.debounce";
import { useRef } from "react";

const useDebounce = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  const ref = useRef(debounce(fn, delay));
  return ref.current;
};

export { useDebounce };
