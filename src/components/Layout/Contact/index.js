import React from 'react';
import { Container, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Container maxWidth="md" id="contact">
            <Typography variant="h4" component="div" sx={{ my: 2 }}>
                Contact
            </Typography>
            <Typography variant="body1" paragraph>
                This is the content of the Contact component.
            </Typography>
            <Typography variant="body1" paragraph>
                Contact
            </Typography>
        </Container>
    );
};

export default Contact;
