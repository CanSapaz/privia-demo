import React from 'react'



function CommentBox({profileImage,brandImage,comment,username,userTitle,cardWith}) {
  return (
    <div className='commentbox-component d-flex justify-content-center' >
        <div className="card" style={{width:cardWith}}>
            <div className="head">
                <img src={brandImage} alt="" width={"120px"} />
            </div>
            <div className='mt-5'>
            {comment}
            </div>
            <div className="d-flex justify-content-start align-items-center mt-5">
                <div className='img'>
                    <img src={profileImage} alt="" width={"50px"} />
                </div>
                <div className='d-flex flex-column margin-l-2 '>
                    <span>{username}</span>
                    <span>{userTitle}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentBox