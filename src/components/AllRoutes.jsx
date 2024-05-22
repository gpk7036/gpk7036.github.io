import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"

export const AllROutes = () => {
    return(
        <>
        <Routes>
            <Navbar />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </>
    )
}