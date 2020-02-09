import React from "react";

const ListPageLayout = ({pagination, children, filters}) => {
  return (
    <>
      {filters}
      {children}
      {pagination}
    </>
  );
};

export default ListPageLayout;