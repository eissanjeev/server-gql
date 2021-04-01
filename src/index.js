import { GraphQLServer } from 'graphql-yoga';

// Schema
const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employee: Boolean!
        gpa: Float
    }
`;

// Resolvers
const resolvers = {
    Query: {
        id() {
            return 'abc123';
        },
        name() {
            return 'Sanjeev Sahu';
        },
        age() {
            return 28;
        },
        employee() {
            return true;
        },
        gpa() {
            return null;
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