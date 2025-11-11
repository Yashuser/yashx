import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ModificationsPage from '@/pages/ModificationsPage';
import IssuesPage from '@/pages/IssuesPage';
import CommandsPage from '@/pages/CommandsPage';
import AboutPage from '@/pages/AboutPage';
import TermsPage from '@/pages/TermsPage';
import SubredditPage from '@/pages/SubredditPage';
import ShopPage from '@/pages/ShopPage';
import '@/App.css';

function App() {
  return (
    <div className="App dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modifications" element={<ModificationsPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/commands" element={<CommandsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/subreddit" element={<SubredditPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;