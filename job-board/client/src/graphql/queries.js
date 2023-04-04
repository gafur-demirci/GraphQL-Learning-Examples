import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
//import { request } from 'graphql-request';
// import { getAccessToken } from '../auth';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

export const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
    // Tüm isteklerin genel ayarları bu alanda belirlenebilir.
    // defaultOptions: {
    //     query: {
    //         fetchPolicy: 'network-only',
    //     },
    //     mutate: {
    //         fetchPolicy: 'network-only',
    //     },
    //     watchQuery: {
    //         fetchPolicy: 'network-only',
    //     }
    // }
});

const JOB_DETAIL_FRAGMENT = gql`
    fragment JobDetail on Job {
        id
        title
        description
        company {
            id
            name
        }
    }
`;

export const JOB_Query = gql`
    query getJobById($id: ID!){
        job(id: $id) {
            ...JobDetail
        }
    }
    ${JOB_DETAIL_FRAGMENT}
`;

export const JOBS_Query = gql`
query {
    jobs {
        id
        title
        company {
            id
            name
        }
    }
}
`;

export const COMPANY_Query = gql`
    query getCompanyById($id: ID!){
        company(id: $id) {
            id
            name
            description
            jobs {
                id
                title
            }
        }
    }
`;

export const CREATE_JOB_Mutation = gql`
    mutation CreateNewJob($input: CreateJobInput!) {
        job: createJob(input: $input){
            ...JobDetail
        }
    }
    ${JOB_DETAIL_FRAGMENT}
`;