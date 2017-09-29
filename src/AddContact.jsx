import React from 'react';

export class AddContact extends React.Component{
  constructor(){
    super();
    this.state= {
      newContact:{}
    }
  }

  handleSubmit(e){
    e.preventDefault();

    this.setState({newContact:{
      name:this.refs.name.value,
      email:this.refs.email.value,
      phone:this.refs.phone.value
    }}, function(){
      this.props.addContact(this.state.newContact);
    });
  }

  render(){
    return(
      <div>
        <h1>Add Contact</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label><br />
            <input type="text" ref="name" />
          </div>
          <div>
            <label>Email</label><br />
            <input type="text" ref="email" />
          </div>
          <div>
            <label>Phone number</label><br />
            <input type="text" ref="phone" />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
