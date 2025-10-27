import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/JobsAPI';

const MyPostedJobs = () => {

    const { user } = UseAuth();
    return (
        <div>
            <h2>My Posted Jobs: </h2>
            <Suspense>
                <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;