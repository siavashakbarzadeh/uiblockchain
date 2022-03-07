import React, {Component} from 'react';
import Api from '../Api/Api';

class History extends Component {
    state = {
        blocks: []
    }

    async componentDidMount(){
        this.setState({blocks: (await Api.get('/api/blocks')).data});
    }

    render(){
        return(
            this.state.blocks.map((block, index)=>{
                return(
                    <div className="block">
                        <p>Block number: #{index}</p>
                        <p className="text-truncate">Hash: <span>{block.hash}</span></p>
                        <p className="text-truncate">Prev Hash: <span>{block.prevHash || '-'}</span></p>
                        {
                            typeof block.data === 'string' ? 
                            block.data :
                            Object.values(block.data).map((transaction)=>{
                                let toAddresses = Object.keys(transaction.output);
                                let fromAddress = transaction.input.address;
                                let toAmounts = Object.values(transaction.output);

                                for(let i = 0; i< toAddresses.length; i++){
                                    return(
                                        <>
                                            <p className="text-truncate mt-3">From: <span>{fromAddress}</span></p>
                                            <p className="text-truncate">To: <span>{toAddresses[i]}</span></p>
                                            <p className="text-truncate">Amount: <span>{toAmounts[i]} COIN</span></p>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                )
            })
        )
    }
}

export default History;