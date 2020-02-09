import React, { useContext } from "react";

const FilterContext = React.createContext([]);

export const FilterProvider = FilterContext.Provider;

export const useFilterContext = () => useContext(FilterContext);

export const useSort = () => {
    const context = useFilterContext();
    return {
        getSort: () => context.sort,
        setSort: (sort) => context.setSort(sort)
    };
};

export const useFilter = () => {
    const context = useFilterContext();
    return {
        getFilter: (field) => {
            const filter = context.filters.filter(filter => filter.field === field)[0];
            return filter && filter.value;
        },
        setFilter: (filter) => context.setFilter(filter)
    }
};

export default FilterProvider;
