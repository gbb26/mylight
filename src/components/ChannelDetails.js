import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {fetchAPI} from '../utils/fetchAPI'
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

function ChannelDetails() {
  const [channelDetail,setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  const { id } = useParams();
  useEffect(()=>{
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((data) =>{setChannelDetail(data?.items[0])})

    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) =>{setVideos(data?.items)})

  },[id])
  return (
    <Box minHeight="95vh" >
      <Box>
        <div
        style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(131,14,129,1) 43%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        < ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex">
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails
