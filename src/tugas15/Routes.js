import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import ListBuah from './../tugas14/ListBuah';
import List from './../tugas13/List';
import Timer from './../tugas12/Timer';
import Table from './../tugas11/Table';
import Buah from './Buah';

function Routes() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tugas11" component={Table} />
                <Route path="/tugas12" component={Timer} />
                <Route path="/tugas13" component={List} />
                <Route path="/tugas14" component={ListBuah} />
                <Route path="/tugas15" component={Buah} />
            </Switch>
        </Router>

    );
}


const Home = () => {
    return (
        <h1 className="App" style={{ margin: "10px 25px" }}>
            Hello!
        </h1>
    )
}

export default Routes;