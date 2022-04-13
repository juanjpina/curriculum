import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Curriculum } from '../components/Curriculum';
import { Project } from '../components/Project';


export const AppRouter = () => {
    return (
        <div className='animate__animated animate__fadeIn'>

            <Router>
                <Routes>
                    <Route path="/*" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="project" element={<Project />} />
                    <Route path="curriculum" element={<Curriculum />} />
                </Routes>
            </Router>
        </div>
    )
}
