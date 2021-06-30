import {gql} from  "@apollo/client";
export const addBookQuery = gql`
{dashboard($limit:Number!,$offset:Number!){
    name,
    id
  }
}`