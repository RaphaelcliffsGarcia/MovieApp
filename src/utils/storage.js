import AsyncStorage from "@react-native-async-storage/async-storage";

// buscar os itens salvos

export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key);

  let moviesSave = JSON.parse(myMovies) || [];
  return moviesSave;
}

// salvar um novo filme

export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);

  // se tiver um filme salvo com esse mesmo id  / ou duplicado precisamos ignorar
  const hasMovie = moviesStored.some((item) => item.id === newMovie.id);

  if (hasMovie) {
    console.log("esse filme ja existe na lista");
    return;
  }

  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log("filme salvo com sucesso");
}

// deletar um filme expecifico

export async function deleteMovie(id) {
  let moviesStored = await getMoviesSave("@primereact"); // buscando filmes na lista

  let myMovies = moviesStored.filter((item) => {
    // tirando o que será deletado

    return item.id !== id;
  });

  await AsyncStorage.setItem("@primereact", JSON.stringify(myMovies)); // salvando a nova lista
  console.log("Filme excluido com sucesso");
  return myMovies; // retornando a nova lista
}

// filtrar algum filme, se ja tiver sido salvo

export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave("@primereact");
  const hasMovie = moviesStored.find((item) => item.id === movie.id);

  if (hasMovie) {
    return true;
  }

  return false;
}
