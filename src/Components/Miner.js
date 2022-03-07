import React, {Component} from 'react';
import Api from '../Api/Api';

class Miner extends Component {

    async handleMine(e){
         Api.get('/api/mine-transactions').then((res)=>{
             alert(res.data);
         }).catch((err)=>{
             alert('Mining new block has been failed!')
         })
    }

    render(){
        return(
            <div className="mine">
                <p>Mine new block</p>
                <input type="button" value="Mine" onClick={this.handleMine.bind(this)}/>
            </div>
        )
    }
}

export default Miner;