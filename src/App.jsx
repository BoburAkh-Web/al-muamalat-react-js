import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import InterEduProg from "./pages/InterEduProg";
import SpecialCourses from "./pages/SpecialCourses";
import IslamicFinance from "./pages/IslamicFinance";
import Certification from "./pages/Certification";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="inter-edu-program" element={<InterEduProg />} />
        <Route path="special-courses" element={<SpecialCourses />} />
        <Route path="islamic-finance" element={<IslamicFinance />} />
        <Route path="certification" element={<Certification />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
