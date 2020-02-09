import Footer from "./Footer";
import React from "react";
import Header from "./Header";
import {Container} from "react-bootstrap";

const DefaultPageLayout = ({children}) => (
    <>
        <Header/>
        <div className='mt-5 content'>
            <Container>
                {children}
            </Container>
        </div>
        <Footer/>
    </>
);

export default DefaultPageLayout;