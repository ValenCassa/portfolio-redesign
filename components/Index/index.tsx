import IndexButtons from "components/Miscellaneous/IndexButtons";
import TextIndex from "components/Miscellaneous/TextIndex";
import styles from "./styles/IndexPage.module.css";

const IndexPage = () => {
  return (
    <>
      <div className={styles.container}>
        <TextIndex delay={0.4} exit>
          Valentin Cassarino
        </TextIndex>
        <TextIndex delay={1.6} exit>
          Front End Developer
        </TextIndex>
        <IndexButtons />
      </div>
    </>
  );
};

export default IndexPage;
