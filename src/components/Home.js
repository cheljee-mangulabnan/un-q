import Search from './Search'

const Home = () => {
  return (
    <div className='home '>
      <h1 className='font-bold text-[4rem] leading-[4rem] text-left mt-20 mx-[22rem] '>
        Create and manage your watchlists with un-q.
      </h1>
      <Search />
    </div>
  )
}

export default Home
