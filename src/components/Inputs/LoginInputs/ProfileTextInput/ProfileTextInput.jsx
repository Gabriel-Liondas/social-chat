import React, { useEffect, useState } from "react";
import "./ProfileTextInputStyle.css"
import defaultPic from "../../../../assets/defaultPic.png"

export default function ProfileTextInput(props) {

    return (
            <input id="textInput" type="text" placeholder={props.placeholder} /> 
        
    );
}