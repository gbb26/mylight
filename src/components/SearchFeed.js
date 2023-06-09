import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'

function SearchFeed() {
  const [videos,setVideos] = useState(null)
  const {searchTerm} = useParams();
  useEffect(() => {
    setVideos(null)
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      })
    }, [searchTerm]);
  return (
    <Box p={4} sx={{overflowY: 'auto',height:'90vh',flex: 2 }} >
    <Typography
    variant='h4'
    fontWeight="bold"
    mb={2}
    sx={{color: 'white'}}
    >
      <span style={{color: '#f31503'}}  > {searchTerm}</span>videos
    </Typography>
    <Videos videos={videos}/>
  </Box>
  )
}

export default SearchFeed

