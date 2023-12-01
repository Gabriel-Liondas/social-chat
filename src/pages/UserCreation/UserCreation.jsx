import React from "react";
import "./UserCreationStyle.css"
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import ProfileImageInput
 from "../../components/Inputs/LoginInputs/ProfileImageInput/ProfileImageInput";
export default function UserCreation() {


    return (
        <div id="UserCreationPage" className="LoginContent">
            <div className="CreationContentContainer">
                <ProfileImageInput />
                <input type="text" />
                <input type="text" />
                <div className="CreationButtonContainer">
                    <ActionButton innerText="Log-in" variation="lightPurpleBtn"/>
                    <ActionButton innerText="Criar conta" variation="highlightedBtn" />
                </div>
            </div>
        </div>
    );
}