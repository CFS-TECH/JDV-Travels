import { useCallback, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { Footer, FloatingActions } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import HotelsPage from './pages/HotelsPage';
import WhyUsPage from './pages/WhyUsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useReveal } from './lib/api';

function AppContent() {
  const [destination, setDestination] = useState('');
  const [toast, setToast] = useState(null);
  const timer = useRef();
  const { pathname } = useLocation();
  useReveal(pathname);

  const notify = useCallback((msg, type = 'ok') => {
    setToast({ msg, type });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={<HomePage destination={destination} setDestination={setDestination} notify={notify} />}
          />
          <Route
            path="/destinations"
            element={<DestinationsPage setDestination={setDestination} notify={notify} />}
          />
          <Route
            path="/hotels"
            element={<HotelsPage setDestination={setDestination} notify={notify} />}
          />
          <Route
            path="/why-us"
            element={<WhyUsPage />}
          />
          <Route
            path="/how-it-works"
            element={<HowItWorksPage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/contact"
            element={<ContactPage destination={destination} setDestination={setDestination} notify={notify} />}
          />
          {/* Fallback route */}
          <Route
            path="*"
            element={<HomePage destination={destination} setDestination={setDestination} notify={notify} />}
          />
        </Routes>
      </main>
      <Footer />
      <FloatingActions toast={toast} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
