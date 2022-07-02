import React, { Component } from 'react';

import './inputBox.css'

class InputBox extends Component {
    constructor(props){
        super(props); 

       // console.log(this.props.number,'-//--');
    }
   
    
    render() { 
        return (
            <div className="form-control mt-3 lg-p-5 p-0 d-grid">
               {/* <p className='d-flex 'style={{height:'10px'}} >{this.props.number}</p> */}
               <input type='number' value={this.props.number}/>
            </div>
        );
    }
}
 
export default InputBox;