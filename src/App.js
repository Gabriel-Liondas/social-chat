import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import SideBarMenu from "./components/SideBarMenu/SideBarMenu"
import AddPostPage from './pages/AddPostPage/AddPostPage';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import RecentPostHome from './pages/RecentPostHome/RecentPostHome';
import SearchPostPage from './pages/SearchPost/SearchPostPage';
import SearchUserPage from './pages/SearchUser/SearchUserPage';

function App() {
  return (
    <Router>
      <div className="App">
          <SideBarMenu />
          <Routes>
            <Route exact path="/" element={<RecentPostHome />} />
            <Route exact path="/recent_posts" element={<RecentPostHome />} />
            <Route exact path="/search_user" element={<SearchUserPage />} />
            <Route exact path="/search_post" element={<SearchPostPage />} />
            <Route exact path="/my_profile" element={<MyProfilePage />} />
            <Route exact path="/add_post" element={<AddPostPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
