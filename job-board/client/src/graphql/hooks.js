import { useQuery } from "@apollo/client";
import { JOBS_Query } from "./queries";

export function useJobs() {
	const {data, loading, error} = useQuery(JOBS_Query, {
		fetchPolicy: 'network-only'
	});
	return {
		jobs: data?.jobs,
		loading,
		error: Boolean(error),
	};
}