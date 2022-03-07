import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Tabs from './Tabs';
import History from './History';
import Wallet from './Wallet';
import Transact from './Transact';
import Miner from './Miner';

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div className="container">
                    <h1 className="title text-center">Crypto Blockchain</h1>
                    <Tabs/>
                    <div className="tab-body">
                        <Switch>
                            <Route path="/history">
                                <History/>
                            </Route>
                            <Route path="/wallet">
                                <Wallet/>
                            </Route>
                            <Route path="/transact">
                                <Transact/>
                            </Route>
                            <Route path="/miner">
                                <Miner/>
                            </Route>
                        </Switch>
                        <Redirect from="/" to="/history"></Redirect>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;