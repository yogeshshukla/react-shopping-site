import React from "react";
class MyCart extends React.Component{
    deleteFromCart = (item) =>{
        console.log(item);
        this.props.deleteCartData(item);
    }
    render(){
        var cartValues = this.props.cartData;
       //console.log(cartValues);
        var trArr = cartValues.map( (item) =>{
            return (
            <tr>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.purchaseQuantity}</td>
                <td><input type="button" value="Delete" onClick={this.deleteFromCart.bind(this, item)} className="btn btn-primary" /></td>
            </tr>)
        });
        return(
            <div className="container">
                <h1>Cart Details</h1>
                <table className="table table-bordered">
                <thead>
                    <th>productId</th>
                    <th>product Name</th>
                    <th>product Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </thead>
                   {trArr}
                </table>
            </div>
        )
    }
}
export default MyCart;