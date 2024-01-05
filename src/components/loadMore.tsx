'use client';

import { ReactElement, useState } from 'react';
import {fetchItems} from "@/actions/items";
import {atom, useAtom} from "jotai";

export const dataAtom = atom<{
  page: number;
  data: (ReactElement | undefined)[];
}>({
  page: 2,
  data: [],
})

export const LoadMore = ({
}) => {
  const [hasMore, setHasMore] = useState(true);

  const [data, setData] = useAtom(dataAtom);

  const loadMore = () => {
    fetchItems(data.page).then((res) => {
      setData((prev) => ({
        page: prev.page + 1,
        total: res.total,
        data: [...prev.data, ...res.data],
      }));

      setHasMore((data.page + 1) <= 10);
    });
  }

  return (
    <>
      {data.data}
      {hasMore && (
        <div className="py-8 mx-auto">
          <button onClick={loadMore} className="bg-blue-300 rounded px-2 py-1 hover:bg-blue-500 text-2xl">Load More</button>
        </div>
      )}
    </>
  );
};
