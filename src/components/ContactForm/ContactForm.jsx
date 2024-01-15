import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Must contain only letters')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required for entry'),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required for entry'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ handleSubmitForm }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.classForm}>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="text" name="number" id={numberFieldId} />
        <ErrorMessage name="number" component="div" className={css.error} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
