import React from "react";
import "./UserCreationStyle.css"
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import ProfileImageInput from "../../components/Inputs/LoginInputs/ProfileImageInput/ProfileImageInput";
import ProfileTextInput from "../../components/Inputs/LoginInputs/ProfileTextInput/ProfileTextInput";
export default function UserCreation() {


    return (
        <div id="UserCreationPage" className="LoginContent">
            <div className="CreationContentContainer">
                <ProfileImageInput />
                <ProfileTextInput placeholder="Digite seu nome"/>
                <ProfileTextInput placeholder="Digite seu e-mail"/>
                <div className="CreationButtonContainer">
                    <ActionButton innerText="Log-in" variation="lightPurpleBtn"/>
                    <ActionButton innerText="Criar conta" variation="highlightedBtn" />
                </div>
            </div>
        </div>
    );
}