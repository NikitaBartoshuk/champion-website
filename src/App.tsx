import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import Vacancies from "./pages/Vacancies/Vacancies";
import { Route, Routes} from 'react-router-dom'
import NavBar from "./common/NavBar/NavBar";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
      <div>
          <NavBar />
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/vacancies' element={<Vacancies />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/vacancies' element={<Vacancies />} />
          </Routes>
      </div>
  );
}

export default App;
