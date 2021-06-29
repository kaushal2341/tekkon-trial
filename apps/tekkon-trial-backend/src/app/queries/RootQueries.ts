import {GraphQLSchema} from 'graphql'
import {DashRootQueries} from './DashboardQueries'



export const schema = new GraphQLSchema({
    query: DashRootQueries
})