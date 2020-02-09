import React from "react";
import { Alert } from "react-bootstrap";

const ShowPageLayout = ({ children, error, buttons }) => {
  return (
    <>
      {React.Children.map(buttons, button => {
        return <div className="pr-3 d-inline-block">{button}</div>;
      })}

      {error && <Alert variant="danger">{error}</Alert>}

      <div className="mt-4 mb-4 pb-3">{children}</div>
    </>
  );
};

export default ShowPageLayout;
