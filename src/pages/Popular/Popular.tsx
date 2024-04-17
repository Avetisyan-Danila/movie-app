import { Heading } from '../../components/Heading/Heading.tsx';
import { Pagination } from '../../components/Pagination/Pagination.tsx';
import { useEffect, useState } from 'react';
import { addNotification } from '../../helpers/notification.ts';

export const Popular = () => {
  const [list, setList] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(20);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    const fetchList = async () => {
      if (apiError) {
        setApiError('');
        setList([]);
        setPageCount(0);
        return;
      }

      const newPageCount = 20;
      setList([]);
      setPageCount(newPageCount);
    };

    fetchList();
  }, [pageOffset]);

  useEffect(() => {
    if (apiError) {
      addNotification(apiError, 'danger');
    }
  }, [apiError]);

  const handlePageChange = (event: { selected: number }) => {
    console.log(event);
    setPageOffset(event.selected);
  };

  return (
    <>
      <Heading>Популярные</Heading>

      {list && (
        <Pagination
          forcePage={pageOffset}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};
