import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeBPBA from './pages_BPBA/UsersPage';
import SetPBAM from './pages_BPBA/PbamPage';
import Jadwal from './pages_BPBA/JadwalPage';
import Login from './login/Login';
import HomePBAM from './pages_BPAM/PbaPages';
import JadwalBPA from './pages_BPAM/JadwalPBA';
import GantiPassword from './pages_BPBA/UbahPassPage';
import LaporanPBAM from './pages_BPAM/Laporan';
import CreateUser from './pages_BPBA/ApiCreateUser';
import HomePBA from './pages_PBA/PCuPage';

function routes() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/userPage" component={HomeBPBA} />
            <Route exact path="/pbamPage" component={SetPBAM} />
            <Route exact path="/jadwalPage" component={Jadwal} />
            <Route exact path="/pbaPage" component={HomePBAM} />
            <Route exact path="/jadwalPBA" component={JadwalBPA} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/ubahPassPage" component={GantiPassword} />
            <Route exact path="/laporanPage" component={LaporanPBAM} />
            <Route exact path="/createUser" component={CreateUser} />
            <Route exact path="/pcuPage" component={HomePBA} />
        </BrowserRouter>
    );
}
export default routes;