import { Link } from 'react-router-dom'
// import { PropTypes } from 'prop-types'
const OldSearchResults = ({ data }) => {
  // SearchResults.propTypes = {
  //   data: PropTypes.array,
  // }

  return (
    <div className='film-list'>
      {data.map((data) => (
        <div className='film-preview' key={data.id}>
          <Link to={`/movies/${data.id}`}>
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
  )
}

export default OldSearchResults
