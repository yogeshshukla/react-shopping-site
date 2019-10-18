import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import MyCart from "./MyCart"

class App extends React.Component{
  cartArr = [];
  productsArr = [
    {productId:"P101", productName:"Apple", longDescription:"Iphone 11 ", price:65801, quantityinHand:5, imageUrl:"apple11.jpeg"},
    {productId:"P102", productName:"Apple", longDescription:"Iphone 11 Pro", price:70000, quantityinHand:4, imageUrl:"apple11.jpeg"},
    {productId:"P103", productName:"Samsung", longDescription:"Samsung 15 ", price:79000, quantityinHand:5, imageUrl:"samsung15.jpg"},
    {productId:"P104", productName:"OnePlus", longDescription:"Iphone 11 ", price:45000, quantityinHand:5, imageUrl:"onplus 7.jpg"},
  ]
  constructor(props){
    super(props);
    this.state = {myCartShow:false};
  }
  sendCartdataFromHomeToAppHandler =(obj) =>{
    var pos = this.cartArr.findIndex(item=>item.productId==obj.productId);
    if(pos<0){
      this.cartArr = [...this.cartArr, obj];
      //this.cartArr.push(obj);
    }else {
      var tempData = this.cartArr[pos];
      tempData.purchaseQuantity+=obj.purchaseQuantity;
      var tempArr = [...this.cartArr];
      tempArr.splice(pos, 1, tempData);
      this.cartArr  = [...tempArr];
    }
    //console.log(obj);
    //cartArr = [...cartArr, obj];
    var prodPos = this.productsArr.findIndex(item=>item.productId==obj.productId);
    var tempData = this.productsArr[prodPos];
    tempData.quantityinHand-=obj.purchaseQuantity;
    var tempArr = [...this.productsArr];
    tempArr.splice(prodPos, 1, tempData);
    this.productsArr = [...tempArr];

    if(this.cartArr.length>0){
      this.setState({myCartShow:true})
    }
  }
  deleteCartEveneHandler = (obj) =>{
    console.log(obj);
    var pos = this.cartArr.findIndex( item =>
       item.productId==obj.productId
    )
    console.log(pos);
    this.cartArr.splice(pos, 1)
    console.log(this.cartArr);

    var prodPos = this.productsArr.findIndex(item=>item.productId==obj.productId);
    var tempData = this.productsArr[prodPos];
    tempData.quantityinHand+=obj.purchaseQuantity;
    var tempArr = [...this.productsArr];
    tempArr.splice(prodPos, 1, tempData);
    this.productsArr = [...tempArr];
    
    this.setState({})
  }
  render(){
    
    return(
      <React.Fragment>  
      <div id="header">
        <img src={logo} alt="" />
      </div>
      <h1>My Shopping site</h1>
      <div id="navigation"></div>
      <Home productsArr ={this.productsArr} sendCartdataFromHomeToApp = {this.sendCartdataFromHomeToAppHandler}/>
      { this.state.myCartShow &&<MyCart cartData={this.cartArr} deleteCartData={this.deleteCartEveneHandler}/> }
      <div id="footer"></div>
      </React.Fragment>
    );
  }
}

// function App() {
//   var sendCartdataFromHomeToAppHandler =(obj) =>{
//     console.log(obj);
//     cartArr.push(obj);
//   }
//   var logo = "download.png";
//   return (
//   <React.Fragment>  
//    <div id="header">
//      <img src={logo} alt="" />
//    </div>
//    <h1>My Shopping site</h1>
//    <div id="navigation"></div>
//    <Home sendCartdataFromHomeToApp = {sendCartdataFromHomeToAppHandler}/>
//    <MyCart cartData={cartArr} />
//    <div id="footer"></div>
//    </React.Fragment>
//   );
// }

export default App;
