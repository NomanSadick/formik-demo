import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Noman",
  email: "",
  channel: "",
 
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({ 
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email'),
  channel: Yup.string().required('Channel')
})

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const OldYoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
    
  });
  console.log("Form values", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-conrol">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name} </div> : null}
        </div>
        <div className="form-conrol">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email} </div> : null}
        </div>
        <div className="form-conrol">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
        </div>
        {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel} </div> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldYoutubeForm;
