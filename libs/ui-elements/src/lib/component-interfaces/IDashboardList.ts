export type Dashboard = {
    id:string,
    name:string,
    age:string
}
export type ListType ={
    list:[Dashboard],
    totalItems:number,
    hasNextPage:boolean,

}
