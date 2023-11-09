import React from 'react'
import "./SideBarMenuStyle.css"
import MenuButton from "../Buttons/MenuButton"

function SideBarMenu() {

    function onClickHomeBtn(e) {
        console.log(e.target.value)
    }

    return (
        <div id="SideBarMainContainer">
            <div id="SideBarProfileContainer">

            </div>
            <div id="SideBarButtonContainer">

                <MenuButton innerText="Post recentes" variation="lightPurpleBtn"  icon="forum"/>
                <MenuButton innerText="Pesquisar usuário" variation="darkPurpleBtn"icon="person_search"/>
                <MenuButton innerText="Pesquisar post" variation="lightPurpleBtn" icon="manage_search"/>
                <MenuButton innerText="Meu Perfil" variation="darkPurpleBtn" icon="person"/>
                <MenuButton innerText="Adicionar Post" variation="highlightedBtn" icon="chat_bubble"/>
            </div>
        </div>
    );
}

export default SideBarMenu
