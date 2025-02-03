import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { EmployeeFormContainer, Title, InputsContainer } from "./styles";
import { LoginFormValues } from "./types";

function EmployeeForm() {
  const validationSchema = Yup.object().shape({

    name: Yup.string()
      .required("Field name is required")
      .max(50, "Max 50 symbols")
      .min(5, "Min 5 symbols")
      .typeError("Name must be string"),

    age: Yup.number()
      .required("Field age is required")
      .max(80, "Max 80 symbols")
      .min(18, "Min 18 symbols")
      .typeError("Age must be number"),

    job: Yup.string()
      .max(30, "Max 30 symbols")
      .typeError("Job must be string"),
  });

  const formik = useFormik({

    initialValues: {
      name: "",
      age: "",
      job: "",
    } as LoginFormValues,

    validationSchema,
    validateOnChange: false,
    
    onSubmit: (values: LoginFormValues) => {
      console.table(values);
    },
  });

  return (

    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Title>Employee form</Title>
      <InputsContainer>
        <Input
          name="name"
          label="Full Name*"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your full name"
          error={formik.errors.name}
        />
        <Input
          name="age"
          label="Age*"
          value={formik.values.age}
          onChange={formik.handleChange}
          placeholder="Enter your age"
          error={formik.errors.age}
        />
        <Input
          name="job"
          label="Job Title"
          value={formik.values.job}
          onChange={formik.handleChange}
          placeholder="Enter your job"
          error={formik.errors.job}
        />
      </InputsContainer>
      <Button type="submit" name="Create" />
    </EmployeeFormContainer>
  );
}
export default EmployeeForm;
