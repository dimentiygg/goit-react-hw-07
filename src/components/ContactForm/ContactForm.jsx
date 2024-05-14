import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.userName, number: values.number }));
    actions.resetForm();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  let validateSchema = Yup.object({
    userName: Yup.string().min(3).max(50).required("required"),
    number: Yup.string().min(3).max(50).required("required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          userName: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} name="userName" id={nameId} />
          <ErrorMessage
            className={css.error}
            name="userName"
            component="span"
          />
          <label className={css.label} htmlFor={numberId}>
            Number
          </label>
          <Field className={css.input} name="number" id={numberId} />
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css.button} type="Submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
