import React, {Component} from 'react';
import Api from '../Api/Api';

class Transact extends Component {
    state = {
        amount: '',
        recipientAddress: ''
    }

    handleAmount(e){
        this.setState({amount: e.target.value});
    }

    handleRecipientAddress(e){
        this.setState({recipientAddress: e.target.value});
    }

    handleSetTransaction(e){
        e.preventDefault();

        if(isNaN(this.state.amount) || this.state.amount === ''){
            return alert('You must type number in amount field.')
        }
        else if(this.state.recipientAddress === ''){
            return alert('Recipient address is required.')
        }

        Api.post('/api/set-transaction', {
            recipient: this.state.recipientAddress,
            amount: this.state.amount
        }).then((res)=>{
            alert(res.data);
            this.setState({amount: '', recipientAddress: ''});
        });
    }

    render(){
        return(
            <div className="transact">
                <p>Submit a new transaction</p>
                <form className="pt-3" onSubmit={this.handleSetTransaction.bind(this)}>
                    <label for="amount">Amount:</label>
                    <input id="amount" type="text" onChange={this.handleAmount.bind(this)} value={this.state.amount}/>
                    <label for="recipient">Recipient Address:</label>
                    <input id="recipient" type="text" onChange={this.handleRecipientAddress.bind(this)} value={this.state.recipientAddress}/>
                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

export default Transact;