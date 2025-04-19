import { Suspense } from "react";
import MovieInfo from "../../../../components/MovieInfo";
import MovieVideos from "../../../../components/MovieVideos";

const MoviesDetail = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      {/* Suspense가 데이터를 fetch하기 위해 자식 componenet를 await하는거고 fetch중에는 fallback에 있는 컴포넌트를 render한다.
        완료되면 자식컴포넌트의 실제 UI를 노출시킨다. */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieVideos id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie videos</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
};

export default MoviesDetail;
