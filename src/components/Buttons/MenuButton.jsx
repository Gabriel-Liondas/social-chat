import React, { useState } from 'react'
import "./MenuButtonStyle.css"
import { useNavigate } from 'react-router-dom';

export default function MenuButton(props) {

    const navigate = useNavigate(`/${props.to}`)

    return (
                <div className={`menuButton ${props.variation} ${props.selectedBtn ? "selected": ""}`} icon="" onClick={props.onClick}>
                    <i className='material-icons menuButtonsIcon'>{props.icon}</i>
                    <p>{props.innerText}</p>   
                </div>
    );
}

