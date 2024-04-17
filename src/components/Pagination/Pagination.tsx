import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import styles from './Pagination.module.css';
import ChevronLeft from '../../assets/icons/chevron-left.svg?react';
import ChevronRight from '../../assets/icons/chevron-right.svg?react';

export const Pagination = ({
  pageCount,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 2,
  onPageChange,
  forcePage,
}: ReactPaginateProps) => {
  return (
    <ReactPaginate
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      forcePage={forcePage}
      onPageChange={onPageChange}
      renderOnZeroPageCount={null}
      pageClassName={styles['page-item']}
      pageLinkClassName={styles['page-link']}
      previousClassName={styles['page-item']}
      previousLinkClassName={styles['page-link']}
      nextClassName={styles['page-item']}
      nextLinkClassName={styles['page-link']}
      breakClassName={styles['page-item']}
      breakLinkClassName={styles['page-link']}
      containerClassName={styles['pagination']}
      activeClassName={styles['active']}
      disabledClassName={styles['disabled']}
      breakLabel="..."
      nextLabel={<ChevronRight />}
      previousLabel={<ChevronLeft />}
    />
  );
};
