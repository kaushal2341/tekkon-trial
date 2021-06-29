import {GraphQLID,GraphQLString,GraphQLInt,GraphQLObjectType,GraphQLList} from 'graphql';
import {getDashboardList} from '../services';
const DashType: GraphQLObjectType= new GraphQLObjectType({
    name: "Dashboard",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
    }),
  });


export const DashRootQueries = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
       dashboard: {
        type: new GraphQLList(DashType),
        resolve(parent, args) {
          return getDashboardList()
        },
      },
    },
});