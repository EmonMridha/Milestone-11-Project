import React, { use } from 'react';

const JobLists = ({jobsCreatedByPromise}) => {
    const jobs = use(jobsCreatedByPromise);
    
    return (
        <div>
            <h2 className='text-3xl'>Jobs Created By you: {jobs.length}</h2>        
        </div>
    );
};

export default JobLists;