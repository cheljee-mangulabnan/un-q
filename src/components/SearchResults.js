import { Link } from 'react-router-dom'

const SearchResults = ({ data }) => {
  return (
    <>
      <h1>Search Results</h1>
      <div className='search-results'>
        {data.map((data) => (
          <div className='film-preview' key={data.id}>
            <Link to={`/film/${data.id}`}>
              <img
                src={`http://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt={`${data.original_title} Poster`}
              />
              <div className='film-info'>
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
