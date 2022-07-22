import IndexButtons from "components/Miscellaneous/IndexButtons";
import TextIndex from "components/Miscellaneous/TextIndex";

const IndexPage = () => {
  return (
    <div style={{ color: "white" }}>
      <TextIndex exit>Valentin Cassarino</TextIndex>
      <TextIndex delay={1.4} exit>
        Front End Developer
      </TextIndex>
      <IndexButtons />
    </div>
  );
};

export default IndexPage;
