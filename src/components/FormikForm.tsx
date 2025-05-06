import { ExtendedDataSourceProps } from "aws-cdk-lib/aws-appsync";
import { Formik, Form, FormikHelpers, FormikValues } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup"; // Make sure Yup is used for validation

interface IFormikProps<T> {
  initialObject: T;
  onsubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  children: ReactNode;
  validationSchema?: Yup.ObjectSchema<any>;
}

export function FormikForm<T extends FormikValues>(props: IFormikProps<T>) {
  const { initialObject, onsubmit, children, validationSchema } = props;

  return (
    <Formik<T> enableReinitialize validateOnMount
      initialValues={initialObject}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
    >
      {/* Formik provides context so we can use <Form> */}
      <Form>{children}</Form>
    </Formik>
  );
}
