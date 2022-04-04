import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          {/* <News pageSize={6} country="in" category="sports" /> */}
          <Routes>
            <Route
              path="/"
              element={
                <News
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
                  pageSize={this.pageSize}
                  country="in"
                  category="Business"
                />
              }
            />
            <Route
              path="/entertainment/*"
              element={
                <News pageSize={6} country="in" category="Entertainment" />
              }
            />
            <Route
              path="/general/*"
              element={
                <News
                  pageSize={this.pageSize}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              path="/health/*"
              element={
                <News pageSize={this.pageSize} country="in" category="Health" />
              }
            />
            <Route
              path="/science/*"
              element={
                <News
                  pageSize={this.pageSize}
                  country="in"
                  category="Science"
                />
              }
            />
            <Route
              path="/sports/*"
              element={
                <News pageSize={this.pageSize} country="in" category="Sports" />
              }
            />
            <Route
              path="/technology/*"
              element={
                <News
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
