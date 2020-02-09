import React from "react";
import { useListValue } from "../ListContext";

const ButtonsTableColumn = ({ getButtons, index }) => {
  const id = useListValue("id", index);
  if (index === -1) {
    return <th style={{textAlign: 'center'}}>Actions</th>;
  }
  return (
    <td style={{textAlign: 'center'}}>
      {React.Children.map(getButtons(id), button => {
        return <div className="d-inline-block mr-1 ml-1">{button}</div>;
      })}
    </td>
  );
};

export default ButtonsTableColumn;
