import React from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/Components/UIElements/Card";
import Button from "../../shared/Components/FormElements/Button";

import './PlaceList.css'

const PlaceList =props=>{
    if(props.items.length === 0){
        return (<div className="center">
        <Card>
        <h2>No users found.</h2>
        <Button to="/places/new">Share Place</Button>
        </Card>
        </div>);
    }
    return (<ul className="place-list">
        {props.items.map(place=>(<PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creator} coordinates={place.location}/>))}
    </ul>);
    
};

export default PlaceList;