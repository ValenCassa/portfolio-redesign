import { useRouter } from "next/router";
import { Project } from "types/Project";
import styles from "./styles/CreateProject.module.css";
import FormLayout, { Preview } from "components/Miscellaneous/FormLayout";
import { Formik } from "formik";
import { projectSchema } from "utils/validationSchemas";
import { createProject, updateProject } from "services/projects";
import Input from "components/Miscellaneous/Input";
import Select from "components/Miscellaneous/Select";
import Spinner from "components/Miscellaneous/Spinner";
import FormGroup from "components/Miscellaneous/FormGroup";

const initialValues = {
  title: "",
  content: "",
  imageURL: "",
  date: "",
  stack: [],
  platform: [],
  repository: "",
  website: "",
};

const stackOptions = [
  { value: "React", label: "React" },
  { value: "Next.js", label: "Next.js" },
  { value: "Node.js", label: "Node.js" },
  { value: "Express", label: "Express" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "Sass", label: "Sass" },
  { value: "Bootstrap", label: "Bootstrap" },
  { value: "Tailwind", label: "Tailwind" },
  { value: "Material UI", label: "Material UI" },
  { value: "React Native", label: "React Native" },
  { value: "Redux", label: "Redux" },
  { value: "GraphQL", label: "GraphQL" },
  { value: "Apollo", label: "Apollo" },
  { value: "Firebase", label: "Firebase" },
  { value: "Git", label: "Git" },
  { value: "GitHub", label: "GitHub" },
  { value: "Heroku", label: "Heroku" },
  { value: "Netlify", label: "Netlify" },
  { value: "Vercel", label: "Vercel" },
  { value: "Docker", label: "Docker" },
];

const platformOptions = [
  { value: "Web", label: "Web" },
  { value: "Mobile", label: "Mobile" },
  { value: "Desktop", label: "Desktop" },
];

const CreateProjectPage = ({
  defaultValues,
}: {
  defaultValues?: any | Project;
}) => {
  const { push } = useRouter();

  const initialVal = () => {
    if (defaultValues) {
      const { _id, id, ...rest } = defaultValues;
      return rest;
    }
    return initialValues;
  };

  console.log(defaultValues);
  const stackDefaultValue = defaultValues ? defaultValues.stack : undefined;
  const defaultPlatform = defaultValues ? defaultValues.platform : undefined;

  return (
    <FormLayout type="project" edit={Boolean(defaultValues)}>
      <Formik
        initialValues={initialVal()}
        validationSchema={projectSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);

          try {
            if (defaultValues) {
              await updateProject(values, defaultValues.id);
            } else {
              await createProject(values);
            }
            push("/admin/dashboard");
          } catch (e) {
            console.log(e);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, handleSubmit, values }) => (
          <div className={styles.formContainer}>
            <Input label="Title" name="title" />
            <Input label="Image URL" name="imageURL" />
            <Input label="Date" name="date" />
            <FormGroup
              leftComponent={
                <Select
                  options={stackOptions}
                  label={"Stack"}
                  name={"stack"}
                  defaultValue={stackDefaultValue}
                  isMulti
                />
              }
              rightComponent={
                <Select
                  label={"Platform"}
                  name={"platform"}
                  defaultValue={defaultPlatform}
                  isMulti
                  options={platformOptions}
                />
              }
            />
            <Input label="Repository" name="repository" />
            <Input label="Website" name="website" />
            <Input label={"Content"} name="content" type="textarea" />
            <button
              onClick={() => handleSubmit()}
              type="submit"
              disabled={isSubmitting}
              className={styles.submit}
            >
              {isSubmitting ? <Spinner /> : defaultValues ? "Update" : "Create"}
            </button>

            <Preview type="project" data={values} />
          </div>
        )}
      </Formik>
    </FormLayout>
  );
};

export default CreateProjectPage;
