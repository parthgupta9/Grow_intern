import { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

const FormPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && phone && email) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
      window.location.href = '/second';
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <Container>
      <Typography variant="h4">User Details</Typography>
      <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Phone" fullWidth margin="normal" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default FormPage;
