import './App.css';
import React from 'react';
import SubscriptionForm from './SubscriptionForm';
import SubscriptionList from './SubscriptionList/SubscriptionList';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <SubscriptionList />
        <SubscriptionForm />
      </React.Fragment>
    </div>
  );
}

export default App;
