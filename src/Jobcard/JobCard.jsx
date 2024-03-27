import React from "react";
import dayjs from 'dayjs'

const JobCard = (props) => {
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff('2024-03-03','day')

  return (
    <>
      <div className="mb-4 mx-24">
        <div className="flex justify-between items-center px-2 py-4 bg-zinc-200 rounded-md border-black shadow-lg hover:border-blue-500 hover: translate-y-5">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-lg font-semibold">{props.title}-{props.company}</h1>
            <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
          </div>
          <div className="flex items-center gap-2">
              {props.skills.map((skill)=>
                <p className="text-grey-500 py-1 px-2 rounded-md border border-black">{skill}</p>
              )}
          </div>
          <div className="flex items-center gap-4">
              <p className="text-grey-500 ">Posted {diffInDays >1? `${diffInDays} days` : `${diffInDays} day`}ago</p>
              <a href={props.link}><button className="text-black-500 bg-green-400 border border-blue-500 px-10 py-2 rounded-md">Apply Now</button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
