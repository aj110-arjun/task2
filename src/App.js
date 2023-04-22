import './App.css';
import Header from './Components/screens/Navbar/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/screens/Home';
import Project from './Components/screens/Project';
import Experience from './Components/screens/Experience';
import Enquiry from './Components/screens/Enquiry';
import Error from './Components/screens/Error';

function App() {
  return (
    <>
        
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/enquiry" element={<Enquiry />} />
                <Route path="*" element={<Error />} />

            </Routes>
        </Router>  
             
    </>
  );
}

export default App;
