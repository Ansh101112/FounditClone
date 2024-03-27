import React,{useState,useEffect} from 'react'
import { Grid } from '@material-ui/core'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Middle from '../components/Middle'
import Footer from '../components/Footer'
import JobCard from '../Jobcard/JobCard'
import { db } from '../Firebase/FirebaseConfig.js'
import {collection, query, getDocs} from 'firebase/firestore'

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const req = await db.collection('jobs').orderBy('postedOn', 'desc').get();
    const jobData = req.docs.map((job) => job.data());
    console.log(jobData); // Optional: You can remove this line if you don't need to log the data
    setJobs(jobData); // Set the fetched job data to the state variable
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <Search />
      <Grid container justify='center'>
        <Grid item xs={11}>
          {jobs.map((job) => (
            <JobCard key={job.id} {...job}>{job}</JobCard>
          ))}
        </Grid>
      </Grid>
      <Middle />
      <Footer />
    </>
  );
};

export default Home;
