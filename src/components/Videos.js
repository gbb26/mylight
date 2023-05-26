import { Box, Stack } from '@mui/material';
import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos,direction}) => {
  if(!videos?.length) return "Loading...."
  return (
    <Stack direction={direction || "row"} flexWrap='wrap' justifyContent="flex-start" gap={2} >
      {
      videos.map((items,idx)=>{
          return (
            <Box key={idx} >
              { items.id.videoId &&  <VideoCard video={items} /> }
              { items.id.ChannelId && <ChannelCard channelDetail={items} /> }
            </Box>
          )
        })
      }
    </Stack>
  )
}

export default Videos
