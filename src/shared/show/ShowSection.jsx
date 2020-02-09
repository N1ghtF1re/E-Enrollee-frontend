import React from "react";

const ShowSection = ({ children, title }) => {
  return (
    <>
      <h4 className="m-y-2 mb-4">{title}</h4>
      <div className="row mt-4 mb-4 pb-3">{children}</div>
    </>
  );
};

export default ShowSection;
