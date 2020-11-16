import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeBPBA from './pages_BPBA/UsersPage';
import SetPBAM from './pages_BPBA/PbamPage';
import Jadwal from './pages_BPBA/JadwalPage'

function routes() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={HomeBPBA} />
            <Route exact path="/pbamPage" component={SetPBAM} />
            <Route exact path="/jadwalPage" component={Jadwal} />
        </BrowserRouter>
    );
}
export default routes;