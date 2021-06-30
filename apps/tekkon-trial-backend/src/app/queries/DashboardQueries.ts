import {GraphQLID,GraphQLString,GraphQLInt,GraphQLObjectType,GraphQLList,GraphQLNonNull} from 'graphql';
import {getDashboardList} from '../services';
const DashType: GraphQLObjectType= new GraphQLObjectType({
    name: "Dashboard",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
    }),
  });


export const DashRootQueries:GraphQLObjectType = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
       dashboard: {
        args:{
            limit:{
                type:new GraphQLNonNull(GraphQLInt),
            },
            offset:{
                type:new GraphQLNonNull(GraphQLInt)
            }
        },
        type: new GraphQLList(DashType),
        resolve(parent, args) {
          const limit = args.limit||5;
          const offset= args.offset||1;
          return getDashboardList(limit,offset)
        },
      },
    },
});