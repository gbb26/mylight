import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Feed from './components/Feed';
import VideoDetails from './components/VideoDetails';
import ChannelDetails from './components/ChannelDetails';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#000000'}}>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Feed/>} />
        <Route exact path='/video/:id' element={<VideoDetails/>} />
        <Route exact path='/channel/:id' element={<ChannelDetails/>} />
        <Route exact path='/search/:searchTerm' element={<SearchFeed/>} />
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
