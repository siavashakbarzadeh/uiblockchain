import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Tabs extends Component {
    state = {
        activeTab: 'history'
    }

    handleActiveTab(tabName){
        this.setState({activeTab: tabName})
    }

    render(){
        return(
            <ul className="nav nav-tabs">
                <li className="nav-item" onClick={this.handleActiveTab.bind(this, 'history')}>
                    <Link className={"nav-link " + (this.state.activeTab === 'history' ? 'active': '')} to="/history">Blocks History</Link>
                </li>
                <li className="nav-item" onClick={this.handleActiveTab.bind(this, 'wallet')}>
                    <Link className={"nav-link " + (this.state.activeTab === 'wallet' ? 'active': '')} to="/wallet">My Wallet</Link>
                </li>
                <li className="nav-item" onClick={this.handleActiveTab.bind(this, 'transact')}>
                    <Link className={"nav-link " + (this.state.activeTab === 'transact' ? 'active': '')} to="/transact">Transact</Link>
                </li>
                <li className="nav-item" onClick={this.handleActiveTab.bind(this, 'miner')}>
                    <Link className={"nav-link " + (this.state.activeTab === 'miner' ? 'active': '')} to="/miner">Miner</Link>
                </li>
            </ul>
        )
    }
}

export default Tabs;