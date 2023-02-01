import React from "react";

import Avatar from "../../../shared/Components/UIElements/Avatar";
import Card from "../../../shared/Components/UIElements/Card";

import {Link} from 'react-router-dom';

import './UserItem.css';

const UserItem = props => {
    return <li className="user-item">
        
        <div>
            <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
            <div className="user-item__image">
                <Avatar image={props.image} alt={props.name}/>
            </div>
            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>{props.placeCount}{props.placeCount===1 ? ' Place' : ' Places'}</h3>
            </div> 
            </Link>
            </Card>
        </div>
    </li>
};

export default UserItem;