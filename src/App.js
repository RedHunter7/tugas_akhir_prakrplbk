import React from 'react'
import { Box } from 'rebass'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, CreatePostCardPage } from './pages';
import { TopNav } from './components/top-navigation';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <TopNav/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/create-post-card' element={<CreatePostCardPage/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;


