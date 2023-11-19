const API_KEY = '3334a2953dca1b3e7b0ffe39ae23d16a'

const requests = {
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}&language=es-ES`,
  fetchTrendingTv: `/trending/tv/day?api_key=${API_KEY}&language=es-ES`
}

export default requests
