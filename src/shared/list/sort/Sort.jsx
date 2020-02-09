import React from "react";
import {useSort} from "../FilterContext";
import {SORT_TYPE} from "../const";

const Sort = ({source}) => {
    const { setSort, getSort } = useSort();
    const sort = getSort();

    const isCurrentAscSort = sort.field === source && sort.type === SORT_TYPE.ASC;
    const isCurrentDescSort =
        sort.field === source && sort.type === SORT_TYPE.DESC;

    return (
        <div className="d-inline-block">
            <button
                className={"sort-button" + (isCurrentAscSort ? " active" : "")}
                onClick={() => {
                    setSort({ field: source, type: SORT_TYPE.ASC });
                }}
            >
                ▲
            </button>
            <button
                className={"sort-button" + (isCurrentDescSort ? " active" : "")}
                onClick={() => {
                    setSort({ field: source, type: SORT_TYPE.DESC });
                }}
            >
                ▼
            </button>
        </div>
    );
};

export default Sort;