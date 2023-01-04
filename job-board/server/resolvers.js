import { Company, Job } from './db.js';

export const resolvers = {
    Query: {
        company: (_root, { id }) => Company.findById(id),
        job: (_root, { id }) => Job.findById(id),
        jobs: () => Job.findAll(),
    },

    Mutation: {
        createJob: (_root, { input }) => Job.create(input),
        deleteJob: (_root,{ id }) => Job.delete(id),
        updateJob: (_root, { input }) => Job.update(input),
    },
    
    Job: {
        company: (job) => Company.findById(job.companyId),
            // console.log('resolving company for Job', job)
            // return {
            //     id: 'Fake',
            //     name: 'Fake Inc.'
            // };
    },
    Company: {
        jobs: async (company) =>  Job.findAll( (job) => job.companyId === company.id),
    }
};