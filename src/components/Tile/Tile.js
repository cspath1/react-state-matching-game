import React from 'react'

import './Tile.css'

const Tile = (props) => {

  let style = {
    backgroundColor: (props.selected || props.matched) ? props.color : null,
  };

  return (
    <div className='Tile' style = {style}>
      { (props.selected || props.matched) ? props.svg : null }
    </div>
  )
}

export default Tile
