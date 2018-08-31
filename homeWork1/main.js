import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

 

import {users} from './users.js';
import {AddUserInfo} from './AddUserInfo';
 
const mountNode = document.getElementById('App');

const AddUsersCard = (props)=>{
	let usersArr = props.arr.map(el =>{
		let keys = Object.keys(el);
		return <AddUserInfo aboutUser={el}/>
	})
	return usersArr;
};



ReactDOM.render(<AddUsersCard arr={users}/>, mountNode);