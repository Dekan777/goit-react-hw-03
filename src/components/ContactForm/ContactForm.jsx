import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';

export const ContactForm = ({ handleSubmitForm }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmitForm}
    >
      <Form className={css.classForm}>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="name" id={nameFieldId} />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="text" name="number" id={numberFieldId} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
