import React from 'react'
import { Link } from 'react-router-dom'



function MiniCard({icon,title,content,buttonText,buttonLink}) {
  return (
    <div className='card mini-card-component mb-3'>
        <div className="title d-flex justify-content">
            <span>{icon}</span> <h4>{title}</h4>
        </div>
        <div className="content mt-3">
            {content}
        </div>
        <div className="button mt-3">
            <Link to={buttonLink ? buttonLink : "#"}>
              {`${buttonText} >`}
            </Link>
        </div>
    </div>
  )
}

export default MiniCard