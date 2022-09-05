import ListContextProvider from "contexts/ListContext";
import useList from "hooks/useList";
import { Post } from "types/Post";
import { Project } from "types/Project";
import LayoutTable from "./LayoutTable";
import styles from "./styles/List.module.css";
import ArrowIcon from "public/svg/ArrowIcon.svg";
import { useRouter } from "next/router";
import RemoveIcon from "public/svg/RemoveIcon.svg";
import { useState } from "react";
import { removePost } from "services/posts";
import { removeProject } from "services/projects";
import usePosts from "hooks/usePosts";
import useProjects from "hooks/useProjects";

const ListItem = ({
  item,
  index,
  pathPrefix,
  remove,
  type,
}: {
  item: Project | Post;
  index: number;
  pathPrefix: string;
  remove?: boolean;
  type?: "post" | "project";
}) => {
  const { refetch: refetchPost } = usePosts();
  const { refetch: refetchProjects } = useProjects();
  const { selected, setSelected } = useList();
  const { push } = useRouter();
  const [removeHovered, setRemoveHovered] = useState<boolean>(false);

  const selectedStyle =
    selected || selected === 0
      ? selected === index
        ? undefined
        : styles.unselected
      : undefined;

  const onMouseEnter = () => {
    setSelected(index);
  };

  const onMouseLeave = () => {
    setSelected(null);
  };

  const onRemove = () => {
    if (type === "post") {
      removePost(item.id as string);
      refetchPost();
    } else {
      removeProject(item.id as string);
      refetchProjects();
    }
  };

  return (
    <tr
      className={styles.row}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() =>
        !removeHovered ? push(`${pathPrefix}/${item.id}`) : onRemove()
      }
    >
      <td className={styles.content}>
        <div className={styles.first}>
          <div className={styles.index}>{index < 10 ? `0${index}` : index}</div>
          <div className={styles.title}>
            <p className={styles.titleParagraph} id={selectedStyle}>
              {item.title}
              <ArrowIcon />
            </p>
          </div>
        </div>
        <div className={styles.date}>
          {!remove ? (
            <p className={styles.dateParagraph} id={selectedStyle}>
              {new Date(item.date).toLocaleDateString()}
            </p>
          ) : (
            <span
              className={styles.remove}
              id={selectedStyle}
              onMouseOver={() => setRemoveHovered(true)}
              onMouseOut={() => setRemoveHovered(false)}
            >
              <RemoveIcon />
            </span>
          )}
        </div>
      </td>
    </tr>
  );
};

const RightContent = ({
  data,
  pathPrefix,
  remove,
  type,
}: {
  data: Project[] | Post[];
  pathPrefix: string;
  remove?: boolean;
  type?: "post" | "project";
}) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      {data.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          index={index}
          pathPrefix={pathPrefix}
          remove={remove}
          type={type}
        />
      ))}
    </table>
  );
};

const List = ({
  data,
  pathPrefix,
  name,
  remove,
  type,
}: {
  data: Project[] | Post[];
  pathPrefix: string;
  name: string;
  remove?: boolean;
  type?: "post" | "project";
}) => {
  return (
    <div className={styles.container}>
      <ListContextProvider>
        <LayoutTable
          leftContent={name}
          rightContent={
            <div style={{ width: "100%" }}>
              <RightContent
                data={data}
                pathPrefix={pathPrefix}
                remove={remove}
                type={type}
              />
            </div>
          }
        />
      </ListContextProvider>
    </div>
  );
};

export default List;
