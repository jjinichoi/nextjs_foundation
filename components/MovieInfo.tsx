import { API_URL } from "../app/(home)/page";
import styles from "../app/styles/movie-info.module.css";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.original_title}
      />

      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>

        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>

        <p>{movie.overview}</p>

        <a href={movie.homepage} target="_blank">
          HomePage &rarr;
        </a>
      </div>
    </div>
  );
}
