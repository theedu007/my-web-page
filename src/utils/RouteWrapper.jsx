import React from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = ({path, exact, Component, Layout,}) => (
    <Route path={path} exact={exact} render={props => {
        return(
            <Layout {...props}>
                <Component />
            </Layout>
        )
    }} />
);

export default RouteWrapper;