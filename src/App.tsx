import { Navigate, Route, Routes } from "react-router-dom";
import { CookieNotice } from "./components/cookies/CookieNotice";
import { DatenschutzPage } from "./pages/DatenschutzPage";
import { ImpressumPage } from "./pages/ImpressumPage";
import { LandingPage } from "./pages/LandingPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <CookieNotice />
    </>
  );
}
