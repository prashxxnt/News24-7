import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,ImageUrl,newsUrl}=this.props;
    return (
      <div className="card my-3" style={{width: "20rem"}}>
      <img src={!ImageUrl?"https://images.moneycontrol.com/static-mcnews/2022/01/GDP_India_shutterstock_1368069491-770x433.jpg":ImageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="blank" className="btn  btn-sm btn-dark">Read more</a>
      </div>
    </div>
    )
  }
}

export default NewsItem