import React from "react";
import './HomeButton.css';
import {useHistory} from 'react-router-dom';

const HomeButton = () => {
    const history = useHistory();

    return (
            <button className="home-btn" onClick={() =>history.push(`/`)}><i className="fas fa-home"></i></button>
    )
}

export default HomeButton;