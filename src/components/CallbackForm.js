import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/CallbackForm.css";

function CallbackForm(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "must be less than 15 character")
        .min(3, "must be more than 3 character")
        .required("name is required"),
      email: Yup.string().email("Invalid email").required("email is required"),
      phone: Yup.string()
        .matches(/[0-9]{10}/, "invalid phone")
        .required("phone number required"),
    }),

    onSubmit: (values, onSubmitProps) => {
      try {
        console.log(
          "🚀 ~ file: CallbackForm.js ~ line 10 ~ CallbackForm ~ values",
          JSON.stringify(values)
        );
      } catch (error) {
        console.log(error);
      } finally {
        onSubmitProps.setSubmitting(false);
      }
    },
  });

  return (
    <div id="callbackForm-container">
      <form onSubmit={formik.handleSubmit} className="form-container">
        <h1>Request Callback</h1>
        <label className="form-label" htmlFor="name">
          name
        </label>
        <input
          className="form-input"
          placeholder="Enter Name"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}

        <label className="form-label" htmlFor="email">
          email
        </label>
        <input
          className="form-input"
          placeholder="Enter email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label className="form-label" htmlFor="phone">
          phone
        </label>
        <input
          className="form-input"
          placeholder="Enter phone"
          id="phone"
          name="phone"
          type="tel"
          pattern="[0-9]{10}"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}

        <button
          className="form-button"
          type="submit"
          disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default CallbackForm;
