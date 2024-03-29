import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Middle from '../components/Middle';
import Footer from '../components/Footer';
import JobCard from '../Jobcard/JobCard';
import { db } from '../Firebase/FirebaseConfig.js';
import { collection, query, getDocs, orderBy, Timestamp } from 'firebase/firestore';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading spinner
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    try {
      setCustomSearch(false);
      setLoading(true); // Set loading to true when fetching starts
      const tempjobs = [];
      const jobsref = collection(db, "jobs");
      const q = query(jobsref, orderBy('postedOn', "desc"));
      const result = await getDocs(q);
      result.forEach((job) => {
        const jobData = job.data();
        let postedOn = null;
        if (jobData.postedOn && jobData.postedOn instanceof Timestamp) {
          postedOn = jobData.postedOn.toDate();
        }
        tempjobs.push({
          ...jobData,
          id: job.id,
          postedOn: postedOn
        });
      });
      console.log("Number of jobs fetched:", tempjobs.length);
      setJobs(tempjobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is done
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobsCustom = async (jobCriteria) => {
    try {
      setCustomSearch(true);
      setLoading(true); // Set loading to true when fetching starts
      const tempjobs = [];
      const jobsref = collection(db, "jobs");
      let q = query(jobsref, orderBy('postedOn', "desc"));
  
      // Apply filter criteria if any is selected
      if (jobCriteria.type || jobCriteria.title || jobCriteria.experience || jobCriteria.location) {
        q = query(jobsref,
          where("type", "==", jobCriteria.type || ""),
          where("title", "==", jobCriteria.title || ""),
          where("experience", "==", jobCriteria.experience || ""),
          where("location", "==", jobCriteria.location || ""),
          orderBy('postedOn', "desc")
        );
      } else {
        // If no filter criteria is selected, fetch all jobs
        q = query(jobsref, orderBy('postedOn', "desc"));
      }
  
      const result = await getDocs(q);
      result.forEach((job) => {
        const jobData = job.data();
        let postedOn = null;
        if (jobData.postedOn && jobData.postedOn instanceof Timestamp) {
          postedOn = jobData.postedOn.toDate();
        }
        tempjobs.push({
          ...jobData,
          id: job.id,
          postedOn: postedOn
        });
      });
      setJobs(tempjobs);
    } catch (error) {
      console.error("Error fetching custom jobs:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is done
    }
  };

  return (
    <>
      <Navbar />
      <Search fetchJobsCustom={fetchJobsCustom} />
{customSearch && (
  <button onClick={fetchJobs} className='bg-blue-500 px-4 py-1 rounded-md text-white mt-2 mr-2 ml-auto text-sm'>Clear Filters</button>
)}

      
      {/* Conditional rendering of loading spinner */}
      {loading ? (
        <div className="flex flex-col justify-center items-center h-56">
  <div className="loader ease-linear rounded-full border-8 border-t-8 border-zinc-800 h-14 w-14">
    <span className="absolute top-full left-1/2 transform -translate-x-1/2 text-center text-gray-700 font-semibold">Getting Your Jobs</span>
  </div>
</div>

      ) : (
        <div className="overflow-y-auto max-h-56">
          {jobs.length > 0 && (
            jobs.map(jobdata => (
              <JobCard key={jobdata.id} {...jobdata} />
            ))
          )}
        </div>
      )}

      <Middle />
      <Footer />
    </>
  );
};

export default Home;
