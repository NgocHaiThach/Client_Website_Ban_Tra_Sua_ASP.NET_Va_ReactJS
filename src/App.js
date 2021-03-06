import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import './responsive.css';
import './assets/fonts/fontawesome-free-5.15.3/css/all.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { getProducts } from "./redux/apiCall";


const HomePage = React.lazy(() => import('./containers/HomePage'))
const CartDetailContainer = React.lazy(() => import('./containers/CartDetailContainer'))
const ProductDetailPage = React.lazy(() => import('./containers/ProductDetailPage'))
const BillPage = React.lazy(() => import('./containers/BillPage'))
const PaymentPage = React.lazy(() => import('./containers/PaymentPage'))
const PersonalPage = React.lazy(() => import('./containers/PersonalPage'))
const RegistPage = React.lazy(() => import('./containers/RegistPage'))
const LoginPage = React.lazy(() => import('./containers/LoginPage'))
const ForgotPassPage = React.lazy(() => import('./containers/ForgotPassPage'))

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    getProducts(dispatch)
  }, [])

  return (
    <div className="app">
      <Suspense fallback={<h2>Loading ...</h2>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home/all" />
            <Route exact path="/home/all" component={HomePage} />
            <Route exact path="/product/:slug" component={ProductDetailPage} />
            <Route exact path="/cart" component={CartDetailContainer} />
            <Route exact path="/bill/:iduser" component={BillPage} />
            <Route exact path="/payment/:iduser" component={PaymentPage} />
            <Route exact path="/personal/:iduser" component={PersonalPage} />
            <Route exact path="/register" component={RegistPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/forgot_pass" component={ForgotPassPage} />
            <Route component={NotFound} />

          </Switch>
          <Footer />

        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
