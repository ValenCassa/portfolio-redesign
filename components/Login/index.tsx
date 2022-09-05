import styles from "./styles/LoginPage.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginPage = () => {
  const { status } = useSession();

  const onClick = () => {
    if (status === "authenticated") {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.loginButton} onClick={onClick}>
        {status === "authenticated" ? "Log out" : "Log in w/ Github"}
      </button>
    </div>
  );
};

export default LoginPage;
