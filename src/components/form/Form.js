import React from 'react';
// import * as yup from 'yup';
import { useFormik } from 'formik';
//
import { Grid, Button } from '@mui/material';
import FormContainer from './FormContainer';
import response from './apiResponse';
import { getYupSchemaFromMetaData } from './dynamicValidation';
//

const Form = () => {
  const signupSchema = getYupSchemaFromMetaData(response, [], []);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: signupSchema
  });

  // console.log(formik, response);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormContainer config={response} formik={formik} />
      <Grid
        item
        sx={{
          '& .MuiButton-root': { m: 1 }
        }}
      >
        <Button type="submit" variant="outlined" disabled={!formik.isValid}>
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
