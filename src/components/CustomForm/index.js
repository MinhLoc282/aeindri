import React from 'react';
import PropTypes from 'prop-types';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './index.module.css';

function CustomForm({ status, message, onValidated }) {
  const validate = useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required')
        .email('Invalid email address'),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-unused-expressions
      values.email && values.email.indexOf('@') > -1 && onValidated({
        EMAIL: values.email,
      });
    },
  });

  return (
    <form onSubmit={validate.handleSubmit} className="mess">
      <div className="mess-text">
        DON&apos;T MISS THE NEXT COLLECTION
      </div>

      <input
        placeholder="Email"
        className="mess-input"
        name="email"
        onChange={validate.handleChange}
        onBlur={validate.handleBlur}
        value={validate.values.email}
        autoCapitalize="off"
        autoCorrect="off"
      />

      {validate.touched.email && validate.errors.email
        ? <div className={styles.error}>{validate.errors.email}</div>
        : null}

      {status === 'sending' && (
      <div className={styles.sending}>
        sending...
      </div>
      )}
      {status === 'error' && (
      <div
        className={styles.error}
        dangerouslySetInnerHTML={{ __html: message }}
      />
      )}
      {status === 'success' && (
      <div
        className={styles.success}
        dangerouslySetInnerHTML={{ __html: message }}
      />
      )}

      <input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="mess-btn" />
    </form>
  );
}

CustomForm.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func.isRequired,
};

CustomForm.defaultProps = {
  status: '',
  message: '',
};

export default CustomForm;
