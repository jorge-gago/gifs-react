import React from "react"

export default function Gif ( {title, url, id}) {
    // console.log(datos)
    return ( 
    <div key={id}>
        <span>{title}</span>
        <img src={url} alt={title}/>
    </div>
    )
}