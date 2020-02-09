import React, { useContext } from "react";
import { resolveValueByPath } from "../objectUtils";

const ShowContext = React.createContext({});

export const ShowProvider = ShowContext.Provider;

export const useShowContext = () => useContext(ShowContext);

export const useShowValue = source => {
  const object = useShowContext();
  return object && source && resolveValueByPath(object, source);
};

export default ShowContext;
