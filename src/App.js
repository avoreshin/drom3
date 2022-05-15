import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MyLocation from "./pages/MyLocation";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/my_location" element={<MyLocation />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default App;