import React, { useEffect, useState } from 'react'
import { Flex } from 'rebass'
import { SearchForm, PostCard } from '../components'

const HomePage = () => {
  const [data, setData] = useState([])

  const [searchResultList, setSearchResultList] = useState([])

  const submitHandler = (inputValue) => {
    const filterData = data.filter(data => {
      const regex = new RegExp(inputValue.toLowerCase(), 'i')
      return regex.test(data.title.toLowerCase()) === true
    })

    if (filterData.length > 0) {
      const searchResultData = filterData.map(elm => {
        return <PostCard id={elm.id} title={elm.title} body={elm.body} />
      });
      setSearchResultList(searchResultData)
    } else {
      //  emptying search result data
      setSearchResultList([])
    }
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        const fetchData = json
        setData(fetchData)

        const display = fetchData.map(elm => {
          return <PostCard id={elm.id} title={elm.title} body={elm.body} />
        })
        setSearchResultList(display)
      })
    }, [])

    return <>
        <SearchForm onSubmit={submitHandler} />
        <Flex flexWrap='wrap' mt='50px' mx={-2} alignItems='center'>
        { searchResultList }
        </Flex>
    </>
}

export { HomePage }