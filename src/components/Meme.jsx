import React from "react";
import memesData from "../memesData";

export default function Meme() {    

    const [meme, setMeme] = React.useState(
        {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )
    const [allmemeImages, setAllMemeImages] = React.useState(memesData) 

    function getMemeImage() {
            const memesArray = allmemeImages.data.memes
            const num = Math.floor(Math.random()*memesArray.length);
            const url = memesArray[num].url
            setMeme(prevMeme => (
                {...prevMeme,
                randomImage: url 
                }
            )) 
        }
    return (
        <main className="main">
            <div className="div">
                <input type="text" placeholder="Top text" className="div-input"/>
                <input type="text" placeholder="Bottom text" className="div-input"/>
                <button 
                className="div-button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <img src={meme.randomImage} className="meme-image" />
        </main>
    )
}