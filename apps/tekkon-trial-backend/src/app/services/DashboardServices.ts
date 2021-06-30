import {DASH_LIST} from '../constants'
export const getDashboardList:Function = (limit,offset) => {
    const pageIndex =limit*(offset-1);
    const sizeLimit = Number(limit* offset)
    const dashboard= DASH_LIST.slice(pageIndex,sizeLimit)
    const hasNextPage= sizeLimit<100?true:false
    return ({dashboardList:dashboard,totalItems:DASH_LIST.length,hasNextPage})
}