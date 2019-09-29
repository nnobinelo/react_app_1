import React from 'react';
import './User.css'

const User = ({users, deleteUser}) =>{ // or const {users} = props; // or const varName = this.props.users
	// const userList = users.map(user=>{
	//     if(user.age > 20){
	//     return (
	//         <div className="user" key ={user.id}>
	//             <div>Name: {user.name}</div>
	//             <div>Age: {user.age}</div>
	//             <div>Belt: {user.belt}</div>
	//         </div>
	//     )
	//     } else {
	//         return null
	//     }
	// })
	const userList = users.map(user=>{
		return user.age>20 ? 
		(
			<div className="user" key ={user.id}>
				<div>Name: {user.name}</div>
				<div>Age: {user.age}</div>
				<div>Belt: {user.belt}</div>
				<button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
			</div>
		):
		null
	})

	return(
		<div className="user-list">
			{userList}    
		</div>
	)
}

export default User