import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./topbar.css"
import {NotificationsIcon} from '@material-ui/icons';

export default function AdminViewPage() {
	return (
			<div className="topbar">
				<div className="topbarWrapper">
				<div className="topbarLeft">
					<span className="brand">Codemi</span>
				</div>
				<div className="topbarRight">
					<div className="Notifications">
						<NotificationsNone />
					</div>

					  <div className="activeUser">
					    <DropdownButton
					      as={ButtonGroup}
					      menuAlign={{ lg: 'right' }}
					      <Image src="art by rusami.jpg" roundedCircle />
					      id="dropdown-menu-align-responsive-1"
					    >
					      <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
					      <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
					    </DropdownButton>
					  </div>
				</div>

				</div>
			</div>

		);
}