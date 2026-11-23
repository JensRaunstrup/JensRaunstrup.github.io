import { useState, useEffect } from "react";

import "./Like-dislike-buttons.css"


function LikeDislikeButtons() {
    console.log("likeDislikeButtons ran")

    return (
        <>
            <div>
                <div className="buttonContainer">
                    <button className="button" id="likeButton">Like</button>
                    <button className="button" id="dislikeButton">Dislike</button>
                </div>
            </div>
        </>
    );
};


export default LikeDislikeButtons;