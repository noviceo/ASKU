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


const router=createBrowserRouter([
    {
      path: "/Mypage",
      element: <Mypage/>,
    }
]);

function App() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/입실렌티" element={<WikiViewer />} />
                    <Route path="/wiki_edit" element={<WikiEdit />} />
                    <Route path="/wiki_edit_completed" element={<WikiEditCompleted />} />
                    <Route path="/addindex_completed" element={<WikiEditCompleted/>} />
                    <Route path="/signup_completed" element={<SignUpCompleted />} />
                    <Route path="/lineup_event" element={<LineupEvent />} />
                </Routes>
            </Router>
        )
    }


export default App;
