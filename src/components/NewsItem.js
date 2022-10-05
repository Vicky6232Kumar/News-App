import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {

    let { tittle, description, urlImage, newsUrl, author, date, source } = this.props;
    return (
      <div className="card my-3">
        <img src={!urlImage ? "https://images.hindustantimes.com/tech/img/2022/10/04/1600x900/FeBBB-fWIAAqtsi_1_1664884952597_1664884952744_1664884952744.jpg" : urlImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tittle}  </h5>
          <p className="card-text">{description}</p>
          <hr />
          <div className="d-flex justify-content-between">
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            <span>Source: {source}</span>
          </div>
          <p className="card-text"><small className="text-muted">{!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
        </div>
      </div>
    );
  }
}
