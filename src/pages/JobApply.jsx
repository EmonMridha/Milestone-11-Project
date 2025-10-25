import React from 'react';
import { Link, useParams } from 'react-router';
import UseAuth from '../hooks/UseAuth';
import { linearGradient } from 'motion/react-client';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams(); // Get dynamic route parameters from the URL
    const { user } = UseAuth()

    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resumes.value;

        const application = {
            id,
            applicant: user.email,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <h3 className="text-4xl">Apply for this job</h3>
            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">LlnkedIn link</label>
                    <input name='linkedIn' type="url" className="input" placeholder="linkedin profile link" />

                    <label className="label">Github Link</label>
                    <input type="url" name='github' className="input" placeholder="Github Link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resumes' className="input" placeholder="Resume Link" />

                    <input type="submit" className='btn ' value='Apply' />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;