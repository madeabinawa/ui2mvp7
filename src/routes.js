import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeBPBA from './pages_BPBA/usersPage';
import HomePBAM from './pages_BPBA/pbamPage';

function routes() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={HomeBPBA} />
            <Route exact path="/pbamPage" component={HomePBAM} />
        </BrowserRouter>
    );
}
export default routes;