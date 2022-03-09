import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://ajo.prod.reuters.tv/api/v2/img/6228072ee4b085d396fd5054-1646790446502?location=LANDSCAPE"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
