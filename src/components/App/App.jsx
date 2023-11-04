import AppHeader from 'components/AppHeader/AppHeader';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refresh } from 'redux/auth/authOperations';
import { getIsRefreshing } from 'redux/auth/authSelectors';
import { Container } from './App.styled';

const Layout = lazy(() => import('../Layout/Layout'));
const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const Contacts = lazy(() => import('../../Pages/Contacts/Contacts'));
const LogIn = lazy(() => import('../../Pages/LogIn/LogIn'));
const Register = lazy(() => import('../../Pages/Register/Register'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LogIn} redirectTo="/contacts" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Container>
    )
  );
}
