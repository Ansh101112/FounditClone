import React,{useState,useEffect} from 'react'
import { Grid } from '@material-ui/core'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Middle from '../components/Middle'
import Footer from '../components/Footer'
import JobCard from '../Jobcard/JobCard'
import { db } from '../Firebase/FirebaseConfig.js'
import jobdata from '../Data/JobData'
import {collection, query, getDocs, doc, orderBy, where} from 'firebase/firestore'

const Home = () => {

  const[jobs,setJob]=useState([]);
  const[customSearch,setCustomSearch]=useState(false);

  const fetchJobs = async()=>{
    setCustomSearch(false)
    const tempjobs = []
    const jobsref = query(collection(db,"jobs"));
    const q = query(jobsref, orderBy('postedOn',"desc"));
    const result = await getDocs(q);
    result.forEach((job)=>{
      tempjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJob(tempjobs)
  }

  const fetchJobsCustom = async(jobCriteria)=>{
    setCustomSearch(true)
    const tempjobs = []
    const jobsref = query(collection(db,"jobs"));
    const q = query(jobsref, where("type", "==",jobCriteria.type),where("title","==",jobCriteria.title),where("experience","==",jobCriteria.experience),where("location","==",jobCriteria.location),orderBy('postedOn',"desc"));
    const result = await getDocs(q);
    result.forEach((job)=>{
      tempjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJob(tempjobs)
  }


  useEffect(() => {
    fetchJobs()
  }, [])
  


  return (
    <>
      <Navbar />
      <Search fetchJobsCustom={fetchJobsCustom}/>
      {
        customSearch && <button onClick={fetchJobs} className='bg-blue-500 px-10 py-2 rounded-md text-white'>Clear Filters</button>
      }
      {
        jobs.map(jobdata=><JobCard key={jobdata.id} {...jobdata}></JobCard>)
      }
      
      <Middle />
      <Footer />
    </>
  );
};

export default Home;
