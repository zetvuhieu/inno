import React from 'react';
import { AppBar, Toolbar, Typography, Link, Container, Grid, useTheme } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" id="home">
            <Container maxWidth="md">
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h6" component="div">
                                <Link href="#" color="inherit" underline="none">
                                    Logo
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <nav className="nav-links">
                                <Link
                                    href="#home"
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        margin: { xs: '0 8px', sm: '0' },
                                        fontSize: { xs: '0.8rem', sm: '1.5rem' },
                                    }}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#technology"
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        margin: { xs: '0 8px', sm: '0 8px 0 16px' },
                                        fontSize: { xs: '0.8rem', sm: '1.5rem' },
                                    }}
                                >
                                    Technology
                                </Link>
                                <Link
                                    href="#contact"
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        margin: { xs: '0 8px', sm: '0 8px 0 16px' },
                                        fontSize: { xs: '0.8rem', sm: '1.5rem' },
                                    }}
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="#about"
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        margin: { xs: '0 8px', sm: '0 8px 0px 16px' },
                                        fontSize: { xs: '0.8rem', sm: '1.5rem' },
                                    }}
                                >
                                    About
                                </Link>
                            </nav>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
