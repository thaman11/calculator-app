import React, { Component } from 'react';
import InputBox from './InputBox';
import 'bootstrap/dist/css/bootstrap.css';
import SimpleButton from './SimpleButton';


class Button extends Component {
      constructor(props){
        super(props);
        this.state={
          number:0
        }
        
        };

    handleChange(number){
      this.setState({number:number})
    }
  add(){
    return null;
    //result=this.prevState;
  }   
        
      
    render() {
        
        //console.log(this.props.value);
        return (
        
             
               
    <div>
      {/* <InputBox data={this.props.value} />

      <button type="textbox" onClick={this.sendNumber} /> */}
        <div className="container">
        <div className="row thaman justify-content-center px-6 mt-5"><h1 className='bg-dark'>CALCULATOR</h1>
            <div className="col-10 calculator bg-secondary "><InputBox number={this.state.number}/>
              <div className="row-10">
                <div className='col-12 p-0'>
                  <div className="row p-2">
                    <div className='col-3' onClick={()=>this.handleChange(1)}><SimpleButton buttonvalue={1} /></div>
                    <div className='col-3'onClick={()=>this.handleChange(2)}><SimpleButton buttonvalue={2}/></div>
                    <div className='col-3'onClick={()=>this.handleChange(3)}><SimpleButton buttonvalue={3}/></div>
                    <div className='col-3'onClick={()=>this.handleChange(this.add())}><SimpleButton buttonvalue={'+'}/></div>
                  </div>
                </div>
                  <div className="row p-2">
                    <div className='col-3 'onClick={()=>this.handleChange(4)}><SimpleButton buttonvalue={4}/></div>
                    <div className='col-3'onClick={()=>this.handleChange(5)}><SimpleButton buttonvalue={5}/></div>
                    <div className='col-3'onClick={()=>this.handleChange(6)}><SimpleButton buttonvalue={6}/></div>
                    <div className='col-3'onClick={()=>this.handleChange("")}><SimpleButton buttonvalue={'-'}/></div>
                  </div>
                  <div className="row p-2">
                    <div className='col-3 'onClick={()=>this.handleChange(7)}><SimpleButton buttonvalue={7}/></div>
                    <div className='col-3'onClick={()=>this.handleChange(8)}><SimpleButton buttonvalue={8}/></div>
                    <div className='col-3'onClick={()=>this.handleChange(9)}><SimpleButton buttonvalue={9}/></div>
                    <div className='col-3'onClick={()=>this.handleChange('')}><SimpleButton buttonvalue={'*'}/></div>
                  </div>
                  <div className="row p-2">
                    <div className='col-3 'onClick={()=>this.handleChange('')}><SimpleButton buttonvalue={'/'}/></div>
                    <div className='col-3'onClick={()=>this.handleChange(0)}><SimpleButton buttonvalue={0}/></div>
                    <div className='col-3 'onClick={()=>this.handleChange('')}><SimpleButton buttonvalue={'clear'}/></div>
                    <div className='col-3'onClick={()=>this.handleChange('')}><SimpleButton buttonvalue={' = '}/></div>
                  </div>
              </div>
            </div>
        </div>
        
    </div>    
      
     </div>   
        );
    }
}
 
export default Button;