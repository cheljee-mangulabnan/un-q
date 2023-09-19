import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Series from './components/Series'
import Lists from './components/Lists'
import SearchResults from './components/SearchResults'

const App = () => {
  return (
    <>
      <div className='app bg-cream h-screen font-anonymous-pro '>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/movies' element={<Movies />} />
            <Route exact path='/series' element={<Series />} />
            <Route exact path='/lists' element={<Lists />} />
            <Route path='/search' element={<SearchResults />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
