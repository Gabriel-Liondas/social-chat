import React from "react";
import "./RecentPostHomeStyle.css"
import PostListing from "../../components/PostListing/PostListing";

export default function RecentPostHome() {


    return (
        <div id="RecentPostHomeMainContainer" className="MainContent">
            <PostListing />
        </div>
    );
}