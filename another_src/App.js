import React from "react"
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";

function App(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/add" exact element={<AddContact />} />
                <Route path="/edit/:id" exact element={<EditContact />} />
                <Route path="*" element={<h1>No Page Found</h1>}/>
            </Routes>
        </Router>
    )
}

export default App