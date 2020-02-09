import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ page, onPageChange, totalPages }) => {
  return (
    <ReactPaginate
      previousLabel={"<<"}
      nextLabel={">>"}
      breakLabel={"..."}
      initialPage={page}
      breakClassName={"break-me"}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={data => onPageChange(data.selected)}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      subContainerClassName={"pages pagination"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
