import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MenuMain from "./components/MenuMain";
import MainPage from "./pages/MainPage";
import { AnnouncementId } from "./pages/AnnouncementId";
import NewAnn from "./pages/NewAnn";
import NewAnnPhoto from "./pages/NewAnnPhoto";
import { EntryPage } from "./pages/EntryPage";
import {useState} from "react";

function App() {

    const [city, setCity] = useState("Выберите город")

  return (
    <>
      <header>
        <MenuMain city={city} setCity={setCity}/>
      </header>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/new_ann" element={<NewAnn />} />
        <Route path="/new_ann_photo" element={<NewAnnPhoto />} />
        <Route path="/entry" element={<EntryPage />} />
        <Route path="/announcementId/:id" element={<AnnouncementId />} />
          <Route
              path="*"
              element={<Navigate to="/" replace  />}
          />
      </Routes>
    </>
  );
}

export default App;
