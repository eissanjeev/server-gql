import { GraphQLServer } from 'graphql-yoga';

// Schema
const typeDefs = `
    type Query {
        hello: String
        name: String!
        location: String!
        bio: String!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my first query';
        },
        name() {
            return 'Sanjeev Sahu';
        },
        location() {
            return 'India';
        },
        bio() {
            return 'I am a Software Engineer';
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