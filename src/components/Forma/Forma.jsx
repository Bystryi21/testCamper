import { Formik, Form, Field } from "formik";
import css from "./Forma.module.css";

export default function Forma() {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm;
  };
  return (
    <div>
      <div className={css.wrapper}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <div>
              <label htmlFor="name"></label>
              <Field
                type="text"
                className={css.input}
                name="name"
                placeholder="Name*"
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <Field
                type="email"
                className={css.input}
                name="email"
                placeholder="Email*"
              />
            </div>
            <div>
              <label htmlFor="bookingDate"></label>
              <Field
                type="text"
                className={css.input}
                name="bookingDate"
                placeholder="Booking date*"
              />
            </div>
            <div>
              <label htmlFor="comment"></label>
              <Field
                as="textarea"
                className={css.textArea}
                name="comment"
                placeholder="Comment"
              />
            </div>
            <button type="submit" className={css.btn}>
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
