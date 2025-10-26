import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobs }) => {

    const AllJobs = jobs

    return (
        <div>
            <h2 className='text-4xl text-center'>Hot Jobs of the Day</h2>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    AllJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;