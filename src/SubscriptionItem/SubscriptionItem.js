import React from 'react';
import './SubscriptionItem.css';

class SubscriptionItem extends React.Component{
    render(){
        return(
            <div className= "Subscription">
                <div className="name">{this.props.name}</div>
                <div className="amount">{this.props.amount}</div>
            </div>
        )
    }
}

export default SubscriptionItem;