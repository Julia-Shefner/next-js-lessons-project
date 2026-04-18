import Image from "next/image";
import css from "./HomePage.module.css";

const Home = () => {
  return (
    <section className={css.section}>
      <div className={css.content}>
        <h1 className={css.title}>Welcome to Home</h1>
        <p className={css.subtitle}>
          Your thoughts, always at hand. Create, organize and find your notes in
          seconds.
        </p>
        <Image
          src="/notehub_hero.png"
          alt="NoteHub illustration"
          width={800}
          height={500}
          className={css.image}
          priority
        />
        <Image
          src="https://picsum.photos/seed/picsum/300/300"
          alt="test"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Home;
