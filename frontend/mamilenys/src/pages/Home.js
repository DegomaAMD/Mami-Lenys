import { Box, Button, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'

function Home() {
  return (
    <>
    <Box className="hero">
      <div className="hero-banner">
        <Typography>Gourmet Cuisine</Typography>
        <Typography>Mami Leny's</Typography>
        <Typography>Where we offer the finest bagoong, chili garlic, and chicken pastil made with the freshest ingredients. Elevate your meals with our premium, handcrafted gourmet products, perfect for every food lover.
        </Typography>

        <Link component={RouterLink} to={'/Shop'} className='hero-button' sx={{marginTop: '30px', textDecoration: 'none'}}>
        <Button >Order Now</Button>
        </Link>
      </div>

    </Box>
    </>
  )
}

export default Home