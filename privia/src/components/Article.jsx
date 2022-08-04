import React from "react";



function Article({content,title,date,fieldName,src}) {
  return (
    <div className="article-component d-flex justify-content-center align-items-center mb-3">
      <div>
        <img
          src={src}
          alt=""
          width={"128px"}
          height={"128px"}
        />
      </div>
      <div className="d-flex flex-column justify-content-left body">
        <h4>{title}</h4>
        <p>
         {content}
        </p>
        <div className="d-flex justify-content-left">
            <strong className="text-muted">{date} - {fieldName}</strong>
        </div>
      </div>
    </div>
  );
}

export default Article;
