import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, page, changePage}) => {
  const pages = usePagination(totalPages);

  return (
    <div className="page__wrapper">
      {pages.map((p) =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page__current' : 'page'}>
            {p}
           </span>
      )}
    </div>

  );
};

export default Pagination;