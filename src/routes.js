import { lazy, Suspense, useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Guard from './components/auth/Guard';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Unauthorised from './pages/Unauthorised';
import Form from './components/form/Form';
//
import tokenService from './components/auth/Token.service';
import { authConstants } from './store/actionTypes';
//
const Login = lazy(() => import('./pages/Login'));
// ----------------------------------------------------------------------

export default function Router() {
  const dispatch = useDispatch();

  // setting redux user from local storage
  useEffect(() => {
    if (tokenService.getUser()) {
      dispatch({ type: authConstants.USER_SIGNIN_SUCCESS, payload: tokenService.getUser() });
    }
  }, [dispatch]);

  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" replace /> },
        { path: 'home', element: <Home /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'form', element: <Form /> },
        { path: 'admin', element: <Navigate to="/admin/dashboard" replace /> }
      ]
    },
    {
      path: '/admin',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          element: (
            <Guard
              path="/admin/dashboard"
              element={<DashboardApp />}
              roles={['ROLE_ADMIN', 'ROLE_MODERATOR']}
            />
          )
        }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        {
          path: 'login',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          )
        },
        { path: 'register', element: <Register /> },
        { path: '401', element: <Unauthorised /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
