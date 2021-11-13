import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import './assets/fonts/fontawesome-free-5.15.3/css/all.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { getProducts } from "./redux/apiCall";


const HomePage = React.lazy(() => import('./containers/HomePage'))
const CartDetailContainer = React.lazy(() => import('./containers/CartDetailContainer'))
const ProductDetailPage = React.lazy(() => import('./containers/ProductDetailPage'))
const RegistPage = React.lazy(() => import('./containers/RegistPage'))
const LoginPage = React.lazy(() => import('./containers/LoginPage'))

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
            <Route exact path="/register" component={RegistPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
