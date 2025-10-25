import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobCard = ({ job }) => {

    const { title, location, jobType, requirements, salaryRange, category, description, company, company_logo,_id } = job
    return (
        <div className="card bg-blue-950 w-96 shadow-sm p-10 border-2 ">
            <div className='flex gap-2'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-16'
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className="text-3xl">{company}</h3>
                    <p className='flex gap-1 items-center'><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {
                        requirements.map((skill, index) => <div
                            key={index}
                            className="badge badge-outline"
                        >{skill}</div>)
                    }
                    <div className='card-actions justify-end'>
                        <Link to={`/jobs/${_id}`}><button className='btn btn-primary'>Show Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;