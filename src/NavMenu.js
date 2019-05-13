import React from 'react'

export default function NavMenu({info}) {
  return (
    
      <ul className='nav-item-style'>
  {info.map(el =>
   (<li className='marg'>
       <a href="#" className='nav-link-style'>{el.name}</a>
   {!el.sub?null: <ul className='sub-item-style'>{el.sub.map(el =>
       (<li className='marg'><a href="#"  className='sub-link-style'>{el}</a></li>) )}</ul>}</li>
          ))}
      </ul>
    
  )
}


