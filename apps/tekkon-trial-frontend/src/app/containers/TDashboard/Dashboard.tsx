import React, { useState, useEffect } from 'react';
import { DashboardQueries } from '@tekkon-trial/query-services';
import {
  TTableWithInfiniteScroller,
  DashColumn,
} from '@tekkon-trial/ui-elements';

import { useQuery } from '@apollo/client';

// class TDashboard extends PureComponent{
//   state={
//     isLoading:false,
//     error:'',
//     list:[],
//     hasNextPage:true,
//     totalItems:0
//   }
//   onChangePagination =async () => {

//   }
//   componentDidMount(){
//    console.log("======this.props",this.props)
//   }
//   render(){
//     return(
//       <div>
//             {/* {loading ? (
//               <p>Loading.....</p>
//             ) : error ? (
//               <p>Something Error</p>
//             ) :list?.length? (
//               <TTableWithInfiniteScroller
//                 column={DashColumn}
//                 hasNextPage={personListData.hasNextPage}
//                 list={list}
//                 loadMoreRows={onChangePagination}
//                 totalItems={personListData.totalItems}
//                 loader={<p>Loading...</p>}
//                 endMessage={<p>Nothing to load...</p>}
//               />

//             ):  <p>Loading.....</p>} */}
//             Hello
//           </div>
//     )
//   }
// }
const TDashboard = () => {
 

  const [list, setList] = useState([]);
  const [previousList, setPreviousList] = useState([]);
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
      }
      // onCompleted:(data)=>{
      //   setList(data?.dashboard.list||list);
      //   return data;
      //   // setPreviousList(data?.dashboard.list||[])
      // }
    }
  );
  

  let personListData = data?.dashboard || null;

  useEffect(()=>{

  })

  const onChangePagination = async () => {
      setPagination({ limit:pagination.limit, offset: pagination.offset + 1 });
    
  };

  const callApi = async()=>{
    if (fetchMore) {
     const {data}= await fetchMore({
        variables: {
          limit: pagination.limit,
          offset: pagination.offset,
        }
      });
      // setPagination({ limit:pagination.limit, offset: pagination.offset + 1 });
      const dashList:[]= data?.dashboard.list || [];
      setList([...list,...dashList])
      setPreviousList([...previousList,...dashList]);
      
    }
  }
   
  useEffect(()=>{
   callApi()
  },[pagination.offset])

  console.log('=====offset', pagination.offset);
  console.log('========isError', error);
  console.log('======List', list);

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
        />
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
};
export default TDashboard;
