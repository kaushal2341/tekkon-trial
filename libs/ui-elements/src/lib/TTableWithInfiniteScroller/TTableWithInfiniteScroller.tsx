import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ITTableInterfaceProps } from '../component-interfaces';
// import { Table } from 'react-bootstrap';

const TTableWithInfiniteScroller = (props: ITTableInterfaceProps) => {
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
    <div>
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
          height={'200px'}
          scrollableTarget="scrollTable"
          // initialScrollY={10}
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
