import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
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

const Login = lazy(() => import('./pages/Login'));

// ----------------------------------------------------------------------

export default function Router() {
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
