import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
//import { request } from 'graphql-request';
import { getAccessToken } from '../auth';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

const client = new ApolloClient({
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

const JOB_Query = gql`
    query getJobById($id: ID!){
        job(id: $id) {
            ...JobDetail
        }
    }
    ${JOB_DETAIL_FRAGMENT}
`;

export async function createJob(input) {
    const mutation = gql`
        mutation CreateNewJob($input: CreateJobInput!) {
            job: createJob(input: $input){
                ...JobDetail
            }
        }
        ${JOB_DETAIL_FRAGMENT}
    `;
    const variables = { input }
    const headers = { 'Authorization': 'Bearer ' + getAccessToken() };
    const context = { headers };
    const { data: { job } } = await client.mutate(
        {
            mutation,
            variables,
            context,
            update: (cache, { data: { job } }) => {
                cache.writeQuery({
                    query: JOB_Query,
                    variables: { id: job.id },
                    data: { job }
                });
            },
        });
    //const { job } = await request(GRAPHQL_URL, query, variables, headers);
    return job;
}

export async function getCompanyById(id) {
    const query = gql`
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
    const variables = { id };
    const { data: { company } } = await client.query({ query, variables });
    //const { company } = await request(GRAPHQL_URL, query, variables);
    return company;
}

export async function getJobById(id) {

    const variables = { id }
    const { data: { job } } = await client.query({
        query: JOB_Query,
        variables
    });
    //const { job } = await request(GRAPHQL_URL, query, variables);
    return job;
};

export async function getJobs() {
    const query = gql`
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
    // Sadece getJobs için fetchPolicy belirlenir.
    const { data: { jobs } } = await client.query({
        query,
        fetchPolicy: 'network-only',
    });
    //const { jobs } = await request(GRAPHQL_URL, query);
    return jobs;
};