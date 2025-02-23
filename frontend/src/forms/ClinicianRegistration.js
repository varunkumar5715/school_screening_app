

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Container } from '@mui/material';

const ClinicianRegistration = () => {
  const [formData, setFormData] = useState({
    rciId: '',
    name: '',
    phone: '',
    email: '',
    centerId:'',
  });

  const [errors, setErrors] = useState({
    rciId: false,
    name: false,
    phone: false,
    email: false,
    centerId:false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validation for specific fields
    if (name === 'name' && !/^[A-Za-z\s]*$/.test(value)) return;
    if (name === 'phone' && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    const newErrors = {
      rciId: formData.rciId.trim() === '',
      name: formData.name.trim() === '' || !/^[A-Za-z\s]+$/.test(formData.name),
      phone: formData.phone.trim() === '' || !/^\d{10}$/.test(formData.phone),
      email: formData.email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      centerId: formData.centerId.trim() === '',
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log('Submitted Data:', formData);
      alert('Clinician Registration successful!');
    }
  };

  return (
    <Container maxWidth="xs">
       <Box sx={{ mt: 1, p: 4, boxShadow: 3, borderRadius: 2 }}>
   
        <Typography variant="h6" align="center" gutterBottom sx={{ color: "#a5e526" }}>
          Clinician Registration
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="RCI ID"
                name="rciId"
                value={formData.rciId}
                onChange={handleInputChange}
                error={errors.rciId}
                helperText={errors.rciId ? 'RCI ID is required.' : ''}
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                helperText={errors.name ? 'Name must contain only alphabets.' : ''}
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
                helperText={errors.phone ? 'Must be 10 digits.' : ''}
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email ID"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                helperText={errors.email ? 'A valid email is required.' : ''}
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Center Id"
                name="centerId"
                value={formData.rciId}
                onChange={handleInputChange}
                error={errors.rciId}
                helperText={errors.rciId ? 'RCI ID is required.' : ''}
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
   
      </Box>
    </Container>
  );
};

export default ClinicianRegistration;

