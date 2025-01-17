// BOOTSTRAP MIN FILE => IMPORT ALL ATTRIBUTES AND CSS FUNCTIONALITY
import 'bootstrap/dist/css/bootstrap.min.css';

import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AuthGuard from './guard/auth.guard';
import RoutesWithNotFound from './helpers/routes-with-not-found';
import { PrivateRoutes, PublicRoutes } from './models/routes';
import store from './redux/store';
import Detail from './pages/detail/detail';
import Loading from './components/loading/Loading';
import Search from './pages/Search/Search';
import User from './pages/user/User';



//Lazy loading
const Login = lazy(() => import('./pages/login/Login'));
const SignUp = lazy(() => import('./pages/signup/Signup'))
const Shoes = lazy(() => import('./pages/shoes/Shoes'))
const Cart = lazy(() => import('./pages/cart/Cart'))
const Home = lazy(() => import('./pages/Home/Home'))
const Payment = lazy(() => import('./pages/Payment/Payment'))
const Review = lazy(() => import('./pages/review/Review'))
const Info = lazy(() => import('./pages/info/Info'))

function App() {

  return (
    <div className='App'>
    <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={PrivateRoutes.STORE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PublicRoutes.SIGNUP} element={<SignUp />}/>

          <Route path={`${PrivateRoutes.STORE}/`} element={<Shoes />} />
          <Route path={`${PrivateRoutes.STORE_DETAIL}/`} element={<Detail />} />
          <Route path={`${PrivateRoutes.HOME}/`} element={<Home />} /> 
          <Route path={`${PrivateRoutes.SEARCH}/`} element={<Search />} /> 
          {/*  ROUTE WITH AUTHENTICATION  */}
          <Route element={<AuthGuard />}>
          <Route path={`${PrivateRoutes.USER}/`} element={<User />} />
          <Route path={`${PrivateRoutes.CART}/`} element={<Cart />} />
          <Route path={`${PrivateRoutes.PAYMENT}/`} element={<Payment />} /> 
          <Route path={`${PrivateRoutes.REVIEW}/:id`} element={<Review />} /> 
          <Route path={`${PrivateRoutes.INFO}/`} element={<Info />} /> 

          </Route>
        </RoutesWithNotFound>
        <Footer />
      </BrowserRouter>
      </Provider>
    </Suspense>
    </div>
  )
}

export default App
