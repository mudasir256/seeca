import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home1 from './pages/home1';
import AboutPage from './pages/innerpages/about';
import BlogPage from './pages/innerpages/blog';
import ContactPage from './pages/innerpages/contact';
import PortfolioPage from './pages/innerpages/portfolio';
import ServicesPage from './pages/innerpages/services';
import SinglePost from './pages/innerpages/single_post';
import SingleProject from './pages/innerpages/single_project';
import SingleProject2 from './pages/innerpages/single_project2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/innerpages/about" element={<AboutPage />} />
        <Route path="/innerpages/blog" element={<BlogPage />} />
        <Route path="/innerpages/contact" element={<ContactPage />} />
        <Route path="/innerpages/portfolio" element={<PortfolioPage />} />
        <Route path="/innerpages/services" element={<ServicesPage />} />
        <Route path="/innerpages/single_post" element={<SinglePost />} />
        <Route path="/innerpages/single_project" element={<SingleProject />} />
        <Route
          path="/innerpages/single_project2"
          element={<SingleProject2 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
