import React, { Suspense, use } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import { useLoaderData } from 'react-router';

const Homel = () => {

    const jobs = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={'Loading hot Jobs '}>
                <HotJobs jobs={jobs}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Homel;