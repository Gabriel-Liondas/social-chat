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

                <MenuButton innerText="Post recentes" variation="lightPurpleBtn" to="recent_posts" icon="forum"/>
                <MenuButton innerText="Pesquisar usuário" variation="darkPurpleBtn" to="search_user" icon="person_search"/>
                <MenuButton innerText="Pesquisar post" variation="lightPurpleBtn" to="search_post" icon="manage_search"/>
                <MenuButton innerText="Meu Perfil" variation="darkPurpleBtn" to="my_profile" icon="person"/>
                <MenuButton innerText="Adicionar Post" variation="highlightedBtn" to="add_post" icon="chat_bubble"/>
            </div>
        </div>
    );
}

export default SideBarMenu
