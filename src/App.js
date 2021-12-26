import './App.css';
import Nav from './component/nav/nav';
import Front from './component/courses/front';
import Home from './component/home/home';
import Logo from './component/logo/logo';
import Teacher from './component/teacher/techer';
import {BrowserRouter , matchRoutes, Route, Routes} from "react-router-dom";
import Courses from './component/courses/courses';
import Back from './component/courses/back';
import Android from './component/courses/android';
import Programs from './component/programs/programs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Courses/>
        
          <Routes>
            <Route path="/front" element={<Front />}/>
            <Route path="/back" element={<Back />}/>
            <Route path="/android" element={<Android/>}/>
          </Routes>
        <Programs />
        
      </div>
      </BrowserRouter>
    
  );
}

export default App;
