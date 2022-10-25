//import logo from './logo.svg';
import './App.css';

//import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import { FeedbackProvider } from './context/FeedbackContext';
//import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink'

function App() {

  return (
    <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/'
                    element= {
                      <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                      </>
                    }>
              </Route>
              <Route path='/about' element={<AboutPage />} />
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
    </FeedbackProvider>
  );
}

export default App;
