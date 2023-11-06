import React, { Component } from 'react'

export default class AddContact extends Component {
    state={
        name:"",
        email:"",
        number:""
    };
    add=(e)=>{
       e.preventDefault();
       if(this.state.name ==='' || this.state.email==='' || this.state.number===''){
        alert('All fields are manadatory !!!');
        return;
       }
        this.props.addContactHandler(this.state);
       this.setState({ name:'', email:'', tel:''});
    };
              
  render() {
    return (
      <div className='ui main' >
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={this.add}>
        <div className='ui field'>
            <label>Name</label>
            <input type='text' name='name' placeholder='Add Your name' onChange={(e)=> this.setState({name:e.target.value})}/>
        </div>
        <div className='ui field'>
            <label>Email</label>
            <input type='text' name='email' placeholder='Add Your Email' onChange={(e)=> this.setState({email:e.target.value})}/>
        </div>
        <div className='ui field'>
            <label>Number</label>
            <input type='tel' name='tel' placeholder='Add Your Number' onChange={(e)=>this.setState({number:e.target.value})}/>
        </div>
        <button  className='ui button blue'>Add</button>
        
        </form>
      </div>
    )
  }
}
