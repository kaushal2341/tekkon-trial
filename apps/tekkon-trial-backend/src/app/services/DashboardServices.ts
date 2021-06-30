import {DASH_LIST} from '../constants'
export const getDashboardList:Function = (limit,offset) => {
    const pageIndex =limit*(offset-1);
    const sizeLimit = Number(limit* offset)
    return DASH_LIST.slice(pageIndex,sizeLimit)
}