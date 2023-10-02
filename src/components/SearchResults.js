import { Link, useLocation } from 'react-router-dom'

const SearchResults = () => {
  const {
    state: { data, query },
  } = useLocation()

  return (
    <>
      {
        <h1 className='ml-[6rem] py-5 text-lg font-barlow tracking-wide'>
          Search results for: "{query}"
        </h1>
      }
      <div className='search-results grid grid-cols-5 gap-x-3 gap-y-5 mx-[10rem] py-4'>
        {data &&
          data.results.map((data) => (
            <div
              className='film-preview rounded-lg overflow-hidden '
              key={data.id}
            >
              <Link to={`/film/${data.id}`}>
                <div className='poster h-[18rem] '>
                  <img
                    src={`http://image.tmdb.org/t/p/original${data.poster_path}`}
                    alt={`${data.original_title} Poster`}
                    className='rounded-b-sm object-cover w-full h-full'
                  />
                </div>
                <div className='film-info font-barlow pt-1'>
                  {data.media_type === 'movie' ? (
                    <>
                      <h3 className='font-bold truncate  max-w-xs'>
                        {data.title}
                      </h3>
                      <p className='font-normal'>
                        {data.release_date.slice(0, 4)}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className='font-bold '>{data.name}</h3>
                      <p className='font-normal'>
                        {data.first_air_date.slice(0, 4)}
                      </p>
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
