import Link from "next/link";
import { getCategories } from "@/lib/api";
import css from "./NotesSidebar.module.css";

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Link className={css.link} href={`/notes/filter/all`}>
          All notes
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category.id} className={css.item}>
          <Link className={css.link} href={`/notes/filter/${category.id}`}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NotesSidebar;
