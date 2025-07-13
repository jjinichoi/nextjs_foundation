import { Suspense } from "react";
import MovieInfo from "../../../../components/MovieInfo";
import MovieVideos from "../../../../components/MovieVideos";

export default async function MoviesDetail({
  params,
}: {
  params: { id: string };
}) {
  // params를 await해서 id를 꺼냅니다.
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie info</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
