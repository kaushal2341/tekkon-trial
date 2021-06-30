import {gql} from  "@apollo/client";
export const listDashboardQuery = gql`
{dashboard($limit:Number!,$offset:Number!){
    name,
    id
  }
}`