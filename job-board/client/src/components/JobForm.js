// import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router';
// import { getAccessToken } from '../auth';
import { useCreateJob } from '../graphql/hooks';
// import { CREATE_JOB_Mutation, JOB_Query } from '../graphql/queries';

function JobForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // sayfa açıldığında tanımlanıyor submit edildiğinde kullanılıyor.(createJob)
  // const [mutate, {loading}] = useMutation(CREATE_JOB_Mutation);
  const { createJob, loading } = useCreateJob();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const job = await createJob(title,description);
    console.log('should post a new job:', { title, description });
    console.log('new job created:', job);
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div>
      <h1 className="title">
        New Job
      </h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">
              Title
            </label>
            <div className="control">
              <input className="input" type="text" value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">
              Description
            </label>
            <div className="control">
              <textarea className="textarea" rows={10} value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" disabled= {loading}
              onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;