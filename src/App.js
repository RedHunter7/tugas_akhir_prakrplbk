import React, {useEffect, useState } from 'react'
import { Box, Flex } from 'rebass'
import PostCard from './components/post-card';


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        const fetchData = json
        const display = fetchData.map(elm => {
          return <PostCard id={elm.id} title={elm.title} body={elm.body} />
        })
        setData(display)
      })
    }, [])
    

  return (
    <Box>
      <Flex flexWrap='wrap' mt='50px' mx={-2} alignItems='center'>
       { data }
      </Flex>
    </Box>
  );
}

export default App;


