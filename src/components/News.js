import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container md-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydecs" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydecs" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydecs" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
