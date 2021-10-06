import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, TextField, Typography } from '@mui/material';

const FormContainer = ({ config, formik }) => {
  const builder = (individualConfig, index) => {
    switch (individualConfig.type) {
      case 'text':
        return (
          <Grid item key={index}>
            <Grid container>
              <TextField
                type="text"
                label={individualConfig.label}
                name={individualConfig.field}
                style={{ ...individualConfig.style }}
                onChange={formik.handleChange}
                error={Object.prototype.hasOwnProperty.call(formik.errors, individualConfig.field)}
                helperText={formik.errors[individualConfig.field]}
              />
            </Grid>
          </Grid>
        );
      case 'number':
        return (
          <Grid item key={index}>
            <Grid container>
              <TextField
                type="number"
                label={individualConfig.label}
                name={individualConfig.field}
                style={{ ...individualConfig.style }}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        );
      case 'array':
        return (
          <FormContainer key={index} config={individualConfig.children || []} formik={formik} />
        );
      default:
        return (
          <Grid
            item
            key={index}
            sx={{
              '& .MuiTypography-root': { m: 1, marginLeft: 3 }
            }}
          >
            <Typography>Unsupported field</Typography>
          </Grid>
        );
    }
  };

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1 }
      }}
      noValidate
      autoComplete="off"
    >
      {config.map((c, index) => builder(c, index))}
    </Box>
  );
};

FormContainer.propTypes = {
  config: PropTypes.array.isRequired,
  formik: PropTypes.object.isRequired
};

export default FormContainer;
