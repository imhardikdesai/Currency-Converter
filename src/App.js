import React from 'react'
import { Navbar, CTA, Footer, Form } from './components/index.js'
import {
    ChakraProvider
} from "@chakra-ui/react";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Contact from './components/Contact/Contact.jsx';

const HomeLayout = () => {
    return (
        <>
            <CTA />
            <Form />
        </>
    );
};

const App = () => {
    return (
        <ChakraProvider>

            <div className="App">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/home' element={<HomeLayout />} />
                        <Route path='/' element={<HomeLayout />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </ChakraProvider>
    )
}

export default App
