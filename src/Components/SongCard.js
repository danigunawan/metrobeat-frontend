import React from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

const SongCard = (props) => {
  console.log('song card props', props)
  return(
    <div onClick={() => props.handleChooseSongClick(props.song)}>
      <h3>{props.song.artists[0].name}</h3>
      <h5>{props.song.name}</h5>
      <img src={props.song.album.images[0].url} alt="album cover"/>
    </div>
  )
}

export default SongCard
