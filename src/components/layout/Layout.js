import { Container } from '@material-ui/core';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
    return (
        <Container fixed>
            <Header />
            {props.children}
            <Footer />
        </Container>
    );
};

export default Layout;