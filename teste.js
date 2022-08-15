const movies = [
    { title: "Harry Potter", score: 10 },
    { title: "Nothing Hill", score: 9 },
    { title: "Percy Jackson", score: 5 },
    { title: "Bambi", score: 7 }
]

const goodMovies = movies.filter((movie) => (
    movie.score > 8));

console.log(goodMovies)

const greatMovies = function bestMovies(movie) {
    return movie.filter(function filteringMovies(m) {
       return m.score > 8;
    })
}
console.log(greatMovies(movies))
