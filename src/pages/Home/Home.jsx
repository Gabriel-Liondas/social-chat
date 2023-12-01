import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SideBarMenu from "../../components/SideBarMenu/SideBarMenu"
import AddPostPage from '../AddPostPage/AddPostPage';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import RecentPostHome from '../RecentPostHome/RecentPostHome';
import SearchPostPage from '../SearchPost/SearchPostPage';
import SearchUserPage from '../SearchUser/SearchUserPage';


export default function Home() {


    return (
        <div className='Home'>
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
    );
}