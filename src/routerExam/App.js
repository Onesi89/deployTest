import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap';
import About from './About';
import Home from './Home';
import React from 'react';
import Profile from './Profile';
import Articles from './Articles';
import Article from './Article';
import Layout from './Layout';
import NotFound from './NotFound';
import Login from './Login';
import MyPage from './MyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username/" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
