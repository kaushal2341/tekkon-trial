export const getDashboardList:Function =(items:Number)=>(
    [...Array(items).keys()].map(x => ({id:++x,name:`Harry${x}`,age:`${x+20}`}))
)