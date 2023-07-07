import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';

const UserForm = () => {
    const [businessName, setBusinessName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ghanaCard, setGhanaCard] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [tinNumber, setTinNumber] = useState('');
    const [website, setWebsite] = useState('');
    

    const handleBusinessNameChange = (event) => {
        setBusinessName(event.target.value);
    };
    
    const handleBusinessTypeChange = (event) => {
        setBusinessType(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleGhanaCardChange = (event) => {
        setGhanaCard(event.target.value);
    };

    const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
    };

    const handleTinNumberChange = (event) => {
    setTinNumber(event.target.value);
    };

    const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
    <Container maxWidth="sm">
        <h2>Sign Up Process (1/3)</h2>
        <form onSubmit={handleSubmit}>
            <TextField
                label="Business Name"
                value={businessName}
                onChange={handleBusinessNameChange}
                required
                fullWidth
                margin="normal"
                />
                
            <FormControl required fullWidth margin="normal">
                <InputLabel>Type of Business</InputLabel>
                <Select value={businessType} onChange={handleBusinessTypeChange}>
                    <MenuItem value="Agriculture">Agriculture</MenuItem>
                    <MenuItem value="Automobile">Automobile</MenuItem>
                    <MenuItem value="Healthcare">Banking & Finance</MenuItem>
                    <MenuItem value="Healthcare">Commerce/Trading</MenuItem>
                    <MenuItem value="Healthcare">Construction</MenuItem>
                    <MenuItem value="Healthcare">Education</MenuItem>
                    <MenuItem value="Healthcare">Entertainment</MenuItem>
                    <MenuItem value="Healthcare">Estate/Housing</MenuItem>
                    <MenuItem value="Healthcare">Finance</MenuItem>
                    <MenuItem value="Healthcare">Food Industry</MenuItem>
                    <MenuItem value="Healthcare">Health Care</MenuItem>
                    <MenuItem value="Healthcare">Hospitality</MenuItem>
                    <MenuItem value="Healthcare">Insurance</MenuItem>
                    <MenuItem value="Healthcare">Manufacturing</MenuItem>
                    <MenuItem value="Healthcare">Media</MenuItem>
                    <MenuItem value="Healthcare">Mining/Quarry</MenuItem>
                    <MenuItem value="Healthcare">Oil & Gas</MenuItem>
                    <MenuItem value="Healthcare">Refinery of Minerals</MenuItem>
                    <MenuItem value="Healthcare">Sand Winning</MenuItem>
                    <MenuItem value="Healthcare">Security Industry</MenuItem>
                    <MenuItem value="Healthcare">Securities/Brokers</MenuItem>
                    <MenuItem value="Healthcare">Shipping & Port</MenuItem>
                    <MenuItem value="Healthcare">Technology</MenuItem>
                    <MenuItem value="Healthcare">Telecom/ICT</MenuItem>
                    <MenuItem value="Travel">Travel</MenuItem>
                    <MenuItem value="Healthcare">Transport/Aerospace</MenuItem>                      
                    <MenuItem value="Healthcare">Utilities</MenuItem>       
                    <MenuItem value="Healthcare">Other</MenuItem>
                </Select>
            </FormControl>
                <TextField
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    fullWidth
                    margin="normal"
                />    
                <TextField
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    fullWidth
                    margin="normal"
                />
                
                <TextField
                    label="Ghana Card"
                    value={ghanaCard}
                    onChange={handleGhanaCardChange}
                    required
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Registration No."
                    value={registrationNumber}
                    onChange={handleRegistrationNumberChange}
                    fullWidth   
                    margin="normal"
                />

                <TextField
                    label="Tin No."
                    value={tinNumber}
                    onChange={handleTinNumberChange}
                    fullWidth       
                    margin="normal"
                />
                
                <TextField
                    label="Website"
                    value={website}
                    onChange={handleWebsiteChange}
                    fullWidth
                    margin="normal"
                />

                <Button type="submit" variant="contained" color="primary" fullWidth size="large" margin="">
                    Submit
                </Button>
        </form>
    </Container>
  );
};

export default UserForm;
