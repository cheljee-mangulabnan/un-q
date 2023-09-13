import { useState } from 'react'

const Search = () => {
  const [query, setQuery] = useState('')

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  const onSubmit = (e) => {
    // Get query and pass it to function that handles your api requests
  }
  return (
    <>
      <form action='' className='flex mx-16 mt-20'>
        <input
          value={query}
          onChange={onChange}
          onSubmit={onSubmit}
          type='search'
          placeholder='Enter keyword...'
          className='h-12 outline-none rounded-3xl mx-[12rem] px-5 flex-1 border-2'
        />
      </form>
      <p>{query}</p>
    </>
  )
}

export default Search
