import { GraphQLServer } from 'graphql-yoga';

// Schema
const typeDefs = `
    type Query {
        me: User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`;

// Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '12222',
                name: 'Sanjeev Sahu',
                email: 'sanjeev@dummy.com',
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('server is up and running!!');
});