import React, {Suspense} from 'react';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import { PageLayout } from './Components/PageLayout/PageLayout';

const HomePage = React.lazy(() => import('./views/HomePage/HomePage'));
const ContactsPage = React.lazy(() => import('./views/ContactsPage/ContactsPage'));
const AboutPage = React.lazy(() => import('./views/AboutPage/AboutPage'));
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));
const RegisterPage = React.lazy(() => import('./views/RegisterPage/RegisterPage'));

function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (username) => {
    setUser({username})
  }

  const handleLogin = (username) => {
    setUser({username});
  }
  
  const handleLogout = () => setUser(null);
    console.log(user);

     return (
    <div className="App">
        
      <Routes>
          <Route path="/" element={<PageLayout user={user} onLogout={handleLogout}/>}>
              <Route index element={
              <Suspense fallback={<div>Loading...</div>}>
                  <HomePage />
              </Suspense>
              } />
              <Route path="/contacts" element={
              <Suspense fallback={<div>Loading...</div>}>
                  <ContactsPage />
              </Suspense>
              } />
              <Route path="/about" element={
              <Suspense fallback={<div>Loading...</div>}>
                  <AboutPage />
              </Suspense>
              } />
          </Route>
          
          <Route path="/register" element={
          <Suspense fallback={<div>Loading...</div>}>
              <RegisterPage onRegister={handleRegister} />
          </Suspense>
          } />
          <Route path="/login" element={
          <Suspense fallback={<div>Loading...</div>}>
              <LoginPage onLogin={handleLogin} />
          </Suspense>
          } />
      </Routes>
    </div>
  );
}

export default App;
