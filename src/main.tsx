import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import ContactPage from './sections/contactme.tsx';
import AboutPage from './sections/aboutme.tsx';
//import DownloadResume from './sections/downloadResume.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutme" element={<AboutPage />} />
        <Route path="/contactme" element={<ContactPage />} />
         { /*<Route path="/resume" element={< DownloadResume />} /> */}
         
        <Route path="*" element={<div><h1>Not Found!</h1><p>Go to to <a href="/">HOME</a></p></div>} />
      </Routes>
    </Router>
    </StrictMode>,
)
