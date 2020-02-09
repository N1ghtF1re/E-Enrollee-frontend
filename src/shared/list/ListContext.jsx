import React, { useContext } from "react";
import { resolveValueByPath } from "../objectUtils";

const ListContext = React.createContext([]);

export const ListProvider = ListContext.Provider;

export const useListContext = () => useContext(ListContext);

export const useListValue = (source, index) => {
  const arr = useListContext();
  return arr && source && resolveValueByPath(arr[index], source);
};

export default ListContext;
