import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, ImageUrl, newsUrl, author, publishedAt, source } = this.props;
    return (
      <div className="card my-3">
        <img src={!ImageUrl ? "https://images.moneycontrol.com/static-mcnews/2022/01/GDP_India_shutterstock_1368069491-770x433.jpg" : ImageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '95%', zIndex: 1 }}>{source}</span>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">by {author ? author : "Unknown"} at {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newsUrl} target="blank" className="btn  btn-sm btn-dark">Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem