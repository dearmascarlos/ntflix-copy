import { useEffect, useState } from 'react'

const Gender = ({ id }) => {
  const baseURL = 'https://api.themoviedb.org/3'
  const API_KEY = 'b36d0e0e939c02f2df7cb44d16a5d12a'

  const [genres, setGenres] = useState()

  useEffect(() => {
    fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {genres?.map((genre, i) => (
        <span key={i} className='text-white'>
          {' '}
          {genre.name}{' '}
        </span>
      ))}
    </div>
  )
}

export default Gender
