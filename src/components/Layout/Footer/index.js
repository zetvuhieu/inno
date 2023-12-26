import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: '20px' }}>
            <Container maxWidth="md">
                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                    sx={{
                        fontSize: { xs: '0.8rem', sm: '1.5rem' },
                    }}
                >
                    © 2023 Inno Solutions. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
