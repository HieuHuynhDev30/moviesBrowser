import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export default function TextRating({rate, count}) {
  const value = rate;

  return (
    <Box
      sx={{
        width: 'min(100%, 500px)',
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'row wrap'
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        max={10}
        readOnly
        precision={0.1}
        emptyIcon={<StarIcon style={{ color: "gray" }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{rate}</Box>
      <Box className="text-nowrap" sx={{ ml: 2 }}>({count} votes)</Box>
    </Box>
  );
}