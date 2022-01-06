import React from 'react';

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.item.imageUrl} className="card--img" />
            <span className="card--body">
                <span className="card--head">
                    <img src="../images/icon.png" className='world-icon' />
                    <span> {props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="card--mapslink">View in google maps</a>
                </span>
                <h1 className="card--title">{props.item.title}</h1>
                <h3 className="card--date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="card--description">{props.item.description}</p>
            </span>
        </div>
    )
}