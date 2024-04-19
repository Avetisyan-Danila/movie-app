import { useState, useCallback } from 'react';
import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from 'firebase/firestore';
import { db } from '../firebase';
import { addNotification } from '../helpers/notification.ts';

export const usePaginatedData = <T>(
  collectionName: string,
  orderByField: string,
  perPage: number,
) => {
  const [data, setData] = useState<T[]>([]);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadedAll, setIsLoadedAll] = useState(false);

  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);

    const collectionRef = collection(db, collectionName);
    const dataQuery = lastVisible
      ? query(
          collectionRef,
          limit(perPage),
          orderBy(orderByField, 'desc'),
          startAfter(lastVisible),
        )
      : query(collectionRef, limit(perPage), orderBy(orderByField, 'desc'));

    const countData = await getCountFromServer(collectionRef);
    if (countData.data().count <= perPage) {
      setIsLoadedAll(true);
    }

    try {
      const querySnapshot = await getDocs(dataQuery);

      if (querySnapshot.empty) {
        setIsLoadedAll(true);
      } else {
        const newData = querySnapshot.docs.map((doc) => doc.data()) as T[];
        setData((prevData) => [...prevData, ...newData]);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }
    } catch {
      addNotification('Ошибка при получении данных', 'danger');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, lastVisible, perPage, collectionName, orderByField]);

  return { data, fetchData, isLoading, isLoadedAll, lastVisible };
};
