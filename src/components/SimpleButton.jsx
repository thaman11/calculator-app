import React, { Component } from 'react';
import 'bootstrap'
import InputBox from './InputBox';


class SimpleButton extends Component {
    constructor(props){
        super(props);
        this.state={
            any:0
        }
        
       
    }
    // sendNumber=()=>{
    //      console.log(this.props.buttonvalue);
        
    // };
        render() {
            
        return (

            <div className="container px-0">
                <button  type="button" className='btn btn-md bg-warning 'style={{width:'100%',display:'block'}} >{this.props.buttonvalue}</button>
            </div>
        );
    }
}
 
export default SimpleButton;