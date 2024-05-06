// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Quora from './components/Quora.js';
import { AuthProvider } from "./components/Auth/authContext";
import NotFound from './components/pageNotFound/NotFound';
import PostModalPopup from './components/content/postbox1/Post/postModalPopUP.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Quora />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quora" element={<Quora />} />
            <Route path="/PostModalPopUP" element={<PostModalPopup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;