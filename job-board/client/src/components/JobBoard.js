import JobList from './JobList';
// import { JOBS_Query } from '../graphql/queries';
// import { useEffect, useState } from 'react';
// import { useQuery } from '@apollo/client';
import { useJobs } from '../graphql/hooks';


function JobBoard() {
	const {jobs, loading, error} = useJobs();
	// useQuery(JOBS_Query, {
	// 	fetchPolicy: 'network-only'
	// });
	// const [jobs, setJobs] = useState([]);
	// const [error, setError] = useState(false);
	// useEffect(() => {
	// 	getJobs().then(setJobs)
	// 		.catch((error) => setError(true))
	// }, [])
 
	console.log('[JobBoards] Jobs:', {jobs, loading, error});
	if(loading) {
		return <p>Loading...</p>
	}
	if (error) {
		return <p>Sorry, something went wrong.</p>;
	}
	// const { jobs } = data;
	return (
		<div>
			<h1 className="title">
				Job Board
			</h1>
			<JobList jobs={jobs} />
		</div>
	);
}

export default JobBoard;