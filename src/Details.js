import React from "react";
import ReactModal from 'react-modal';
import "./Details.css";

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state = {showModal:true}
    }
    handleCloseModal= () =>{
        this.setState({showModal:false})
        this.props.closeDetails();
    }
    render(){
        const {dataToSend} = this.props;
        return (
            <div >
                
                <ReactModal isOpen={this.state.showModal} ariaHideApp={false}>
                    <div id="mainContainer" className="img-container">
                    <h1>Details component</h1>
                        <img  src={dataToSend.imageUrl} alt="produc image"/>
                        <p>{dataToSend.productName}</p>
                        <p>{dataToSend.longDescription}</p>
                        <p>{dataToSend.price}</p>
                        <button onClick={this.handleCloseModal} className="btn btn-primary">Close Modal</button> 
                    </div>
                    
                </ReactModal>
            </div>
        );
    }
}
export default Details;