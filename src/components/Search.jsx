import React from 'react';
import { Box, Button, MenuItem, Select } from '@mui/material';

const Search = (props) => {
  return (
    <Box
    className='py-12'
      sx={{
        backgroundColor: '#fff',
        display: 'flex',
        boxShadow: '0px 1px 5px rgba(0,0,0,0.1)',
        borderRadius: '15px',
        '& > *': {
          flex: 1,
          height: '45px',
          margin: '8px',
        }
      }}
    >
      <Select className='py-4 mt-3 rounded-lg select-none' disableUnderline variant='outlined' defaultValue="Full Time">
        <MenuItem value="Full Time">Full Time</MenuItem>
        <MenuItem value="Part Time">Part Time</MenuItem>
        <MenuItem value="Internship">Internship</MenuItem>
      </Select>
      <Select className='py-4 mt-3 rounded-lg' disableUnderline variant='outlined' defaultValue="In-Office">
        <MenuItem value="In-Office">In-Office</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
      </Select>
      <Button variant='contained' className='rounded-lg m-3 flex'>Search</Button>
    </Box>
  );
};

export default Search;
