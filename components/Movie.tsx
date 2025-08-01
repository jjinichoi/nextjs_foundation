"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../app/styles/movie.module.css";

interface MovieProps {
  poster_path: string;
  title: string;
  id: number;
}

export default function Movie({ poster_path, title, id }: MovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
