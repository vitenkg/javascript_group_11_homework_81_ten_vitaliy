import React from 'react';
import {Route, Switch} from "react-router-dom";
import newLink from "./containers/newLink/newLink";

const App = () => (
        <div>
            <Switch>
                <Route path="/" exact component={newLink}/>
                <Route render={()=><h1>NotFound</h1>}/>
            </Switch>
        </div>
    );

export default App;