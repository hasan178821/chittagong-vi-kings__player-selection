import React from 'react';
import './Players.css';

const Players = (props) => {
    // console.log(props);
    const {name, image, previousTeam, playerType, salary} = props.player;
    return (
        <div className="players-info">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="info-txt">
                <h3>Name: {name}</h3>
                <p><small>Previous Team: </small>{previousTeam}</p>
                <p><small>Play Types: </small>{playerType}</p>
                <p><small>Salary/session: </small>${salary}</p>
                <button onClick={() =>props.handleAddPlayers(props.player)}>Add Player</button>
            </div>
        </div>
    );
};

export default Players;