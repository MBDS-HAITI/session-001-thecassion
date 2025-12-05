import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Notes from "../pages/Notes/Notes.jsx";
import Subjects from "../pages/Subjects/Subjects.jsx";
import About from "../pages/About/About.jsx";
import { NotFound, Students, StudentDetails } from "../pages";
import NoteDetails from "../pages/Notes/Details.jsx";
function Router() {
    return(
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/students" element={<Students />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/about" element={<About />} />
            <Route path="/notes/:id" element={<NoteDetails />} />
            <Route path="/students/:id" element={<StudentDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default Router;