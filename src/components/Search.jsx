import React,{useState} from 'react';

const Search = (props) => {

const[jobCriteria,setJobCriteria]=useState({
  title: "",
  location: "",
  type: "",
  experience: ""
})

const handleChange=(e)=>{
  setJobCriteria((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value
  }))
}

console.log(jobCriteria);

const search=async()=>{
  await props.fetchJobsCustom(jobCriteria);
}
  return (
    <>
    
  <div className='bg-gradient-to-r from-indigo-900 via-purple-600 to-indigo-900 flex p-14 gap-4 justify-center px-10'>
  <p className='font-bold overflow-hidden'>Start your <span className='text-white'>Job</span> finding</p>
    <select onChange={handleChange} name='type' value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md cursor-pointer'>
      <option value='' disabled hidden selected>Job Type</option>
      <option value='Full-Time'>Full Time</option>
      <option value='Part-Time'>Part Time</option>
      <option value='Internship'>Internship</option>
    </select>
    <select onChange={handleChange} name='location' value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md cursor-pointer'>
      <option value='' disabled hidden selected>Location</option>
      <option value='Remote'>Remote</option>
      <option value='IN-Office'>IN-Office</option>
      <option value='Hybrid'>Hybrid</option>
    </select>
    <select onChange={handleChange} name='experience' value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md cursor-pointer'>
      <option value='' disabled hidden selected>Experience</option>
      <option value='Fresher'>Fresher</option>
      <option value='Junior Level'>Junior Level</option>
      <option value='Mid Level'>Mid Level</option>
      <option value='Senior Level'>Senior Level</option>
    </select>
    <button onClick={search} className='w-64 bg-blue-600 text-white py-3 rounded-md'>Search</button>
  </div>
  <jobCard></jobCard>
   </>
  );
};

export default Search;
