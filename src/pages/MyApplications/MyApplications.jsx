import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationsPromises } from '../../api/applicationsApi';



 
const MyApplications = () => {

    const { user } = UseAuth() 

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList myApplicationsPromises={myApplicationsPromises(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;