import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }
  return (
      <div>
        {pages.map((p) => (
          <button
            type="button"
            key={p + "page"}
            className={currentPage === p ? styles.selectedPage : ""}
            onClick={() => onPageChanged(p)}
          >
            {p}
          </button>
        ))}
      </div>
  );
};

export default Pagination;
