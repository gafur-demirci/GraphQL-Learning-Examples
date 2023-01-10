// import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useJob } from '../graphql/hooks';
// import { getJobById } from '../graphql/queries';


function JobDetail() {
  // const [job, setJob] = useState(null);
  const { jobId } = useParams();
  const { job, loading } = useJob(jobId);
  // useEffect(() => {
  //   getJobById(jobId).then(setJob);
  // }, [jobId]);

  console.log('[JobDeatil] job: ' ,job);
  if(loading){
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="title">
        {job.title}
      </h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>
          {job.company.name}
        </Link>
      </h2>
      <div className="box">
        {job.description}
      </div>
    </div>
  );
}

export default JobDetail;
