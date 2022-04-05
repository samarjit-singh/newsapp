import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          {/* <News setProgress={setProgress} pageSize={6} country="in" category="sports" /> */}
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              path="/business/*"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="Business"
                />
              }
            />
            <Route
              path="/entertainment/*"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={6}
                  country="in"
                  category="Entertainment"
                />
              }
            />
            <Route
              path="/general/*"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              path="/health/*"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              path="/science/*"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="Science"
                />
              }
            />
            <Route
              path="/sports/*"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="Sports"
                />
              }
            />
            <Route
              path="/technology/*"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="Technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
