import React from 'react'



function CombinedClipart({exteriorPicture,interiorPicture}) {
  return (
    <div className='combined-clipart-component'>
        <img src={exteriorPicture} alt="img" width={"92px"} height="92px" />
        <div className='interior'>
            <img src={interiorPicture} alt="img"  width={"50px"} height="50px" />
        </div>
    </div>
  )
}

export default CombinedClipart