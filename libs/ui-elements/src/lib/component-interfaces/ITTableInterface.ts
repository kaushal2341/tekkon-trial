import React, { FunctionComponent } from 'react';
import {Dashboard} from './IDashboardList';
export type ITableColumn={
 label:string

}
// export type ITTableInterfaceProps={
//  hasNextPage:boolean,
//  list:Array<Dashboard>,
//  totalItems:number,
//  column:Array<ITableColumn>,
//  loadMoreRows:Function,
//  headerHeight?:number,
//  height?:number,
//  rowHeight?:number
 
//  }

 export type ITTableInterfaceProps={
    hasNextPage:boolean,
    list:Array<Dashboard>,
    totalItems:number,
    endMessage:React.ReactNode,
    loader:React.ReactNode,
    loadMoreRows:Function,
    column:Array<ITableColumn>,
    onChangeScroll:Function
}
