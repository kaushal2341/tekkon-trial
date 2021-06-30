import React, { useState, useEffect } from 'react';
import { DashboardQueries } from '@tekkon-trial/query-services';
import {
  TTableWithInfiniteScroller,
  DashColumn,
} from '@tekkon-trial/ui-elements';

import { useLazyQuery } from '@apollo/client';

const TDashboard = (props:{}) => {
  const [pagination, setPagination] = useState({
    limit: 5,
    offset: 1,
  });
  const [doRequest, { loading, data,called,error }] = useLazyQuery(
    DashboardQueries.listDashboardQuery
  );


  useEffect(() => {
    doRequest({
        variables: {
            limit: pagination.limit,
            offset: pagination.offset,
        },
      });
  }, []);

  const onChangePagination = () => {
    setPagination({ ...pagination, offset: pagination.offset + 1 });
  };

  useEffect(() => {
    doRequest({
        variables: {
          limit: pagination.limit,
          offset: pagination.offset,
        },
      });
  }, [pagination.offset]);
  console.log('=====offset',pagination.offset);
  console.log('========isError', error);
  console.log('======List', data);
  let personListData = data?.dashboard||null;
  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : error ? (
        <p>Something Error</p>
      ) :personListData? (
        <TTableWithInfiniteScroller
          column={DashColumn}
          hasNextPage={personListData.hasNextPage}
          list={personListData.list}
          loadMoreRows={()=>onChangePagination()}
          totalItems={personListData.totalItems}
        />
        // <h1>hello</h1>
      ):  <p>Loading.....</p>}
    </div>
  );
};
export default TDashboard;
