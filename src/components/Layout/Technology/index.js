import React from 'react';
import './technology.scss';
import { Container, Typography } from '@mui/material';

const Technology = () => {
    return (
        <Container maxWidth="md" id="technology">
            <Typography variant="h4" component="div" sx={{ my: 2 }}>
                Technology
            </Typography>
            <Typography variant="body1" paragraph>
                This is the content of the Technology component.
            </Typography>
            <Typography variant="body1" paragraph>
                Technology
            </Typography>
        </Container>
    );
};

export default Technology;
