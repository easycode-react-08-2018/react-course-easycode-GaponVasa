import React from 'react';
import ReactDOM from 'react-dom';

import {AddTableRow} from './AddTableRow';
import {AddTableRowWithLink} from './AddTableRowWithLink';
import {AddAvatar} from './AddAvatar';


export const AddUserInfo = (props) =>{

	const aboutUser = props.aboutUser;
	const birthdate = {titleData:'Дата рождения', info:aboutUser.birthdate};
	const gender = {titleData:'Пол', info:aboutUser.gender};
	const address = {titleData:'Адрес', info:aboutUser.address};
	const dummyLink = "#";
	const emailData = {titleData:'Адрес', info: aboutUser.email, link: dummyLink};

	return(
		<div className="panel panel-info" key={aboutUser.id}>
			<div className="panel-heading">
				<h3 className="panel-title">{aboutUser.fullName}</h3>
			</div>
			<div className="panel-body">
				<div className="column">
					<div>
						<AddAvatar avatarUrl={aboutUser.avatarUrl}/>
						<div className=" col-md-9 col-lg-9">
							<table className="table table-user-information">
								<tbody>
									<AddTableRow {...birthdate}/>
									<AddTableRow {...gender}/>
									<AddTableRow {...address}/>
									<AddTableRowWithLink {...emailData}/>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>)
	};
