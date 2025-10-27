import React, { use } from 'react';
import { Link } from 'react-router';

const JobLists = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise); // jobs added by the current user
    console.log(jobs);

    return (
        <div>
            <h2 className='text-3xl'>Jobs Created By you: {jobs.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>DeadLine</th>
                            <th>View Applicatiions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}

                        {
                            jobs.map((job,index) => <tr key={job._id} index={index}>
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.deadline}</td>
                                <td><Link className='btn' to={`/applications/${job._id}`}>View Applications</Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobLists;