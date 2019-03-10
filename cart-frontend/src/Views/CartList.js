import React, { Component } from 'react';
import axios from 'axios';

export default class CartList extends Component {
    state = { 
      products: []
    }

    componentDidMount() {
      axios.get('http://localhost:5555/list')
      .then(response => {
        console.log(response);
        this.setState({
          products: response.data
        })
      });
    }

    render () {  
      const {products} = this.state;
      const productsList = products.length ? (
        products.map(p =>{
          return (
              <tr key={p.id}>
              <td>{p.amount}</td>
              <td>{p.name} </td>
              <td>{p.description}</td>
              <td> {p.price} </td>
              </tr>
          );
        })
      ) : (
        <tr className="center"><td>Empty</td></tr>
      );
      
       return (
         
          <table>
          <tbody>
            <tr>
              <td>Amount</td>
              <td>Name</td>
              <td>Description</td>
              <td>Price</td>
            </tr>
           {productsList}
          </tbody>
          </table>
       )
    }
 }