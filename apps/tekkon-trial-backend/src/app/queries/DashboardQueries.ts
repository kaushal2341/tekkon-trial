import {GraphQLID,GraphQLString,GraphQLInt,GraphQLObjectType,GraphQLList,GraphQLNonNull, GraphQLBoolean} from 'graphql';
import {getDashboardList} from '../services';

const DashType: GraphQLObjectType= new GraphQLObjectType({
    name: "DashboardData",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt }
    }),
  });
  const DashTypeList:GraphQLObjectType = new GraphQLObjectType({
    name:'Dashboard',
    fields:()=>({
    totalItems:{type:GraphQLInt},
    list:{type:new GraphQLList(DashType)},
    hasNextPage:{type:GraphQLBoolean}
    })
    })

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
        type: DashTypeList,
        resolve(parent, args) {
          const limit = args.limit||5;
          const offset= args.offset||1;
          return getDashboardList(limit,offset)
        },
      },
    },
});