import React, { useState } from 'react'
import "./MenuButtonStyle.css"
import { Link, useNavigate } from 'react-router-dom';

export default function MenuButton(props) {
    return (
                <Link className={`menuButton ${props.variation} ${props.selectedBtn ? "selected": ""}`} to={`/${props.to}`} >
                    <i className='material-icons menuButtonsIcon'>{props.icon}</i>
                    <p>{props.innerText}</p>   
                </Link>
    );
}

