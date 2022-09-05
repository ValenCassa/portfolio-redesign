import { Post, postSchema } from "utils/validationSchemas";
import styles from "./styles/CreatePost.module.css";
import { Formik } from "formik";
import Input from "components/Miscellaneous/Input";
import Spinner from "components/Miscellaneous/Spinner";
import { createPost, updatePost } from "services/posts";
import { useRouter } from "next/router";
import FormLayout, { Preview } from "components/Miscellaneous/FormLayout";

const initialValues = {
  title: "",
  content: "",
  imageURL: "",
  date: "",
};

const CreatePost = ({ defaultValues }: { defaultValues?: any | Post }) => {
  const { push } = useRouter();

  const initialVal = () => {
    if (defaultValues) {
      const { _id, id, ...rest } = defaultValues;
      return rest;
    }
    return initialValues;
  };
  return (
    <FormLayout type="post" edit={Boolean(defaultValues)}>
      <Formik
        initialValues={initialVal()}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          try {
            if (defaultValues) {
              await updatePost(values, defaultValues.id);
            } else {
              await createPost(values);
            }
            push("/admin/dashboard");
          } catch (e) {
            console.log(e);
          } finally {
            setSubmitting(false);
          }
        }}
        validationSchema={postSchema}
      >
        {({ isSubmitting, handleSubmit, values }) => (
          <>
            <div className={styles.formContainer}>
              <Input label="Title" name="title" />
              <Input label="Image URL" name="imageURL" />
              <Input label="Date" name="date" />
              <Input label="Content" name="content" type="textarea" />
              <button
                className={styles.submit}
                type="submit"
                disabled={isSubmitting}
                onClick={() => handleSubmit()}
              >
                {isSubmitting ? (
                  <Spinner />
                ) : defaultValues ? (
                  "Update"
                ) : (
                  "Create"
                )}
              </button>
            </div>
            <Preview type="post" data={values} />
          </>
        )}
      </Formik>
    </FormLayout>
  );
};

export default CreatePost;
