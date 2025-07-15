import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from '../Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

import AgeFilter from './components/AgeFilter';
import NewLaunch from './components/NewLaunch';
import FilterWithTime from './components/FilterWithTime';
import FeaturedCourses from './components/FeaturedCourses';
import TopTeacher from './components/TopTeacher';
import WebinarSoon from './components/WebinarSoon';
import PopularCategories from './components/PopularCategories';
import Summary from './components/Summary';
import SearchResults from './components/SearchResults'; 
import './index.css';

const HomePage = () => (
  <>
    <Navbar />
    <main className="min-h-screen px-4 md:px-12 py-6 space-y-12">
      <HeroSection />
      <AgeFilter />
      <NewLaunch />
      <FeaturedCourses />
      <TopTeacher />
      <FeaturedCourses />
      <WebinarSoon />
      <PopularCategories />
      <FeaturedCourses />
      <FilterWithTime />
      <Summary />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
