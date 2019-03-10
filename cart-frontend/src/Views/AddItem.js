import React, { Component } from 'react';
import axios from 'axios';

export default class AddItem extends Component {
    //name, description, price, amount
    state = { 
      name: '',
      description: '',
      price: '',
      amount: '',
    }

    handleChangeName = event => {
      this.setState({
        name: event.target.value,
      })
    }
    handleChangeDescription = event => {
      this.setState({
        description: event.target.value,
      })
    }
    handleChangePrice = event => {
      this.setState({
        price: event.target.value,
      })
    }
    handleChangeAmount = event => {
      this.setState({
        amount: event.target.value
      })
    }
  
    handleSubmit = event => {
      event.preventDefault();
      var payload ={
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        amount: this.state.amount
      }
      console.log(payload);
      axios.post('http://localhost:5555/item/add/', {
        name:payload.name,
        description:payload.description,
        price:payload.price,
        amount:payload.amount
      }).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(e => {
        console.log(e);
      })

    }


    render () {                                   
       return (
        <form onSubmit={this.handleSubmit}>
        AddItem
        <br/>
        Name:  <input type ="text" name = "name" onChange ={this.handleChangeName}/>
        <br/>
        Description:  <input type ="text" name = "description" onChange ={this.handleChangeDescription}/>
        <br/>
        Price:  <input type ="text" name = "price" onChange ={this.handleChangePrice}/>
        <br/>
        Amount:  <input type ="text" name = "amount" onChange ={this.handleChangeAmount}/>
        <br/>
        <button type = "submit">Add</button>
        </form>
       )
    }
 }