import IndexButtons from "components/Miscellaneous/IndexButtons";
import Meta from "components/Miscellaneous/Meta";
import TextIndex from "components/Miscellaneous/TextIndex";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Homepage | Valentin Cassarino</title>
      </Head>
      <Meta
        title="Homepage | Valentin Cassarino"
        description="Go have a look at my portfolio!"
        image={"https://i.imgur.com/JQOu13Z.png"}
      />
      <div style={{ color: "white" }}>
        <TextIndex exit>Valentin Cassarino</TextIndex>
        <TextIndex delay={1.4} exit>
          Front End Developer
        </TextIndex>
        <IndexButtons />
      </div>
    </>
  );
};

export default IndexPage;
