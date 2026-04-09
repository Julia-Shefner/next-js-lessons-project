"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getSingleNote } from "@/lib/api";
import css from "./NoteDetails.client.module.css";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading..</p>;
  if (error || !note) return <p>Some error...</p>;

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.title}>{note.title}</h2>
        <button className={css.button}>Edit</button>
      </div>
      <p className={css.content}>{note.content}</p>
      <p className={css.date}>{formattedDate}</p>
    </div>
  );
};

export default NoteDetailsClient;
