import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import jobdata from '../Data/JobData'
import {differenceInMinutes} from 'date-fns'

const JobCard = (props) => {

  return (
    <>
      <Box className="border-2 border-zinc-500 transition duration-300 hover:shadow-xl border-l-6 border-blue-500">
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">{props.title}</Typography>
            <Typography
              className="rounded-lg border-2 border-blue-500 bg-blue-400 p-0 font-bold inline-block"
              variant="subtitle2"
            >
              {props.companyName}
            </Typography>
          </Grid>
          <Grid item container xs>
            {props.skills.map((skill) => (
              <Grid
                key={skill}
                item
                className="rounded-lg space-x-2 px-2 font-semibold p-0.75 bg-green-500 text-black"
              >
                {skill}
              </Grid>
            ))}
          </Grid>

          <Grid item container direction="column" xs alignItems="flex-end">
            <Grid item>
              <Typography variant="caption">
                {differenceInMinutes(Date.now(),props.postedOn)} | {props.type} | {props.location}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" className="cursor-pointer">Know More</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default JobCard;
