//Gerar uma lista de filmes com o tamanho que eu desejar
export function gettListMovies(size, movies) {
  let popularMovies = [];
  for (let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i]);
  }
  return popularMovies;
}
//Gerar um numero aleatorio com base no tamanho da lsita de filmes que eu passar
export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length);
}
