import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AllMeetupsPage } from './pages/AllMeetups';
import { FavoritesPage } from './pages/Favorites';
import { NewMeetupPage } from './pages/NewMeetup';
import { Layout } from './components/layout/Layout';
// import { MainNavigation } from './components/layout/MainNavigation';

function App() {
  return (
     <Layout>
     <Routes>
      <Route path="/" element={<AllMeetupsPage />}></Route>
      <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
      <Route path="/favorites" element={<FavoritesPage />}></Route>
     </Routes>
     </Layout>
  );
}
    //prima al posto di layout <div>
     {/* <MainNavigation /> */}
         // </div>

export default App;
