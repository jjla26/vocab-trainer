import React from 'react'
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';


const Home = () => {
  return (
    <React.Fragment>
      <Grid container direction='row' justifyContent='center'>
        <Typography variant='h3'>Welcome to the Vocabulary Trainer</Typography>
      </Grid>
      <Box display='container' justifyContent='center' alignItems='center' sx={{ height: '50vh' }}>
        <Grid item xs={4} m={6}>
          <Button component={Link} to={'/practice'} variant="contained">Practice</Button>
        </Grid>
        <Grid item xs={4} m={6}>
          <Button component={Link} to={'/admin'} variant="contained">Admin</Button>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default Home