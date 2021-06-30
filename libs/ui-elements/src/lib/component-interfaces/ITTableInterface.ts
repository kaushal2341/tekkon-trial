import {Dashboard} from './IDashboardList';
export type ITableColumn={
 width:number,
 dataKey:string,
 label:string

}
export type ITTableInterfaceProps={
 hasNextPage:boolean,
 list:Array<Dashboard>,
 totalItems:number,
 column:Array<ITableColumn>,
 loadMoreRows:Function,
 headerHeight?:number,
 height?:number,
 rowHeight?:number
 
 }

