import React, { Component } from 'react';

export default class Home extends Component {
    state = { 
    }

    cartList(){
        window.location.href = "CartList"
    }

    addItem(){
        window.location.href = "AddItem"
    }

    render () {        
                                   
        return (
            <table>
            <tbody>
            <tr id='container'>
                <td>
                    <input type="button" value="Cart List" onClick={this.cartList}  />
                </td>
                <td>
                <input type="button" value="Add Item" onClick={this.addItem}  />
                </td>
            </tr>
            </tbody>
            </table>
        )
    }
}