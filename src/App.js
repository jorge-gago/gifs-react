import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import './App.css';
import { link, Route} from "wouter"


function App() {
  return (
    <div className="App">
      <h1>gifs</h1>
      <Route 
        component={ListOfGifs}
        path="/gif/:word"
      />
      {/* <ListOfGifs /> */}
    </div>
  )
}

export default App;


// const GIFS = [
//   'https://media3.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47hivmtvysvhqxhmv020y0lhh6mgm0dezjcke1jlqk&rid=giphy.gif&ct=g',
//   'https://media1.giphy.com/media/vO4ik3XWjkQ2A/100.webp?cid=ecf05e4713p2zim93mbp8o2ijz7yqbn0qm05v0opdu5pr9wm&rid=100.webp&ct=g'
// ]

// const otro = ['https://media3.giphy.com/media/cnbsOTkEJnq0/200w.webp?cid=ecf05e4713p2zim93mbp8o2ijz7yqbn0qm05v0opdu5pr9wm&rid=200w.webp&ct=g']


// {
//   gifs.map(gif => <img src={gif} alt=""/>)
// }
// <botton onClick={() => {
//   setGifts(otro) 
// }}>cambiar gif</botton>


/* <botton onClick={() => {
      setGifts(otro) 
    }}>cambiar gif</botton> */