import React, { useState, useEffect } from 'react';
import { DashboardQueries } from '@tekkon-trial/query-services';
import {
  TTableWithInfiniteScroller,
  DashColumn,
  TError,
  TLoading,
} from '@tekkon-trial/ui-elements';

import { useQuery } from '@apollo/client';

const TDashboard = () => {
  const [list, setList] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [hasNextPage,setHasNextPage] = useState(false);
  // const [totalItems,setTotalItems] = useState(0)
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
    let position = 0;
    let scrollHeight = 0;
    if (e.currentTarget) {
      position = e.currentTarget?.clientHeight;
      scrollHeight = e.currentTarget?.scrollHeight;
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
      // const hasNextPage = data?.dashboard?.hasNextPage||false;
      // const totalItems = data?.dashboard?.totalItems||0;
      // setHasNextPage(hasNextPage)
      // setTotalItems(totalItems)
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
      <TLoading/>
      ) : error ? (
        <TError message={"Something Error"} />
      ) :list?.length ? (
        <TTableWithInfiniteScroller
          column={DashColumn}
          hasNextPage={personListData.hasNextPage}
          list={list}
          loadMoreRows={onChangePagination}
          totalItems={personListData.totalItems}
          loader={<TLoading/>}
          endMessage={<TError message={"Nothing To Load"}/>}
          onChangeScroll={onChangeScrollPosition}
        />
      ):<TLoading/>}
    </div>
  );
};
export default TDashboard;
