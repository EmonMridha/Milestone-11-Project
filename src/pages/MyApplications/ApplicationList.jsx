import { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromises }) => {
    const Applications = use(myApplicationsPromises)
    console.log(Applications);
    return (
        <div>
            <h3 className="text-3xl">jobs applied : {Applications.length}</h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Applications.map((application,index) => <JobApplicationRow key={application._id} index={index} application={application}></JobApplicationRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationList;