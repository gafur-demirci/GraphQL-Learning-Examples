import { Company, Job } from './db.js';

export const resolvers = {
    Query: {
        jobs: () => Job.findAll(),
    },
    Job: {
        company: (job) => Company.findById(job.companyId),
            // console.log('resolving company for Job', job)
            // return {
            //     id: 'Fake',
            //     name: 'Fake Inc.'
            // };
    },
};