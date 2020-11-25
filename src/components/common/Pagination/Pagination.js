import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
}) => {
  const [countOfVisibleButtons, setCountOfVisibleButtons] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [maxLeftPage, setMaxLeftPage] = useState(1);
  const [maxRightPage, setMaxRightPage] = useState(1);
  // const [visibleButtons,setVisibleButtons] = useState([])

  useEffect(() => {
    setTotalPages(Math.ceil(totalUsersCount / pageSize));
    setMaxLeftPage(currentPage - Math.floor(countOfVisibleButtons / 2));
    setMaxRightPage(currentPage + Math.floor(countOfVisibleButtons / 2));
  }, [countOfVisibleButtons, currentPage, maxLeftPage, pageSize, totalUsersCount]);
  

  if (maxLeftPage < 1) {
    setMaxLeftPage(1);
    setMaxRightPage(countOfVisibleButtons);
  }

  if (maxRightPage > totalPages) {
    setMaxLeftPage(totalPages - (countOfVisibleButtons - 1));
    if (maxLeftPage < 1) {
      setMaxLeftPage(1);
    }
    setMaxRightPage(totalPages);
  }

  const visibleButtons = [];
  for (let page = maxLeftPage; page <= maxRightPage; page++) {
    visibleButtons.push(page);
  }
  return (
    <div className="paginationBtn">
      {totalPages && currentPage !== 1 && (
        <button
          type="button"
          key={currentPage + "firstPage"}
          className={""}
          onClick={() => onPageChanged(1)}
        >
          first
        </button>
      )}


      {totalPages &&
        visibleButtons.map((p) => (
          <button
            type="button"
            key={p + "page"}
            className={currentPage === p ? styles.selectedPage : ""}
            onClick={() => onPageChanged(p)}
          >
            {p}
          </button>
        ))}

      {totalPages && currentPage !== totalPages && (
        <button
          type="button"
          key={currentPage + "lastPage"}
          className={""}
          onClick={() => onPageChanged(totalPages)}
        >
          last
        </button>
      )}
    </div>
  );
};

export default Pagination;
