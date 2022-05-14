import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MenuMain from "./components/MenuMain";
import SpecCarousel from "./components/SpecCarousel";

function App() {
    return (
        <div>
            <header>
                <MenuMain/>
                <h1>Продажа автомобилей</h1>
                <SpecCarousel/>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
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