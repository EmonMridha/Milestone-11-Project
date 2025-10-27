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

            <ApplicationList myApplicationsPromises={myApplicationsPromises(user.email)}></ApplicationList>

        </div>
    );
};

export default MyApplications;