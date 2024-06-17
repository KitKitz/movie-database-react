// Development Components
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Base Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Router Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWatchlist from '../pages/PageWatchlist';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageNotFound from '../pages/PageNotFound';
import PageSearch from '../pages/PageSearch';

function AppRouter() {
  return (
    <Router basename="/slate">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<PageHome/>} />

          <Route path="/category/:categoryName" element={<PageHome />} />
          <Route path= "/search/:query" element={<PageSearch/>}/>

          <Route path="/about" element={<PageAbout />} />
          <Route path="/watchlist" element={<PageWatchlist />} />
          <Route path="/movie/:id" element={<PageSingleMovie />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter
