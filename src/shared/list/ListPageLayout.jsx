import React from "react";

const ListPageLayout = ({ pagination, children, filters, createButton }) => {
  return (
    <>
      <div className='mb-3'>{createButton}</div>
      {filters}
      {children}
      {pagination}
    </>
  );
};

export default ListPageLayout;
