import React from 'react';
import axios from 'axios';

class SubscriptionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             name: "",
             amount: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        axios.post(`https://localhost:44380/api/Subscriptions/${this.state.amount}/${this.state.name}`)
         .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom de l'abonnemet :
                    <input
                        name="name"
                        type="text"
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Cout de l'abonement :
                    <input 
                        name="amount"
                        type="number"
                        onChange={this.handleChange}                
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SubscriptionForm;