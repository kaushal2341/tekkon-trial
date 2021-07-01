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
  const loadNextPage =  () => {
    console.log("======Next Page");
     loadMoreRows();
  };
  console.log('=====totalItems', hasNextPage);
  console.log('=========list', list);
  return (
    <div>
    <InfiniteScroll
      dataLength={list.length}
      next={loadNextPage}
      hasMore={hasNextPage}
      loader={loader}
      endMessage={endMessage}
      initialScrollY={20}
      // refreshFunction={loadNextPage}
      // pullDownToRefresh
    
      height="20"
    >
      <table className="table table-sm table-dark table-striped table-hover">
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
      </table>
    </InfiniteScroll>
    </div>
  );
};
export default TTableWithInfiniteScroller;
