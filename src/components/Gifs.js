import React from "react"
import "./Gifs.css"

export default function Gif ( {title, url, id}) {
    // console.log(datos)
    return ( 
    <div class="gif" key={id}>
        <span>{title}</span>
        <img src={url} alt={title}/>
    </div>
    )
}