import React, {Component} from 'react';
import Api from '../Api/Api';

class Wallet extends Component {
    state = {
        walletAddress: '',
        walletBalance: 0
    }

    async componentDidMount(){
        this.setState({walletAddress: (await Api.get('/api/wallet-address')).data});
        this.setState({walletBalance: (await Api.post('/api/wallet-balance', {publicKey: this.state.walletAddress})).data})
    }

    render(){
        return(
            <div className="wallet p-2">
                <p>Wallet Information</p>
                <p className="text-center">Address: <span className="text-break">{this.state.walletAddress}</span></p>
                <p className="pt-3">Balance: <span>{this.state.walletBalance}</span> COIN</p>
            </div>
        )
    }
}

export default Wallet;