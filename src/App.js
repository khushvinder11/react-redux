import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Services from "./components/services/Services";
import Project from "./components/project/Project";
import Error from "./components/errorPage/Errorpage";
import ProjectAdd from "./components/project/ProjectAdd";
import ServicesAdd from "./components/services/Add";
import NavbarSecond from "./components/navbar/NavbarSecond";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <NavbarSecond />
          <Routes>
            <Route path="/service/add" element={<ServicesAdd />} />
            <Route path="/service/edit/:id" element={<ServicesAdd />} />
            <Route path="/service/table" element={<Services />} />
            <Route path="/project/edit/:id" element={<ProjectAdd />} />
            <Route path="/project/table" element={<Project />} />
            <Route path="/project/add" element={<ProjectAdd />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
