import React, { useState } from 'react'
import "./ActionButtonStyle.css"
import { Link, useNavigate } from 'react-router-dom';

export default function ActionButton(props) {
    return (
                <button className={`actionButton ${props.variation} ${props.selectedBtn ? "selected": ""}`} onClick={props.onClick} >
                    <p>{props.innerText}</p>   
                </button>
    );
}

