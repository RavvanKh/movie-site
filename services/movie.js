const API_URL = 'https://api.themoviedb.org/3'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjAyMzIwODE0YzgyYzA1NWFhNDdkOTE5ODVmOGRjYyIsInN1YiI6IjY0YWM0YWUyZTI0YjkzMDExZDc0NjM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aBmn6q7zlmgYoAEx8Cf2pcWMuAQPbwNV4ukUlY-yBfs'
  }
}

export const fetchMovieAPI = async (pathname,query = '') =>{
    try{
      const response  = await fetch(`${API_URL}${pathname}?${query}`, options)
      return response.json()
    }
    catch (err){
      throw new Error(err)
    }
}

export const getSingleCategory = async genreId =>{
  return fetchMovieAPI("/discover/movie",`with_genres=${genreId}`)
}

export const getTopRatedMovies = async () =>{
  return fetchMovieAPI("/movie/top_rated","page=1")

}
export const getPopularMovies = async () =>{
  return fetchMovieAPI("/movie/popular","page=1")
}
export const getCategories = async () =>{
  return fetchMovieAPI("/genre/movie/list","page=1")
}
export const getMovie = async movieId =>{
  return fetchMovieAPI(`/movie/${movieId}`)
}