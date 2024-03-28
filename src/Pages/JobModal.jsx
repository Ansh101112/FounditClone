import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { db } from '../Firebase/FirebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';

const JobModal = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    type: '',
    experience: '',
    location: '',
    link: '',
    skills: [], // Changed from skill to skills
    company: '',
    postedOn: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, 'jobs'), jobDetails);
      console.log('Document written with ID: ', docRef.id);
      // Clear the form after submission
      setJobDetails({
        title: '',
        type: '',
        experience: '',
        location: '',
        link: '',
        skills: [], // Changed from skill to skills
        company: '',
        postedOn: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleSkillChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setJobDetails({
      ...jobDetails,
      skills: skills // Changed from skill to skills
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 flex items-center justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-300 to-yellow-500">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">Post Job Here</h2>
            <p className="text-gray-500 mb-6">Please fill out all the fields.</p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                {/* Job details form */}
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">                    
                    <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                    <div>
                      <label htmlFor="title">Job Title</label>
                      <input type="text" name="title" id="title" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobDetails.title} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="type">Job Type</label>
                      <input type="text" name="type" id="type" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobDetails.type} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="experience">Experience</label>
                      <input type="text" name="experience" id="experience" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobDetails.experience} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="location">Location</label>
                      <input type="text" name="location" id="location" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobDetails.location} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="link">Job Link</label>
                      <input type="text" name="link" id="link" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobDetails.link} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="company">Company</label>
                      <input type="text" name="company" id="company" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobDetails.company} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="skills">Skills (comma separated)</label>
                      <input type="text" name="skills" id="skills" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobDetails.skills.join(', ')} onChange={handleSkillChange} required />
                    </div>
                    {/* Remaining input fields */}
                    <div>
                      <label htmlFor="postedOn">Apply By</label>
                      <input type="date" name="postedOn" id="postedOn" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={jobDetails.postedOn} onChange={handleChange} required />
                    </div>
                    </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="text-right">
                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobModal;
