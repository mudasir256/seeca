import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Home1 from './pages/home1';
import Home1RTL from './pages/home1-rtl';
import Home2 from './pages/home2';
import Home3 from './pages/home3_construction';
import Home4 from './pages/home4_personal_architect';
import Home5 from './pages/home5_residence';
import Home6 from './pages/home6_furniture';
import Home7 from './pages/home7_landscape';
import Home8 from './pages/home8_portfolio';
import AboutPage from './pages/innerpages/about';
import BlogPage from './pages/innerpages/blog';
import ContactPage from './pages/innerpages/contact';
import PortfolioPage from './pages/innerpages/portfolio';
import ServicesPage from './pages/innerpages/services';
import ArchitecturePage from './pages/innerpages/architecture';
import InteriorDesignPage from './pages/innerpages/interior-design';
import ConstructionPage from './pages/innerpages/construction';
import BuildingSustainabilityPage from './pages/innerpages/building-sustainability';
import SmartBuildingTechnologiesPage from './pages/innerpages/smart-building-technologies';
import OurProcessPage from './pages/innerpages/our-process';
import SinglePost from './pages/innerpages/single_post';
import SingleProject from './pages/innerpages/single_project';
import SingleProject2 from './pages/innerpages/single_project2';

function WhatsAppFloat() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .whatsapp-float-global {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: #73bf44;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(115, 191, 68, 0.4);
          transition: all 0.3s ease;
        }
        .whatsapp-float-global:hover {
          background: #8dd65a;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(115, 191, 68, 0.6);
        }
        .whatsapp-float-global i {
          font-size: 24px;
        }
        @media (max-width: 767px) {
          .whatsapp-float-global {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }
          .whatsapp-float-global i {
            font-size: 22px;
          }
        }
      `}} />
      <a
        href="https://wa.me/923331498340"
        className="whatsapp-float-global"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

function App() {
  return (
    <Router>
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home-preview" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home1-rtl" element={<Home1RTL />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3_construction" element={<Home3 />} />
        <Route path="/home4_personal_architect" element={<Home4 />} />
        <Route path="/home5_residence" element={<Home5 />} />
        <Route path="/home6_furniture" element={<Home6 />} />
        <Route path="/home7_landscape" element={<Home7 />} />
        <Route path="/home8_portfolio" element={<Home8 />} />
        <Route path="/innerpages/about" element={<AboutPage />} />
        <Route path="/innerpages/blog" element={<BlogPage />} />
        <Route path="/innerpages/contact" element={<ContactPage />} />
        <Route path="/innerpages/portfolio" element={<PortfolioPage />} />
        <Route path="/innerpages/services" element={<ServicesPage />} />
        <Route path="/innerpages/architecture" element={<ArchitecturePage />} />
        <Route path="/innerpages/interior-design" element={<InteriorDesignPage />} />
        <Route path="/innerpages/construction" element={<ConstructionPage />} />
        <Route path="/innerpages/building-sustainability" element={<BuildingSustainabilityPage />} />
        <Route path="/innerpages/smart-building-technologies" element={<SmartBuildingTechnologiesPage />} />
        <Route path="/innerpages/our-process" element={<OurProcessPage />} />
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
