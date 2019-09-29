import React, { Component } from 'react';
import User from './User';
import AddUserForm from './AddUserForm';

class App extends Component {
  state = {
    users: [
      {name: 'boy1', age: 12, belt: 'black', id: 1},
      {name: 'boy2', age: 21, belt: 'purple', id: 2},
      {name: 'boy3', age: 54, belt: 'yellow', id: 3}
    ]
  }

  addUser = user =>{
    user.id = Math.random();
    let users = [...this.state.users,user]
    // let users2 = this.state.users
    // users2.splice(users2.length,0,user)
    this.setState({
      users: users
    })
  }

  deleteUser = id => {
    let users = this.state.users.filter(user => {
      return user.id !== id
    });
    
    this.setState({
      users: users
    })
  }

  componentDidMount(){
    console.log('Component Mounted')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Component Updated')
    console.log(prevProps,prevState)
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <User deleteUser = {this.deleteUser} users = {this.state.users}/>
        <AddUserForm addUser = {this.addUser}/>
      </div>
    );
  }
}

export default App;
