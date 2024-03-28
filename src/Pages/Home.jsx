import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Middle from '../components/Middle'
import Footer from '../components/Footer'
import JobCard from '../Jobcard/JobCard'
import { db } from '../Firebase/FirebaseConfig.js'
import { collection, query, getDocs, orderBy, where } from 'firebase/firestore'

const Home = () => {

  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false)
    const tempjobs = []
    const jobsref = collection(db, "jobs");
    const q = query(jobsref, orderBy('postedOn', "desc"));
    const result = await getDocs(q);
    result.forEach((job) => {
      tempjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempjobs)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true)
    const tempjobs = []
    const jobsref = collection(db, "jobs");
    const q = query(jobsref, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location), orderBy('postedOn', "desc"));
    const result = await getDocs(q);
    result.forEach((job) => {
      tempjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempjobs)
  }

  return (
    <>
      <Navbar />
      <Search fetchJobsCustom={fetchJobsCustom} />
      {
        customSearch && <button onClick={fetchJobs} className='bg-blue-500 px-10 py-2 rounded-md text-white m-10 item-right'>Clear Filters</button>
      }
      <div className="overflow-y-auto max-h-screen"> 
      {
  jobs.map(jobdata => (
    <JobCard key={jobdata.id} {...jobdata} />
  ))
}

      </div>
      <Middle />
      <Footer />
    </>
  );
};

export default Home;
