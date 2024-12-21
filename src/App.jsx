import { useState } from 'react';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'available-cats':
        return <AvailableCats />;
      case 'contact-us':
        return <ContactUs />;
      case 'about-us':
        return <AboutUs />;
      default:
        return <h1>404 Page Not Found</h1>;
    }
  };

  return (
    <div>
      <header className="d-flex align-items-center bg-light">
        <h1>Purrfect Adoption</h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <button className="btn btn-link" onClick={() => setCurrentPage('home')}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link" onClick={() => setCurrentPage('available-cats')}>
                Available Cats
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link" onClick={() => setCurrentPage('contact-us')}>
                Contact Us
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link" onClick={() => setCurrentPage('about-us')}>
                About Us
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{renderPage()}</main>
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
}

export default App;
