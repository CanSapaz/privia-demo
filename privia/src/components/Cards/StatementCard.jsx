import React from 'react'



function StatementCard({hrColor,title,description}) {
  return (
    <div className="card">
    <div className="header"><strong>{title}</strong></div>
    <hr style={{color:hrColor}} />
    <div className="body">
     {description}
    </div>
  </div>
  )
}

export default StatementCard