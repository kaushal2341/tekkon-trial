import React, { useState, useEffect } from 'react';
import { DashboardQueries } from '@tekkon-trial/query-services';
import {
  TTableWithInfiniteScroller,
  DashColumn,
} from '@tekkon-trial/ui-elements';

import { useLazyQuery } from '@apollo/client';

const TDashboard = (props:{}) => {
  const [pagination, setPagination] = useState({
    limit: 20,
    offset: 1,
  });

  // const [list, setList] = useState([]);

  const [doRequest, { loading, data,called,error,fetchMore}] = useLazyQuery(
    DashboardQueries.listDashboardQuery
  );

  let personListData = data?.dashboard||null;

  useEffect(() => {
    doRequest({
        variables: {
            limit: pagination.limit,
            offset: pagination.offset,
        },
      });
      // setList(data?.dashboard.list||[])
  }, []);

  const onChangePagination = () => {
    if(fetchMore){
    fetchMore({
      variables: {
        limit: pagination.limit,
        offset: pagination.offset+1,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        return Object.assign({}, previousResult, {
    
            ...previousResult.dashboard,
            dashboard: {...previousResult.dashboard, ...fetchMoreResult.dashboard}
          
        });
      }
    });
   }
    setPagination({...pagination,offset:pagination.offset+1})
  };

  console.log('=====offset',pagination.offset);
  console.log('========isError', error);
  console.log('======List', data);

  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : error ? (
        <p>Something Error</p>
      ) :personListData?.list?.length? (
        <TTableWithInfiniteScroller
          column={DashColumn}
          hasNextPage={personListData.hasNextPage}
          list={personListData.list}
          loadMoreRows={onChangePagination}
          totalItems={personListData.totalItems}
          loader={<p>Loading...</p>}
          endMessage={<p>Nothing to load...</p>}
        />
       
      ):  <p>Loading.....</p>}
    </div>
  );
};
export default TDashboard;
