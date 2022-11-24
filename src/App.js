import React from 'react'
import Form from './components/Form/Form.jsx'
import { Navbar, CTA } from './components/index.js'

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <CTA />
            <Form />
        </div>
    )
}

export default App
