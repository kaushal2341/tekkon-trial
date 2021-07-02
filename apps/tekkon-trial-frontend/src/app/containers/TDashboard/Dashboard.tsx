import React, { useState, useEffect } from 'react';
import { DashboardQueries } from '@tekkon-trial/query-services';
import {
  TTableWithInfiniteScroller,
  DashColumn,
} from '@tekkon-trial/ui-elements';

import { useQuery } from '@apollo/client';

const TDashboard = () => {
  const [list, setList] = useState([]);
  // const [previousList, setPreviousList] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pagination, setPagination] = useState({
    limit: 6,
    offset: 1,
  });
  let { loading, data, error, fetchMore } = useQuery(
    DashboardQueries.listDashboardQuery,
    {
      variables: {
        limit: pagination.limit,
        offset: pagination.offset,
      },
    }
  );

  let personListData = data?.dashboard || null;

  const onChangeScrollPosition = (e: any) => {
    // console.log('========event', e);
    // console.log(e.currentTarget);
    let position = 0;
    // let offsetHeight=0;
    let scrollHeight = 0;
    // let bounding=0;
    // let actualOffset=0
    if (e.currentTarget) {
      position = e.currentTarget?.clientHeight;
      scrollHeight = e.currentTarget?.scrollHeight;
      // offsetHeight=e.currentTarget?.scrollTop;
      // bounding= e.currentTarget?.getBoundingClientRect().top
      // actualOffset=e.currentTarget?.offsetHeight
    }
    const totalPosition: number = scrollHeight - position;

    setScrollPosition(totalPosition);
  };

  const onChangePagination = async () => {
    setPagination({ limit: pagination.limit, offset: pagination.offset + 1 });
  };

  const callApi = async () => {
    if (fetchMore) {
      const { data } = await fetchMore({
        variables: {
          limit: pagination.limit,
          offset: pagination.offset,
        },
      });

      const dashList: [] = data?.dashboard.list || [];
      setList((previousList) => [...previousList, ...dashList]);
      const body = document.getElementById('tableBody');
      if (body) {
        body.scrollTo(0, scrollPosition);
      }
    }
  };

  useEffect(() => {
    callApi();
  }, [pagination.offset]);

  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : error ? (
        <p>Something Error</p>
      ) : list?.length ? (
        <TTableWithInfiniteScroller
          column={DashColumn}
          hasNextPage={personListData.hasNextPage}
          list={list}
          loadMoreRows={onChangePagination}
          totalItems={personListData.totalItems}
          loader={<p>Loading...</p>}
          endMessage={<p>Nothing to load...</p>}
          onChangeScroll={onChangeScrollPosition}
        />
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
};
export default TDashboard;
