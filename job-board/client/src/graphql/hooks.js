import { useQuery } from "@apollo/client";
import { COMPANY_Query, JOBS_Query, JOB_Query } from "./queries";

export function useCompany(id) {
	const {data, loading, error} = useQuery(COMPANY_Query, {
		variables: { id },
	});
	return {
		company: data?.company,
		loading,
		error: Boolean(error),
	}
}

export function useJob(id) {
	const {data, loading, error} = useQuery(JOB_Query, {
		variables: { id },
	});
	return {
		job: data?.job,
		loading,
		error: Boolean(error),
	};
};

export function useJobs() {
	const {data, loading, error} = useQuery(JOBS_Query, {
		fetchPolicy: 'network-only'
	});
	return {
		jobs: data?.jobs,
		loading,
		error: Boolean(error),
	};
};