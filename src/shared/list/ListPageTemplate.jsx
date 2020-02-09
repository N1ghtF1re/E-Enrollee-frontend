import React, { useEffect, useReducer, useState } from "react";
import Pagination from "./Pagination";
import Loader from "react-loader";
import ListPageLayout from "./ListPageLayout";
import { ListProvider } from "./ListContext";
import FilterProvider from "./FilterContext";
import {SORT_TYPE} from "./const";

const FILTER_ACTION = {
  CHANGE_PAGE: "CHANGE_PAGE",
  SET_SORT: "SET_SORT",
  SET_FILTER: "SET_FILTER"
};

const reducer = (state, action) => {

  switch (action.type) {
    case FILTER_ACTION.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case FILTER_ACTION.SET_SORT:
      return {
        ...state,
        sortBy: action.payload
      };
    case FILTER_ACTION.SET_FILTER:
      const newFilters =  [...state.filters].filter(
          filter => filter.value && filter.field !== action.payload.field
      );

      if (action.payload.value) {
        newFilters.push(action.payload)
      }

      return {
        ...state,
        filters: newFilters
      }
  }
};

const ListPageTemplate = ({
  children,
  entitiesPerPage = 5,
  getData,
  createButton
}) => {
  const [data, setData] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState("");

  const initState = {
    filters: [],
    sortBy: { field: "id", type: SORT_TYPE.ASC },
    page: 0,
    pageSize: entitiesPerPage
  };
  const [searchRequest, dispatch] = useReducer(reducer, initState);

  const filterContext = {
    setSort: sort => dispatch({ type: FILTER_ACTION.SET_SORT, payload: sort }),
    sort: searchRequest.sortBy,
    filters: searchRequest.filters,
    setFilter: filter => dispatch({type: FILTER_ACTION.SET_FILTER, payload: filter})
  };

  useEffect(() => {
    getData(searchRequest, setData, setError, setLoaded, setTotalPages);
  }, [getData, searchRequest]);

  const pagination = (
    <Pagination
      totalPages={totalPages}
      page={searchRequest.page}
      onPageChange={page =>
        dispatch({ type: FILTER_ACTION.CHANGE_PAGE, payload: page })
      }
    />
  );

  return (
    <Loader loaded={isLoaded}>
      <ListProvider value={data}>
        <FilterProvider value={filterContext}>
          <ListPageLayout pagination={pagination} createButton={createButton}>
            {children}
          </ListPageLayout>
        </FilterProvider>
      </ListProvider>
    </Loader>
  );
};

export default ListPageTemplate;
