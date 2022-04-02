import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;

    let a = date;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/tech/img/2022/03/30/1600x900/34b37fd044c086eaf5cad7b613b70ce5_1645332046312_1648620612564.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                By {!author ? "unknown" : author} on {a}
              </small>
            </p>
            <a
              rel="noreferrence"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
