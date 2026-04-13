// import Link from "next/link";
// import css from "./NotFound.module.css";

// const NotFound = () => {
//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>404 - Page not Found</h1>
//       <p className={css.content}>
//         Sorry, the page you&#39;re looking for doesn&#39;t exist.
//       </p>
//       <Link href={"/"} className={css.button}>
//         Go back home
//       </Link>
//     </div>
//   );
// };

// export default NotFound;

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import css from "./NotFound.module.css";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not Found</h1>
      <p className={css.content}>
        You will be redirected to the home page in a few seconds…
      </p>
    </div>
  );
};

export default NotFound;
