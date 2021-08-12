import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {Router} from 'react-router-dom';

import About from "./About";
import Work from "./Work";
import CaseStudies from "./CaseStudies";
import Content  from "./Content";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Content} />
                    <Route path="/About" component={About} />
                    <Route path="/Work" component={Work} />
                    <Route path="/CaseStudies" component={CaseStudies} />
                </Switch>
            </Router>
        )
    }
}