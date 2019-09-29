import React, {Component} from 'react'

class AddUserForm extends Component{
	state = {
		name: null,
		age: null,
		belt: null
	}

	handleTextChange = e =>{
		this.setState({
			[e.target.id]: e.target.value // notice e.target.id is a string so this is like saying                                      
		})                                // state['name'] or state['age'] etc.
	}

	handleSubmit = e =>{
		e.preventDefault();
		this.props.addUser(this.state);
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name: </label>
					<input type="text" id ="name" onChange={this.handleTextChange}/>
					<label htmlFor="age">Age: </label>
					<input type="text" id ="age" onChange={this.handleTextChange}/>   
					<label htmlFor="belt">Belt: </label>
					<input type="text" id ="belt" onChange={this.handleTextChange}/>      
					<button>Submit</button>
				</form> 
			</div>
		)
	}
}

export default AddUserForm