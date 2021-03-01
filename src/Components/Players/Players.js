import React from 'react';
// Add Bootstrap
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Add FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css';

const Players = (props) => {
    const {name, image, previousTeam, playerType, salary} = props.player;
    return (
        <div className="players-info">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="info-txt">
                <h5>Name: {name}</h5>
                <p><small>Previous Team: </small>{previousTeam}</p>
                <p><small>Play Types: </small>{playerType}</p>
                <p><small>Salary/session: </small>${salary}</p>
                {/* Added FontAwesomeIcon & Bootstrap */}
                <button className="btn btn-success" onClick={() =>props.handleAddPlayers(props.player)}><FontAwesomeIcon icon={faPlus} /> Add Player</button>
            </div>
        </div>
    );
};

export default Players;