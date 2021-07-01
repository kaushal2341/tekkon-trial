export type Dashboard = {
    id:string,
    name:string,
    age:number
}
export type ListType ={
    list:[Dashboard],
    totalItems:number,
    hasNextPage:boolean,

}
