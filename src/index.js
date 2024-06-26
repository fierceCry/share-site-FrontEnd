import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignIn from './auth/sign-in';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './auth/sign-up';
import MainPage from './post/MainPage';
import MyPage from './users/MyPage';
import PostDetailPage from './post/PostDetailPage';
import CallbackPage from './auth/NaverCallback';
import UserProfilePage from './users/UserProfilePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />
      <Route path="/post/:postId" element={<PostDetailPage />} />
      <Route path="/user/:userId" element={<UserProfilePage />} />
      <Route path="/callback" element={<CallbackPage />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
