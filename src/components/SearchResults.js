import { Link, useLocation } from 'react-router-dom'

const SearchResults = () => {
  const { state: data, query } = useLocation()

  return (
    <>
      {<h1>Search Results for: ${query}</h1>}
      <div className='search-results grid grid-cols-6 mx-[10rem]'>
        {data &&
          data.results.map((data) => (
            <div className='film-preview  border-orange-600' key={data.id}>
              <Link to={`/film/${data.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/original/${data.poster_path}`}
                  alt={`${data.original_title} Poster`}
                  className=''
                />
                <div className='film-info '>
                  {data.media_type === 'movie' ? (
                    <>
                      <h3>{data.title}</h3>
                      <p>{data.release_date.slice(0, 4)}</p>
                    </>
                  ) : (
                    <>
                      <h3>{data.name}</h3>
                      <p>{data.first_air_date}</p>
                    </>
                  )}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  )
}

export default SearchResults
