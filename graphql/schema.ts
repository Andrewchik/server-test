import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';
import { deleteBook, getBooksGraphQL } from '../controllers/bookController';

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve: () => {
        return getBooksGraphQL();
      },
    },
  },
});

// const RootMutation = new GraphQLObjectType({
//   name: 'RootMutation',
//   fields: {
//     deleteBook: {
//       type: GraphQLString,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLString) },
//       },
//       resolve: (_, args) => {
//         return deleteBook(args.id);
//       },
//     },
//   },
// });

const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: RootMutation,
});

export default schema;
