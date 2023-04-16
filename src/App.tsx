import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import Vacancies from "./pages/Vacancies/Vacancies";
import { Route, Routes} from 'react-router-dom'
import NavBar from "./common/NavBar/NavBar";
import Blog from "./pages/Blog/Blog";
import Personal from "src/pages/Personal/Personal";
import Shop from "./pages/Shop/Shop";
import {pagesPaths} from "src/constants/path";

function App() {
  return (
      <div>
          <NavBar />
          <Routes>
              <Route path={pagesPaths.mainPage} element={<MainPage />} />
              <Route path={pagesPaths.vacancies} element={<Vacancies />} />
              <Route path={pagesPaths.blog} element={<Blog />} />
              <Route path={pagesPaths.personal} element={<Personal />} />
              <Route path={pagesPaths.shop} element={<Shop />} />
          </Routes>
      </div>
  );
}

export default App;
