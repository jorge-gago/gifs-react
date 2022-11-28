import React from 'react'
import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gifs'

export default function ListOfGifs ( params) {
    const keyword = params.params.word
    console.log(params.params.word)
    const [gifList, setGifts] = useState([])
    // console.log('1')
    useEffect(() => {
        console.log('2', {keyword})
        getGifs({keyword}).then(gifs => setGifts(gifs))
    }, [keyword])

 return ( 
    gifList.map(gif => <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id}/>)
    )
}
// {
//   // console.log(gif)
//   // return (
//   //   <div  key={gif.id}>
//   //     <span>-------------</span>
//   //     <Gif title={gif.title} url={} />
//   //       {/* <span>{gif.title}</span>
//   //       <img src={gif} alt="gif.title" /> */}
//   //   </div>
//   )
// })