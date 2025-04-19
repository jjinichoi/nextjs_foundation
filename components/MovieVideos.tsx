// MovieVideos.tsx
import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  // throw new Error("Error...");
  const response = await fetch(`${API_URL}/${id}/videos`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const movie = await getVideos(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
