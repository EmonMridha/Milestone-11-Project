import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {

    const { user } = UseAuth();

    const handleAddAJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())

        //Process Salary Range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency } // keeping min, max, and currency in a object

        // Process Requirements
        const requirementsString = newJob.requirements; // Getting only requirements from form data
        const requirementsDirty = requirementsString.split(',') // Putting the requirements data in an array
        const requirementsClean = requirementsDirty.map(req => req.trim()); // Removing the extra space in each element of array
        newJob.requirements = requirementsClean

        // Process Responsibilities

        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim()) // keeping responsibilities data in an array then removing the extra space
        newJob.status = 'active'

        // sending job data to the database
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your job has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='flex justify-center'>
            <div>
                <h2 className='text-center text-3xl mt-10'>Please add a job</h2>
                <form onSubmit={handleAddAJob} className='mb-20'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Basic Info</legend>

                        <label className="label">Job Title</label>
                        <input type="text" name='title' className="input" placeholder="Job title" />

                        <label className="label">Company: </label>
                        <input type="text" name='company' className="input" placeholder="my-awesome-page" />

                        <label className="label">Location</label>
                        <input type="text" name='location' className="input" placeholder="Company Location" />

                        <label className="label">Company Logo </label>
                        <input type="url" name='company_logo' className="input" placeholder="company logo URL" />
                    </fieldset>
                    {/* Job Type */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Basic Info</legend>
                    </fieldset>

                    {/* Job Type */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Type</legend>
                        <div className="filter">
                            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                            <input className="btn" type="radio" name="jobType" aria-label="On-Site" value='On-Site' />
                            <input className="btn" type="radio" name="jobType" aria-label="Remote" value='Remote' />
                            <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value='Hybrid' />
                        </div>
                    </fieldset>

                    {/* Job category */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Category</legend>
                        <select defaultValue="Job Category" className="select">
                            <option disabled={true}>Job Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                        </select>
                    </fieldset>

                    {/* Application Deadline */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Application Deadline</legend>
                        <input type="date" name='deadline' className="input" />
                    </fieldset>

                    {/* Salary Range */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Salary Range</legend>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div>
                                <label className="label">Minimum Salary</label>
                                <input type="text" name='min' className="input" placeholder="Minimum Salary" />
                            </div>

                            <div>
                                <label className="label">Maximum Salary</label>
                                <input type="text" name='max' className="input" placeholder="maximum Salary" />
                            </div>

                            <div>
                                <label className="label">Currency</label>
                                <select defaultValue="Select a Currency" className="select" name='currency'>
                                    <option disabled={true}>Select a Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>EU</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
                    {/* Job Description */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Description</legend>
                        <textarea className="textarea textarea-ghost" placeholder="Job Description..."></textarea>

                    </fieldset>
                    {/* Job Requirements */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Requirements</legend>
                        <textarea name='requirements' className="textarea textarea-ghost" placeholder="Job Requirements (separate by comma)"></textarea>
                    </fieldset>

                    {/* Job Responsibilities */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Responsibilities</legend>
                        <textarea name='responsibilities' className="textarea textarea-ghost" placeholder="Job Responsibilities (separated by comma)"></textarea>

                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">HR Related Info</legend>

                        <label className="label">HR Name</label>
                        <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                        <label className="label">HR Email: </label>
                        <input type="email" name='hr_email' defaultValue={user.email} readOnly className="input" placeholder="HR Email" />
                    </fieldset>
                    <input type="submit" className='btn' value="Add Job" />
                </form>
            </div>
        </div>
    );
};

export default AddJob;