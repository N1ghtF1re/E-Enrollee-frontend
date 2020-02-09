import { Formik } from "formik";
import React from "react";
import { FormProvider } from "./FormContext";
import { Alert, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const FormLayout = ({
  validationSchema,
  title,
  onSubmit,
  initialValues,
  children,
  submitButtonName = "Submit",
  error,
  info
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {props => {
        const formikProps = props;
        const { handleSubmit, isSubmitting } = formikProps;
        return (
          <FormProvider value={formikProps}>
            {title && <h2>{title}</h2>}
            {error && <Alert variant="danger">{error}</Alert>}
            {info && <Alert variant="info">{info}</Alert>}

            <form onSubmit={handleSubmit}>
              {React.Children.map(children, child => {
                return <Col md={12}>{child}</Col>;
              })}

              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {submitButtonName}
              </Button>
            </form>
          </FormProvider>
        );
      }}
    </Formik>
  );
};

export default FormLayout;
