import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeBPBA from './pages_BPBA/usersPage';
import HomePBAM from './pages_BPBA/pbamPage';

function routes() {
    return(
        <Router>
            <div>
                <Route exact path="/" component={HomeBPBA} />
                <Route path="/pbamPage" component={HomePBAM} />
               
            </div>
        </Router>
    );
}
export default routes;