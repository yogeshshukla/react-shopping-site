import React from "react";
import Details from "./Details";
import Cart from "./Cart";
class Home extends React.Component{
   
    constructor(props){
        super(props);
        this.state={showDetails:false, tempData:{}, showCart:false,};
    }
    addToCartClickHandler =(obj) =>{
        this.setState({showCart:true, tempData:obj})
    }
    detailsClickEventHandler = (obj) =>{
        //console.log(obj);
        this.setState({showDetails:true, tempData:obj})
    }
    closeDetailsEventHandler = () => {
        this.setState({showDetails:false});
    }
    closeCartEventHandler = () => {
        this.setState({showCart:false});
    }
    sendCartDatatoHomeHandler =(obj) =>{
        this.setState({showCart:false});
        this.props.sendCartdataFromHomeToApp(obj);
    }
    render(){
        var trArr = this.props.productsArr.map( (item) =>{
            return (
                <tr key={item.productId}>
                    <td>{item.productName}</td>
                    <td>{item.longDescription}</td>
                    <td>{item.price}</td>
                    <td><img width="50px" height="50px" src={item.imageUrl} alt="image alt" /></td>
                    <td><button type="button" style={{margin: "10px"}} class="btn btn-primary" onClick={this.detailsClickEventHandler.bind(this, item)}>Details</button>
                    <button type="button" class="btn btn-primary" onClick={this.addToCartClickHandler.bind(this, item)}>Add to cart</button></td>
                </tr>
            )
        })
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Produdct Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trArr}
                    </tbody>
                </table>
                {this.state.showDetails &&<Details dataToSend={this.state.tempData} closeDetails={this.closeDetailsEventHandler}/>}
                {this.state.showCart &&<Cart dataToSend={this.state.tempData} closeCart={this.closeCartEventHandler} sendCartDatatoHome={this.sendCartDatatoHomeHandler}/>}
            </div>
           
        );
    }
}
export default Home;