import {useShowValue} from "../ShowContext";
import {getLabel} from "../../labelUtils";
import React from "react";

const TextField = ({ source, value, label }) => {
  const contextValue = useShowValue(source);
  const displayedValue = value || contextValue;
  const displayedLabel = getLabel(label, source);

  return (
    <>
      <dt className="col-sm-3">{displayedLabel}</dt>
      <dd className="col-sm-9">{displayedValue}</dd>
    </>
  );
};

export default TextField;