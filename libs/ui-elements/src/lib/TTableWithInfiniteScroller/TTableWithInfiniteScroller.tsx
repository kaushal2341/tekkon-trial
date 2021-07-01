import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ITTableNewInterfaceProps } from '../component-interfaces';
// import { Table } from 'react-bootstrap';

const TTableWithInfiniteScroller = (props: ITTableNewInterfaceProps) => {
  const {
    list,
    loadMoreRows,
    totalItems,
    endMessage,
    loader,
    hasNextPage,
    column,
  } = props;
  const loadNextPage = () => {
    console.log('======Next Page');
    loadMoreRows();
  };
  console.log('=====totalItems', hasNextPage);
  console.log('=========list', list);
  return (
    <div  >
      {/* <InfiniteScroll
        dataLength={totalItems}
        next={loadNextPage}
        hasMore={hasNextPage}
        loader={loader}
        endMessage={endMessage}
        height={200}
        // refreshFunction={loadNextPage}
        // pullDownToRefresh
        scrollableTarget="scrollTable"
        // onScroll={(e)=>{e.stopPropagation()}}
      > */}
        <table
          id="scrollTable"
          className="table table-sm table-dark table-striped table-hover"
        >
             <InfiniteScroll
        dataLength={totalItems}
        next={loadNextPage}
        hasMore={hasNextPage}
        loader={loader}
        endMessage={endMessage}
        // refreshFunction={loadNextPage}
        // pullDownToRefresh
        height={"200px"}
        scrollableTarget="scrollTable"
        // onScroll={(e)=>{e.stopPropagation()}}
      >
          <thead>
            <tr>
              {column.map((col, index) => (
                <th key={col.label}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                </tr>
              );
            })}
          </tbody>
          </InfiniteScroll>
        </table>
      {/* </InfiniteScroll> */}
    </div>
  );
};
export default TTableWithInfiniteScroller;
