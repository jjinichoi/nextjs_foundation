import Link from "next/link";
import Movie from "../../components/Movie";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(API_URL).then((response) => response.json());
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <ul className={styles.container}>
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          id={movie.id}
        />
      ))}
    </ul>
  );
}
