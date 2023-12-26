import React from 'react';
import './about.scss';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md" id="about">
            <Typography variant="h4" component="div" sx={{ my: 2 }}>
                About
            </Typography>
            <Typography variant="body1" paragraph>
                This is the content of the About component.
            </Typography>
            <Typography variant="body1" paragraph>
                About
            </Typography>
        </Container>
    );
};

export default About;
