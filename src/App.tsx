import React from "react";
import MainPage from "./components/MainPage/MainPage";
import Vacancies from "./components/Vacancies/Vacancies";
import { Route, Routes} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import Blog from "./components/Blog/Blog";

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
