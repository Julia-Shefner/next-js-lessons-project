import css from "./NotesLayout.module.css";

type NoteLayoutProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: NoteLayoutProps) => {
  return (
    <section className={css.layout}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.content}>{children}</div>
    </section>
  );
};

export default NotesLayout;
