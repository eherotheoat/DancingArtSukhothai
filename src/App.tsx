import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import LandingLoginPage from './pages/LandingLoginPage';
import { Suspense, useEffect } from 'react';
import LoadingPage from './components/Loading/LoadingPage';
import PrivateRoute from './Routes/PrivateRoute';


function App() {

  useEffect(() => {
  }, []);

  return (
    // <Suspense fallback={<LoadingPage loading />}>

    //   <Routes>
    //       <Route path="/*" element={<Main />} /> :
    //       <Route path="/auth/login" element={<LandingLoginPage />} />
    //   </Routes>

    // </Suspense>

    <Suspense fallback={<LoadingPage loading />}>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route path="/auth/login/*" element={<LandingLoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
