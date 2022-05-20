import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MenuMain from "./components/MenuMain";
import SpecCarousel from "./components/SpecCarousel";
import { Container} from "semantic-ui-react";
import FormFilterMain from "./components/FormFilterMain";
import ShowAdsCards from "./components/ShowAdsCards";
import MainPage from "./pages/MainPage";
import AnnouncementId from "./pages/AnnouncementId";

function App() {
    return (
        <div>
            <header>
                <MenuMain/>
            </header>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="about" element={<About />} />
                <Route path="announcementId" element={<AnnouncementId/>} />
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