import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import AddIndex from "./pages/AddIndex";
import CommentPage from "./pages/CommentPage";
import LineupEvent from "./pages/LineupEvent";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";
import SignUpCompleted from "./pages/SignUpCompleted";
import WikiEdit from "./pages/WikiEdit";
import WikiEditCompleted from "./pages/WikiEditCompleted";
import WikiViewer from "./pages/WikiViewer";
import { useEffect } from 'react';


function App() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wiki" element={<WikiViewer />} />
                    <Route path="/wiki_edit" element={<WikiEdit />} />
                    <Route path="/wiki_edit_completed" element={<WikiEditCompleted />} />
                    <Route path="/addindex_completed" element={<WikiEditCompleted/>} />
                    <Route path="/signup_completed" element={<SignUpCompleted />} />
                    <Route path="/lineup_event" element={<LineupEvent />} />
<<<<<<< HEAD
                    <Route path="/mypage/:id" element={<MyPage />} />
=======
                    <Route path="/mypage" element={<MyPage/>} />
>>>>>>> f2876df4ddea970c8f57a886fb084993f9c37742
                </Routes>
            </Router>
        )
    }


export default App;
