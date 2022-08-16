const movies = [{title: "Harry Potter", score: 10},
{title: "Titanic", score: 9.5},
{title: "Procurando Nemo", score: 8},
{title: "50 Tons de Cinza", score: 4}]

const goodMovies = movies.filter(function (movie){
    return movie.score > 8;
}).map(function (m){
    m.title})

console.log(goodMovies)