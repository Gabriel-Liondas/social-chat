import React, { useEffect, useState } from "react";
import "./ProfileImageInputStyle.css"
import defaultPic from "../../../../assets/defaultPic.png"

export default function ProfileImageInput(props) {
    const [image,setImage] = useState(defaultPic)

    function onCHangeHandler(e) {
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    return (
        // <div className="profileImageInputContainer">
        //     <input name="profilePictureInput" type="file" className="profileImageInput" onChange={onCHangeHandler} accept="image/x-png,image/gif,image/jpeg" />
        //     {image && <img className="profileImageInputPlaceholder" src={image}/>}
        // </div>
        <label htmlFor="picture-input" className="profileImageInputContainer">
            <div className="pictureWrap pictureUpload" >
            <img className="picture" for="picture-input" src={image}/>
            </div>
            <input id="picture-input" type="file" onChange={onCHangeHandler}/> 
        </label>
    );
}