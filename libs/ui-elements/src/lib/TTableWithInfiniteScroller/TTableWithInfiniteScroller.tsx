import React from 'react';
import 'react-virtualized/style.css';
import { Column, Table, AutoSizer, InfiniteLoader } from 'react-virtualized';
import { ITTableInterfaceProps } from '../component-interfaces';

const TTableWithInfiniteScroller = (props: ITTableInterfaceProps) => {
  const {
    list,
    loadMoreRows,
    totalItems,
    column,
    headerHeight,
    height,
    rowHeight,
  } = props;
  const loadNextPage = async () => {
    await loadMoreRows();
  };

  return (
    <div className="container">
      <InfiniteLoader
        isRowLoaded={({ index }) => !!list[index]}
        loadMoreRows={loadNextPage}
        rowCount={totalItems}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ width }) => (
              <Table
                ref={registerChild}
                onRowsRendered={onRowsRendered}
                rowClassName="table-row"
                headerHeight={headerHeight || 40}
                width={width}
                height={height || 300}
                rowHeight={rowHeight || 40}
                rowCount={list.length}
                rowGetter={({ index }) => list[index]}
              >
                {column.map((col) => (
                  <Column
                    label={col.label}
                    dataKey={col.dataKey}
                    width={col.width}
                  />
                ))}
              </Table>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
};
export default TTableWithInfiniteScroller;
