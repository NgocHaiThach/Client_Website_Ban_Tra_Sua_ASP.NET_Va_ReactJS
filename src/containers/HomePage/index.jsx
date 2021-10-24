import React from 'react';
import { useRouteMatch } from 'react-router';
import { Route, Switch } from "react-router-dom";
import Container from '../../components/Container';
import ProductItemDetail from '../../components/Container/Product/components/ProductItemDetail';
import CartDeatil from '../../components/Header/HeaderCart/components/CartDetail/CartDetailList';



HomePage.propTypes = {};

function HomePage(props) {
    const match = useRouteMatch()

    return (
        <Switch>
            <Route exact path={match.url} component={Container} />
        </Switch>
    );
}

export default HomePage;