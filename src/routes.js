import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeBPBA from './pages_BPBA/UsersPage';
import SetPBAM from './pages_BPBA/PbamPage';
import Jadwal from './pages_BPBA/JadwalPage';
import Login from './login/Login'

function routes() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/userPage" component={HomeBPBA} />
            <Route exact path="/pbamPage" component={SetPBAM} />
            <Route exact path="/jadwalPage" component={Jadwal} />
            <Route exact path="/login" component={Login} />
        </BrowserRouter>
    );
}
export default routes;