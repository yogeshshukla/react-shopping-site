import React from "react";
import "./Cart.css";
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uptQuantity: 1,
            qntInHand: this.props.quantityinHand
        }
    }
    addQuantity =() =>{
        this.setState({uptQuantity: this.state.uptQuantity+1})
        console.log(this.state.uptQuantity);
        console.log(this.props.dataToSend.quantityinHand);
    }
    removeQuantity =() =>{
        this.setState({uptQuantity: this.state.uptQuantity-1})
    }
    handleCloseCart= () =>{
        this.props.closeCart();
    }
    changeQuantityEventHandler =(str, event) =>{
        if(str=="plus"){
            if(this.state.uptQuantity == this.props.dataToSend.quantityinHand){
                event.target.disabled = true;
            }
            this.setState((prevState, props)=>{
                return ({uptQuantity:prevState.uptQuantity+1})
            })
        }else{
            this.setState((prevState, props)=>{
                return ({uptQuantity:prevState.uptQuantity-1})
            })
        }
        
    }
    saveToCartHandler = (obj) =>{
        var {productId, productName, price} = this.props.dataToSend;
        var tempObj = {
            productId, productName, price, purchaseQuantity:this.state.uptQuantity
        }
        this.props.sendCartDatatoHome(tempObj);
    }
    render(){
        const {dataToSend} = this.props;
        return (
            <div>
            <h1>Cart Component</h1>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td><img height="300px" src={dataToSend.imageUrl}/>
                        <p>{dataToSend.productName}</p>
                        <p>{dataToSend.longDescription}</p>
                        <p>{dataToSend.price}</p>
                        <p>Quantity In hand: {dataToSend.quantityinHand}</p>
                        <p>Quantity Required<input type="button" onClick={this.changeQuantityEventHandler.bind(this, 'plus')} value="+" className="btn btn-primary" />
                        <span>{this.state.uptQuantity}</span>
                        <input type="button" value="-" onClick={this.changeQuantityEventHandler.bind(this, 'minus')} className="btn btn-primary" disabled = {this.state.uptQuantity===1} />
                        </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <input type="button" value="Confirm" onClick ={this.saveToCartHandler }className="btn btn-primary" />
            <input type="button" value="Close" onClick={this.handleCloseCart} className="btn btn-primary" />
            </div>
        );
    }
}
export default Cart;