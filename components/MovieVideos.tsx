// MovieVideos.tsx
import { API_URL } from "../app/(home)/page";
import styles from "../app/styles/movie-videos.module.css";

async function getVideos(id: string) {
  // throw new Error("Error...");
  const response = await fetch(`${API_URL}/${id}/videos`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos?.slice(0, 10).map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
