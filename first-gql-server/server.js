import { ApolloServer, gql } from 'apollo-server';

//  default hali bu şekilde böylece server da query nin karşılığı Query olduğunu belirtiyoruz
const typeDefs = gql`
    schema {
        query : Query
    }
    type Query {
        greeting : String,
        hello : String,
        count : Int
    }
`;

// typeDefs içerisindeki type lar interface görevi görür buradaki type ları çağırıp kullanmak için resolvers tanımlanmalıdır.
let countValue = 31;

const resolvers = {
    Query: {
        greeting: () => 'Hello World!',
        hello: () => 'Say my name',
        count: () => 31
    }

};

// resolvers içerisinde tanımlanan her alan typeDefs içerisinde olmalı ve aynı yazılmalı yoksa tanımaz/çözümleyemez
// typeDefs da her type altında attr lar ve dönüş tipleri tanımlanır, resolvers'lar bu dönüş tipine uygun func'lar ile sonuç döndürür.
// tüm bu yapıyı çalıştırmak için Apollo-server kullanılmaktadır.
// server'ı config etmek için yukarıda tanımlanan typeDefs ve resolvers'ı parametre olarak vermeliyiz.

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`Server running at ${url}`)

// console.log(typeDefss.definitions[0].fields);