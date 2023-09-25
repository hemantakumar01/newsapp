import React from 'react'


const NewsItem = (props)=> {
  
    let {title , description ,imgUrl ,newsUrl, author, date, source} = props;
    return (
      <div className="card my-3" >
         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>{!source?"Unknown":source}</span>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">
            {description}......
        </p>
        <p className="card-text"><small className="text-body-secondary">By <strong>{!author?"Unknown":author}</strong> on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">
            Know More
        </a>
        </div>
    </div>
)
    
  }
export default NewsItem

