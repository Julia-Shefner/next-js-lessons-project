import { Note } from "@/lib/api";
import css from "./NoteItem.module.css";
import Link from "next/link";

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li className={css.item}>
      <Link className={css.title} href={`/notes/${item.id}`}>
        {item.title}
      </Link>
    </li>
  );
};
export default NoteItem;
