import React from 'react';
import SubscriptionItem from '../SubscriptionItem/SubscriptionItem';
import './SubscriptionList.css';

class SubscriptionList extends React.Component{
    render(){
        return(
            <div className="SubscriptionList">
                <SubscriptionItem name="Netflix" amount="10" />
                <SubscriptionItem name="Free" amount="30" />
            </div>          
        )
    }
}

export default SubscriptionList;