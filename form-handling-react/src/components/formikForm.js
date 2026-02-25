import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required!")
    .min(8, "Too Short")
    .matches(/A-Z/, "It need to contain A-Z")
    .matches(/0-9/, "Must contain number."),
});
const FormikForm = () => {
  return (
    <div className="h-screen  flex justify-center items-center ">
      <div className="shadow-lg p-8">
        <h1 className="text-center mb-4">My Form</h1>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={SignupSchema}
        >
          <Form className="">
            <div>
              <Field
                name="username"
                type="text"
                placeholder="username"
                className="border-2 block mb-2"
              />
              <ErrorMessage name="username" />
            </div>
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="border-2 block mb-2"
              />
              <ErrorMessage name="email" />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="border-2 block mb-2"
              />
              <ErrorMessage name="password" />
            </div>
            <div>
              <button
                type="submit"
                className="border-2 block"
                placeholder="deo"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormikForm;
