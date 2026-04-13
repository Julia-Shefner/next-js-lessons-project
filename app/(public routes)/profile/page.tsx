import Link from "next/link";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Profile</h1>
        <Link href="/profile/edit" className={styles.button}>
          Edit profile
        </Link>
      </div>

      <h2 className={styles.subtitle}>Name: User name</h2>
      <p className={styles.content}>
        Some description: Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Cumque non quis, vero consectetur eum at commodi facere error,
        laborum, rerum labore corrupti neque veritatis sed minima et nam. Autem,
        cumque.
      </p>
    </section>
  );
};

export default Profile;
