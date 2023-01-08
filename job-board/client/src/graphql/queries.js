import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
//import { request } from 'graphql-request';
import { getAccessToken } from '../auth';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
});

export async function createJob(input) {
    const mutation = gql`
        mutation CreateNewJob($input: CreateJobInput!) {
            job: createJob(input: $input) {
                id
                # title
                # description
                # company {
                #     id
                #     name
                # }
            }
        }
    `;
    const variables = { input }
    const headers = { 'Authorization': 'Bearer ' + getAccessToken() };
    const context = { headers };
    const { data: { job } } = await client.mutate({ mutation, variables, context });
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
    const query = gql`
        query getJobById($id: ID!){
            job(id: $id) {
                id
                title
                company {
                id
                name
                }
                description
            }
        }
    `;
    const variables = { id }
    const { data: { job } } = await client.query({ query, variables });
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
                name
                }
            }
        }
    `;
    const { data: { jobs } } = await client.query({ query });
    //const { jobs } = await request(GRAPHQL_URL, query);
    return jobs;
};