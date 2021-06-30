import {gql} from  "@apollo/client";
export const listDashboardQuery = gql`
query dashboard($limit:Int!,$offset:Int!){
    dashboard(limit:$limit,offset:$offset){
      totalItems,
      hasNextPage,
      list{
        name,
        age,
        id
      }
    }
  }
`