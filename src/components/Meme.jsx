import React from "react";
import memesData from "../memesData";

export default function Meme() {
    function getRandomMeme() {
        const memesArray = memesData.data.memes
        const num = Math.floor(Math.random()*memesArray.length);
        console.log(memesArray[num].url)
    }

    return (
        <main className="main">
            <div className="div">
                <input type="text" placeholder="Top text" className="div-input"/>
                <input type="text" placeholder="Bottom text" className="div-input"/>
                <button 
                className="div-button" onClick={getRandomMeme}>Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}