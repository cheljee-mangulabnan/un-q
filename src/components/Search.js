import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import SearchResults from './SearchResults'

const Search = () => {
  const [query, setQuery] = useState('')
  // Testing useFetch custom hook

  const navigate = useNavigate()
  const { data } = useFetch(query)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(data.results)
    navigate(`/search?q=${query}`)

    // Get query and pass it to function that handles your api requests
  }
  return (
    <>
      <form action='' onSubmit={onSubmit} className='flex mx-16 mt-20'>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type='search'
          placeholder='Enter keyword...'
          className='h-12 outline-none rounded-3xl mx-[12rem] px-5 flex-1 border-2'
        />
      </form>
      {data && <SearchResults data={data.results} />}
    </>
  )
}

export default Search
